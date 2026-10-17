// Small synthesized sound kit (Web Audio, no audio files).
// Browsers only allow audio after a user gesture, so nothing plays until the first click or key press.
window.SFX = (() => {
  const KEY = "sfx";
  const read = () => { try { return localStorage.getItem(KEY) !== "off"; } catch { return true; } };
  let on = read(), ctx = null, master = null, unlocked = false, noiseBuf = null, lastHover = 0;

  const ensure = () => {
    const AC = window.AudioContext || window.webkitAudioContext;
    if (!AC) return null;
    if (!ctx) {
      ctx = new AC();
      master = ctx.createGain(); master.gain.value = 0.55; master.connect(ctx.destination);
      noiseBuf = ctx.createBuffer(1, ctx.sampleRate * 0.5, ctx.sampleRate);
      const d = noiseBuf.getChannelData(0);
      for (let i = 0; i < d.length; i++) d[i] = Math.random() * 2 - 1;
    }
    if (ctx.state === "suspended") ctx.resume();
    return ctx;
  };
  const unlock = () => { unlocked = true; if (on) ensure(); };
  ["pointerdown", "keydown", "touchstart"].forEach((e) => addEventListener(e, unlock, { once: true, passive: true, capture: true }));
  const ready = () => on && unlocked && ensure();

  function tone(freq, dur, { type = "sine", vol = 0.12, glide = 0, delay = 0, attack = 0.004 } = {}) {
    if (!ready()) return;
    const t = ctx.currentTime + delay, o = ctx.createOscillator(), g = ctx.createGain();
    o.type = type; o.frequency.setValueAtTime(freq, t);
    if (glide) o.frequency.exponentialRampToValueAtTime(glide, t + dur);
    g.gain.setValueAtTime(0.0001, t); g.gain.exponentialRampToValueAtTime(vol, t + attack); g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
    o.connect(g).connect(master); o.start(t); o.stop(t + dur + 0.02);
  }
  function noise(dur, { vol = 0.06, freq = 2500, q = 1.2, delay = 0, sweep = 0 } = {}) {
    if (!ready()) return;
    const t = ctx.currentTime + delay, s = ctx.createBufferSource(), f = ctx.createBiquadFilter(), g = ctx.createGain();
    s.buffer = noiseBuf; f.type = "bandpass"; f.frequency.setValueAtTime(freq, t); f.Q.value = q;
    if (sweep) f.frequency.exponentialRampToValueAtTime(sweep, t + dur);
    g.gain.setValueAtTime(vol, t); g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
    s.connect(f).connect(g).connect(master); s.start(t); s.stop(t + dur + 0.02);
  }

  const api = {
    hover() { const n = performance.now(); if (n - lastHover < 45) return; lastHover = n; tone(2100, 0.035, { vol: 0.025 }); },
    click() { tone(880, 0.07, { type: "square", vol: 0.035, glide: 520 }); noise(0.03, { vol: 0.03, freq: 4000 }); },
    key() { noise(0.022, { vol: 0.045, freq: 2200 + Math.random() * 1800, q: 3 }); },
    run() { tone(420, 0.09, { type: "triangle", vol: 0.08, glide: 620 }); },
    success() { [659, 880, 1319].forEach((f, i) => tone(f, 0.22, { type: "triangle", vol: 0.06, delay: i * 0.075 })); },
    open() { noise(0.3, { vol: 0.05, freq: 600, q: 0.8, sweep: 3000 }); tone(330, 0.28, { vol: 0.05, glide: 660 }); },
    close() { noise(0.22, { vol: 0.04, freq: 2600, q: 0.8, sweep: 500 }); tone(560, 0.2, { vol: 0.04, glide: 280 }); },
    get on() { return on; },
    set(v) {
      on = v;
      try { localStorage.setItem(KEY, v ? "on" : "off"); } catch {}
      if (v) { unlocked = true; ensure(); tone(520, 0.09, { type: "triangle", vol: 0.08 }); tone(1040, 0.14, { type: "triangle", vol: 0.08, delay: 0.08 }); }
    },
  };
  return api;
})();
