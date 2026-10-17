// Sound for the site, all synthesized with Web Audio (no audio files):
// short UI effects plus a generative lo-fi instrumental loop for background music.
// Browsers only allow audio after a user gesture, so nothing plays before the first click or key press.
window.SFX = (() => {
  const KEY = "sound-settings";
  const defaults = { fx: true, fxVol: 0.6, music: true, musicVol: 0.35 };
  const load = () => { try { return { ...defaults, ...JSON.parse(localStorage.getItem(KEY) || "{}") }; } catch { return { ...defaults }; } };
  const s = load();
  const save = () => { try { localStorage.setItem(KEY, JSON.stringify(s)); } catch {} };

  let ctx = null, fxBus = null, musicBus = null, verb = null, noiseBuf = null, unlocked = false, lastHover = 0;
  const listeners = new Set();
  const emit = () => listeners.forEach((fn) => fn());

  function ensure() {
    const AC = window.AudioContext || window.webkitAudioContext;
    if (!AC) return null;
    if (!ctx) {
      ctx = new AC();
      const out = ctx.createDynamicsCompressor(); out.threshold.value = -14; out.ratio.value = 3; out.connect(ctx.destination);
      fxBus = ctx.createGain(); fxBus.gain.value = s.fxVol; fxBus.connect(out);
      musicBus = ctx.createGain(); musicBus.gain.value = 0; musicBus.connect(out);
      noiseBuf = ctx.createBuffer(1, ctx.sampleRate, ctx.sampleRate);
      const d = noiseBuf.getChannelData(0);
      for (let i = 0; i < d.length; i++) d[i] = Math.random() * 2 - 1;
      // a small room reverb from decaying noise
      const ir = ctx.createBuffer(2, ctx.sampleRate * 2.2, ctx.sampleRate);
      for (let c = 0; c < 2; c++) { const ch = ir.getChannelData(c); for (let i = 0; i < ch.length; i++) ch[i] = (Math.random() * 2 - 1) * Math.pow(1 - i / ch.length, 3); }
      verb = ctx.createConvolver(); verb.buffer = ir;
      const wet = ctx.createGain(); wet.gain.value = 0.28; verb.connect(wet).connect(musicBus);
    }
    if (ctx.state === "suspended") ctx.resume();
    return ctx;
  }
  function unlock() { unlocked = true; ensure(); if (s.music) music.start(); }
  ["pointerdown", "keydown", "touchstart"].forEach((e) => addEventListener(e, unlock, { once: true, passive: true, capture: true }));

  /* ---------------- UI effects ---------------- */
  const fxReady = () => s.fx && unlocked && ensure();
  function tone(freq, dur, { type = "sine", vol = 0.12, glide = 0, delay = 0, attack = 0.004, bus } = {}) {
    const t = ctx.currentTime + delay, o = ctx.createOscillator(), g = ctx.createGain();
    o.type = type; o.frequency.setValueAtTime(freq, t);
    if (glide) o.frequency.exponentialRampToValueAtTime(glide, t + dur);
    g.gain.setValueAtTime(0.0001, t); g.gain.exponentialRampToValueAtTime(vol, t + attack); g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
    o.connect(g).connect(bus || fxBus); o.start(t); o.stop(t + dur + 0.05);
    return g;
  }
  function noise(dur, { vol = 0.06, freq = 2500, q = 1.2, delay = 0, sweep = 0, type = "bandpass", bus, at } = {}) {
    const t = (at ?? ctx.currentTime) + delay, src = ctx.createBufferSource(), f = ctx.createBiquadFilter(), g = ctx.createGain();
    src.buffer = noiseBuf; f.type = type; f.frequency.setValueAtTime(freq, t); f.Q.value = q;
    if (sweep) f.frequency.exponentialRampToValueAtTime(sweep, t + dur);
    g.gain.setValueAtTime(vol, t); g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
    src.connect(f).connect(g).connect(bus || fxBus); src.start(t, Math.random() * 0.5); src.stop(t + dur + 0.05);
  }
  const fx = {
    hover() { if (!fxReady()) return; const n = performance.now(); if (n - lastHover < 45) return; lastHover = n; tone(2100, 0.035, { vol: 0.025 }); },
    click() { if (!fxReady()) return; tone(880, 0.07, { type: "square", vol: 0.035, glide: 520 }); noise(0.03, { vol: 0.03, freq: 4000 }); },
    key() { if (!fxReady()) return; noise(0.022, { vol: 0.045, freq: 2200 + Math.random() * 1800, q: 3 }); },
    run() { if (!fxReady()) return; tone(420, 0.09, { type: "triangle", vol: 0.08, glide: 620 }); },
    success() { if (!fxReady()) return; [659, 880, 1319].forEach((f, i) => tone(f, 0.22, { type: "triangle", vol: 0.06, delay: i * 0.075 })); },
    open() { if (!fxReady()) return; noise(0.3, { vol: 0.05, freq: 600, q: 0.8, sweep: 3000 }); tone(330, 0.28, { vol: 0.05, glide: 660 }); },
    close() { if (!fxReady()) return; noise(0.22, { vol: 0.04, freq: 2600, q: 0.8, sweep: 500 }); tone(560, 0.2, { vol: 0.04, glide: 280 }); },
  };

  /* ---------------- generative lo-fi loop ---------------- */
  const BPM = 76, BEAT = 60 / BPM, STEP = BEAT / 2; // eighth notes
  const midi = (n) => 440 * Math.pow(2, (n - 69) / 12);
  // Fmaj7 - Em7 - Dm7 - Cmaj7, two bars each, voiced around middle C
  const CHORDS = [[53, 57, 60, 64, 67], [52, 55, 59, 62, 67], [50, 53, 57, 60, 64], [48, 52, 55, 59, 64]];
  const SCALE = [72, 74, 76, 79, 81, 84]; // C major pentatonic for the sparse melody
  const music = (() => {
    let timer = null, step = 0, next = 0, playing = false;
    function keys(freq, t, dur, vol) {
      // soft electric-piano: sine body plus a quiet octave, through a gentle lowpass, with reverb send
      const f = ctx.createBiquadFilter(); f.type = "lowpass"; f.frequency.value = 1800;
      const g = ctx.createGain();
      g.gain.setValueAtTime(0.0001, t); g.gain.exponentialRampToValueAtTime(vol, t + 0.015); g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
      [[1, "sine", 1], [2, "sine", 0.18], [1.003, "triangle", 0.35]].forEach(([m, type, a]) => {
        const o = ctx.createOscillator(), og = ctx.createGain(); o.type = type; o.frequency.value = freq * m; og.gain.value = a;
        o.connect(og).connect(f); o.start(t); o.stop(t + dur + 0.05);
      });
      f.connect(g); g.connect(musicBus); g.connect(verb);
    }
    function bass(freq, t, dur) {
      const o = ctx.createOscillator(), g = ctx.createGain(); o.type = "sine"; o.frequency.value = freq;
      g.gain.setValueAtTime(0.0001, t); g.gain.exponentialRampToValueAtTime(0.22, t + 0.02); g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
      o.connect(g).connect(musicBus); o.start(t); o.stop(t + dur + 0.05);
    }
    function kick(t) {
      const o = ctx.createOscillator(), g = ctx.createGain(); o.frequency.setValueAtTime(110, t); o.frequency.exponentialRampToValueAtTime(42, t + 0.18);
      g.gain.setValueAtTime(0.32, t); g.gain.exponentialRampToValueAtTime(0.0001, t + 0.32);
      o.connect(g).connect(musicBus); o.start(t); o.stop(t + 0.35);
    }
    function schedule(t, i) {
      const bar = Math.floor(i / 8), inBar = i % 8, chord = CHORDS[Math.floor(bar / 2) % CHORDS.length];
      const swing = inBar % 2 ? STEP * 0.12 : 0, ts = t + swing;
      if (inBar === 0) { chord.forEach((n, k) => keys(midi(n), t + k * 0.018, BEAT * 3.6, 0.05)); bass(midi(chord[0] - 12), t, BEAT * 1.6); }
      if (inBar === 5) bass(midi(chord[0] - 12), ts, BEAT * 0.9);
      if (inBar === 4 && bar % 2) chord.slice(1, 4).forEach((n, k) => keys(midi(n), t + k * 0.02, BEAT * 1.8, 0.035));
      if (inBar === 0 || (inBar === 5 && bar % 2 === 0)) kick(ts);
      if (inBar === 2 || inBar === 6) noise(0.16, { vol: 0.05, freq: 1800, q: 0.7, bus: musicBus, at: t });
      noise(0.04, { vol: inBar % 2 ? 0.012 : 0.02, freq: 8000, type: "highpass", q: 0.5, bus: musicBus, at: ts });
      if (Math.random() < 0.14) keys(midi(SCALE[(Math.random() * SCALE.length) | 0]), ts, BEAT * 1.4, 0.03);
      if (Math.random() < 0.3) noise(0.01, { vol: 0.012, freq: 3000 + Math.random() * 3000, q: 2, bus: musicBus, at: t + Math.random() * STEP }); // vinyl crackle
    }
    function tick() {
      while (next < ctx.currentTime + 0.25) { schedule(next, step++); next += STEP; }
    }
    return {
      get playing() { return playing; },
      start() {
        if (playing || !unlocked || !ensure()) return;
        playing = true; next = ctx.currentTime + 0.1;
        musicBus.gain.cancelScheduledValues(ctx.currentTime);
        musicBus.gain.setValueAtTime(musicBus.gain.value, ctx.currentTime);
        musicBus.gain.linearRampToValueAtTime(s.musicVol, ctx.currentTime + 3); // fade in
        timer = setInterval(tick, 60); tick(); emit();
      },
      stop(fade = 0.8) {
        if (!playing) return;
        playing = false; clearInterval(timer);
        musicBus.gain.cancelScheduledValues(ctx.currentTime);
        musicBus.gain.setValueAtTime(musicBus.gain.value, ctx.currentTime);
        musicBus.gain.linearRampToValueAtTime(0, ctx.currentTime + fade); emit();
      },
    };
  })();
  // pause when the tab is hidden, resume when it comes back
  document.addEventListener("visibilitychange", () => {
    if (document.hidden) music.stop(0.2); else if (s.music && unlocked) music.start();
  });

  return {
    ...fx,
    settings: s,
    get musicPlaying() { return music.playing; },
    onChange(fn) { listeners.add(fn); },
    setFx(on) { s.fx = on; save(); if (on) { unlocked = true; ensure(); fx.success(); } emit(); },
    setFxVol(v) { s.fxVol = v; save(); if (fxBus) fxBus.gain.setTargetAtTime(v, ctx.currentTime, 0.05); },
    setMusic(on) { s.music = on; save(); if (on) { unlocked = true; music.start(); } else music.stop(); emit(); },
    setMusicVol(v) { s.musicVol = v; save(); if (musicBus && music.playing) musicBus.gain.setTargetAtTime(v, ctx.currentTime, 0.1); },
  };
})();
