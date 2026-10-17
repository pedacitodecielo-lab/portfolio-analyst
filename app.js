(() => {
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];
  const esc = (t) => String(t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
  const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
  const F = "https://framerusercontent.com/images/";
  gsap.registerPlugin(ScrollTrigger, Flip);

  /* ======================= content (from the CV) ======================= */
  const XP = [
    { org: "PT Aneka Tambang Tbk. (ANTAM)", place: "Bogor", role: "Environmental Analyst Intern", from: "2026-01", to: "2026-02", bullets: [
      "Built a Python pipeline merging 20 years of GPM satellite rainfall, IoT rain gauges and extensometers for mine slope safety.",
      "Found 16 days on which the site's alert SOP missed national early-warning triggers, and recommended cumulative-rainfall criteria.",
      "Documented 10 data-integrity issues and showed a \"4x correlation\" came from one flagged outlier, preventing a false conclusion.",
      "Designed a 9-panel review dashboard (HTML/JS, Chart.js) for climatology, extremes, thresholds and data integrity." ] },
    { org: "Indonesian Agency for Meteorology, Climatology, and Geophysics (BMKG)", place: "Jakarta", role: "Climate Change Analyst Intern", from: "2025-07", to: "2025-08", bullets: [
      "Downscaled CMIP6 projections from about 100 km to site level (Python, bias correction) for a mining climate-risk assessment." ] },
    { org: "Institut Teknologi Bandung", place: "Bandung", role: "Teaching Assistant, Observational Meteorology & Continuum Mechanics", from: "2024-09", to: "2025-09", bullets: [
      "Developed practicum modules and led weekly sessions for 60+ undergraduates, including Python data-analysis tutorials." ] },
    { org: "Institut Teknologi Bandung", place: "Bandung", role: "Laboratory Assistant, Applied Meteorology Laboratory", from: "2024-04", to: "2026-09", bullets: [
      "Set up an inventory-tracking system for 30+ instruments and safety inductions, cutting gear-retrieval time for researchers." ] },
    { org: "Institut Teknologi Bandung", place: "Bandung", role: "Research Assistant & Field Surveyor", from: "2024-01", to: "2024-12", bullets: [
      "Conducted field surveys of residents and measured past flood marks and drainage conditions across the survey area.",
      "Co-designed and field-tested \"Jaring Embun\", a low-cost dew-harvesting instrument for arid regions, from prototype to deployment." ] },
  ];
  const EXTRA = [
    { org: "Atmosphaira, Meteorology Student Association ITB", place: "Bandung", role: "Head of Research and Development Division", from: "2025-05", to: "2026-02", bullets: [
      "Led a 10-person team from hardware prototype and firmware to field deployment of an IoT water-level and rainfall instrument.",
      "Shipped a real-time web dashboard combining live instrument data with WRF-Hydro river-discharge forecasts." ] },
    { org: "OSKM ITB 2024, Central New-Student Orientation", place: "Bandung", role: "Mentor", year: "2024", bullets: [
      "Guided new students through their introduction to the ITB campus environment." ] },
  ];
  const TOOLS = [
    ["BI & tools", "Power BI (DAX), Tableau, MS Excel, Word, PowerPoint, Figma, QGIS, Google Earth Engine, WRF, WRF-Hydro"],
    ["Languages", "Python (pandas, xarray), R (RStudio), SQL, NoSQL, MATLAB, HTML/CSS/JavaScript, Linux/Bash"],
    ["Methods", "Statistical modeling, machine learning, anomaly detection, web scraping, ETL, data visualization, geospatial analysis"],
    ["Spoken languages", "Indonesian (native), English (professional working proficiency)"],
  ];
  const ICONS = {
    pipe: '<svg viewBox="0 0 24 24"><path d="M4 6h10a4 4 0 0 1 0 8H8a4 4 0 0 0 0 8h12M4 6l3-3M4 6l3 3"/></svg>',
    chart: '<svg viewBox="0 0 24 24"><path d="M3 21h18M6 17V10M11 17V5M16 17v-5M21 17V8"/></svg>',
    model: '<svg viewBox="0 0 24 24"><path d="M3 18c4 0 5-12 9-12s5 12 9 12M3 6h4M17 6h4"/></svg>',
  };
  const byTitle = (re) => PROJECTS.find((p) => re.test(p.title)) || PROJECTS[0];
  const SERVICES = [
    { icon: "pipe", title: "Pipelines and web scraping", text: "I pull data that only exists as web pages or filings into clean SQL tables, with checks at every step.", proof: "864,000 food prices loaded every weekday", project: byTitle(/Food Price/) },
    { icon: "chart", title: "Dashboards people open", text: "Power BI and Tableau dashboards built around one decision, not a wall of charts.", proof: "4,165 tenders narrowed to an audit shortlist", project: byTitle(/Procurement/) },
    { icon: "model", title: "Statistical models and forecasts", text: "Anomaly detection, nowcasts and downscaled climate projections, with the assumptions written down.", proof: "FY2026 EBITDA nowcast of US$1.04B", project: byTitle(/Shopee/) },
  ];
  // ordered by when I joined, newest first, matching the query's ORDER BY
  const ORGS = [
    { logo: F + "33OEzNGbCg48GHmDeqwWP6ScozY.png", name: "PT Aneka Tambang Tbk. (ANTAM)", role: "Environmental Analyst Intern", joined: "2026-01" },
    { logo: F + "bQntW3L6A6NEGYD2y59CPol9KMA.png", name: "Indonesian Agency for Meteorology, Climatology, and Geophysics (BMKG)", role: "Climate Change Analyst Intern", joined: "2025-07" },
    { logo: F + "uIQQpAw4q3rmR9JKiyditnyc6Y.png", name: "Atmosphaira, Meteorology Student Association ITB", role: "Head of Research and Development Division", joined: "2025-05" },
    { logo: F + "K8mAYqJ6qDQp0OdDQ7bt8YXwOI.png", name: "Institut Teknologi Bandung", role: "B.Sc. Meteorology student; teaching, laboratory and research assistant", joined: "2022-08" },
  ];
  const topicOf = (p) => {
    const c = p.category || "";
    if (/IoT|Instrumentation/.test(c)) return "Instruments & IoT";
    if (/Web Scraping/.test(c)) return "Web scraping";
    if (/Hydrolog|Climate|Machine|Data Engineering/.test(c)) return "Climate & environment";
    return "Business & finance";
  };
  const TOPICS = ["All", "Business & finance", "Web scraping", "Climate & environment", "Instruments & IoT"];
  // Framer-hosted images can be resized by query; local files are served as they are
  const pic = (u, w) => (/^https?:/.test(u) ? `${u}?scale-down-to=${w}` : u);
  const fmtMonth = (d) => new Date(d).toLocaleDateString("en-GB", { month: "short", year: "numeric" });

  /* ======================= smooth scroll ======================= */
  const lenis = reduce ? null : new Lenis({ lerp: 0.1 });
  if (lenis) { lenis.on("scroll", ScrollTrigger.update); gsap.ticker.add((t) => lenis.raf(t * 1000)); gsap.ticker.lagSmoothing(0); }
  const nav = $("#nav");
  const goTo = (target) => { const el = target === "#top" ? 0 : $(target); if (el === null) return; lenis ? lenis.scrollTo(el, { offset: el === 0 ? 0 : -70, duration: 1.4 }) : (el === 0 ? scrollTo(0, 0) : el.scrollIntoView()); };
  document.addEventListener("click", (e) => {
    const a = e.target.closest('a[href^="#"]'); if (!a) return;
    const id = a.getAttribute("href");
    e.preventDefault(); setMobile(false);
    if (id.length > 1) goTo(id);
  });

  /* ======================= nav ======================= */
  const toggle = $(".nav-toggle"), mobile = $("#mobileNav");
  function setMobile(open) {
    toggle.setAttribute("aria-expanded", open); toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    mobile.hidden = !open; document.body.style.overflow = open ? "hidden" : "";
    if (open) gsap.from($$("a", mobile), { y: 24, opacity: 0, duration: 0.5, stagger: 0.05, ease: "power3.out" });
  }
  toggle.addEventListener("click", () => setMobile(toggle.getAttribute("aria-expanded") !== "true"));
  addEventListener("keydown", (e) => { if (e.key === "Escape") setMobile(false); });
  const navLinks = $$(".nav-links a");
  ScrollTrigger.create({ start: 40, end: "max", onToggle: (s) => nav.classList.toggle("solid", s.isActive) });
  navLinks.forEach((a) => {
    const sec = $(a.getAttribute("href"));
    sec && ScrollTrigger.create({ trigger: sec, start: "top 45%", end: "bottom 45%", onToggle: (s) => s.isActive && navLinks.forEach((l) => l.classList.toggle("on", l === a)) });
  });

  /* ======================= hero: a query that runs itself ======================= */
  const HERO_SQL = [
    [["k", "SELECT"], ["", " name, role, based_in"]],
    [["k", "FROM"], ["", " analysts"]],
    [["k", "WHERE"], ["", " name "], ["k", "LIKE"], ["s", " 'Emelio%'"]],
    [["k", "AND"], ["", " open_to_work = "], ["k", "TRUE"], ["", ";"]],
  ];
  const heroCode = $("#heroCode"), heroResult = $("#heroResult"), heroStatus = $("#heroStatus"), heroRun = $("#heroRun");
  const lineHTML = (parts, upTo = Infinity) => {
    let left = upTo, out = "";
    for (const [cls, txt] of parts) {
      if (left <= 0) break;
      const t = txt.slice(0, left); left -= t.length;
      out += cls ? `<span class="${cls}">${esc(t)}</span>` : esc(t);
    }
    return out;
  };
  const heroTable = () => `<table class="tbl"><thead><tr><th>name</th><th>role</th><th>based_in</th></tr></thead>
    <tbody><tr><td class="boxed">Emelio Exaudi<span class="mark"></span></td><td>Data Analyst</td><td>Bogor, Indonesia</td></tr></tbody></table>`;
  function showResult() {
    heroResult.innerHTML = heroTable();
    heroStatus.textContent = "1 row returned";
    if (reduce) { $(".mark", heroResult).style.clipPath = "none"; return; }
    gsap.from($$("th,td", heroResult), { opacity: 0, y: 6, duration: 0.35, stagger: 0.04, ease: "power2.out" });
    gsap.to($(".mark", heroResult), { clipPath: "inset(0 0% 0% 0)", duration: 0.7, delay: 0.35, ease: "power2.inOut" });
  }
  // types a query line by line into an <ol class="code">, presses Run, then calls done()
  function typer(codeEl, lines, runBtn, statusEl, done) {
    let token = 0;
    return () => {
      const run = ++token;
      statusEl.textContent = "";
      if (reduce) { codeEl.innerHTML = lines.map((l) => `<li>${lineHTML(l)}</li>`).join(""); done(); return; }
      codeEl.innerHTML = lines.map(() => "<li></li>").join("");
      const lis = $$("li", codeEl);
      let line = 0, ch = 0;
      const step = () => {
        if (run !== token) return;
        const len = lines[line].reduce((n, [, t]) => n + t.length, 0);
        ch++;
        lis[line].innerHTML = lineHTML(lines[line], ch) + '<span class="caret"></span>';
        if (ch >= len) { lis[line].innerHTML = lineHTML(lines[line]); line++; ch = 0; }
        if (line < lines.length) setTimeout(step, ch === 0 ? 180 : 26 + Math.random() * 30);
        else { statusEl.textContent = "Running…"; gsap.fromTo(runBtn, { scale: 0.94 }, { scale: 1, duration: 0.3, ease: "back.out(3)" }); setTimeout(() => run === token && done(), 450); }
      };
      step();
    };
  }
  const typeQuery = typer(heroCode, HERO_SQL, heroRun, heroStatus, showResult);
  heroRun.addEventListener("click", () => { heroStatus.textContent = "Running…"; heroResult.innerHTML = ""; setTimeout(showResult, 300); });

  // page-load sequence: wedge, photo, copy, then the query types itself
  if (!reduce) {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
    tl.from(".hero-wedge", { xPercent: -30, opacity: 0, duration: 1.1 })
      .from(".hero-photo img", { scale: 0.85, opacity: 0, duration: 1 }, 0.15)
      .from(".dot", { scale: 0, duration: 0.6, stagger: 0.12, ease: "back.out(2)" }, 0.7)
      .from(".hero-copy > *:not(.hero-sheet)", { y: 28, opacity: 0, duration: 0.8, stagger: 0.08 }, 0.3)
      .from(".hero-sheet", { y: 30, opacity: 0, duration: 0.8 }, 0.75)
      .add(typeQuery, 1.2);
    gsap.to(".ring", { rotation: 360, duration: 40, repeat: -1, ease: "none" });
    gsap.to(".hero-photo img", { yPercent: 8, ease: "none", scrollTrigger: { trigger: ".hero", start: "top top", end: "bottom top", scrub: true } });
  } else typeQuery();

  /* ======================= services ======================= */
  $("#services-grid").innerHTML = SERVICES.map((s) => `<li class="service">
    <div class="service-img"><img src="${pic(s.project.cover, 800)}" alt="" loading="lazy"></div>
    <span class="service-icon">${ICONS[s.icon]}</span>
    <h3>${s.title}</h3><p>${s.text}</p><p class="proof">${s.proof}</p></li>`).join("");

  /* ======================= toolkit ======================= */
  $("#toolTable").innerHTML = `<thead><tr><th>category</th><th>tools</th></tr></thead><tbody>${TOOLS.map(([c, t]) => `<tr><td>${c}</td><td>${t}</td></tr>`).join("")}</tbody>`;

  /* ======================= experience: bars on a shared month axis ======================= */
  const AX0 = new Date("2024-01-01"), AX1 = new Date("2026-10-01");
  const pos = (d) => (new Date(d) - AX0) / (AX1 - AX0);
  const months = (a, b) => { const x = new Date(a), y = new Date(b); return (y.getFullYear() - x.getFullYear()) * 12 + y.getMonth() - x.getMonth() + 1; };
  const lenText = (m) => (m < 12 ? `${m} mo` : `${Math.floor(m / 12)} yr${m % 12 ? ` ${m % 12} mo` : ""}`);
  const rowHTML = (x) => {
    const from = x.from || `${x.year}-01`, to = x.to || `${x.year}-12`;
    const left = pos(from + "-01"), right = pos(to + "-28");
    const when = x.year ? x.year : `${fmtMonth(from + "-01")} – ${fmtMonth(to + "-01")}`;
    const len = x.year ? x.year : lenText(months(from + "-01", to + "-01"));
    return `<li class="xp-row">
      <div><p class="xp-when">${when}</p><span class="xp-org">${x.org}</span><span class="xp-role">${x.role}, ${x.place}</span></div>
      <ul>${x.bullets.map((b) => `<li>${esc(b)}</li>`).join("")}</ul>
      <div class="span" aria-hidden="true"><div class="span-label"><span>2024</span><span>2026</span></div>
        <div class="span-track"><i class="span-bar" data-len="${len}" style="left:${(left * 100).toFixed(2)}%;width:${((right - left) * 100).toFixed(2)}%"></i></div></div>
    </li>`;
  };
  $("#xpList").innerHTML = XP.map(rowHTML).join("");
  $("#extraList").innerHTML = EXTRA.map(rowHTML).join("");
  $$(".span-bar").forEach((bar) => {
    if (reduce) return;
    gsap.fromTo(bar, { "--k": 0 }, { "--k": 1, duration: 1.2, ease: "power3.out", scrollTrigger: { trigger: bar, start: "top 88%", once: true } });
  });

  /* ======================= band: organizations as a query result ======================= */
  const ORG_SQL = [
    [["k", "SELECT"], ["", " logo, organization, role, joined"]],
    [["k", "FROM"], ["", " affiliations"]],
    [["k", "ORDER BY"], ["", " joined "], ["k", "DESC"], ["", ";"]],
  ];
  const orgCode = $("#orgCode"), orgResult = $("#orgResult"), orgStatus = $("#orgStatus"), orgRun = $("#orgRun");
  function showOrgs() {
    orgResult.innerHTML = `<table class="tbl org-tbl"><thead><tr><th>logo</th><th>organization</th><th class="org-role-col">role</th><th>joined</th></tr></thead><tbody>${ORGS.map((o, i) => `<tr>
      <td class="org-logo${i === 0 ? " boxed" : ""}"><img src="${esc(o.logo)}" alt="" loading="lazy">${i === 0 ? '<span class="mark"></span>' : ""}</td>
      <td>${esc(o.name)}<small class="org-role">${esc(o.role)}</small></td><td class="org-role-col">${esc(o.role)}</td><td class="mono-cell">${o.joined}</td></tr>`).join("")}</tbody></table>`;
    orgStatus.textContent = `${ORGS.length} rows returned`;
    if (reduce) { $(".mark", orgResult).style.clipPath = "none"; return; }
    gsap.from($$("thead th", orgResult), { opacity: 0, y: 6, duration: 0.3, stagger: 0.05 });
    gsap.from($$("tbody tr", orgResult), { opacity: 0, x: -24, duration: 0.5, stagger: 0.14, delay: 0.15, ease: "power3.out" });
    gsap.from($$(".org-logo img", orgResult), { scale: 0.4, rotation: -12, duration: 0.6, stagger: 0.14, delay: 0.25, ease: "back.out(2)" });
    gsap.to($(".mark", orgResult), { clipPath: "inset(0 0% 0% 0)", duration: 0.7, delay: 0.25 + 0.14 * ORGS.length, ease: "power2.inOut" });
  }
  const typeOrgs = typer(orgCode, ORG_SQL, orgRun, orgStatus, showOrgs);
  orgCode.innerHTML = ORG_SQL.map(() => "<li></li>").join("");
  ScrollTrigger.create({ trigger: ".band-sheet", start: "top 75%", once: true, onEnter: typeOrgs });
  orgRun.addEventListener("click", () => { orgStatus.textContent = "Running…"; orgResult.innerHTML = ""; setTimeout(showOrgs, 300); });

  /* ======================= projects: WHERE filter ======================= */
  const grid = $("#projectGrid"), whereLine = $("#whereLine"), rows = $("#rows");
  grid.innerHTML = PROJECTS.map((p, i) => `<li data-topic="${esc(topicOf(p))}">
    <button class="card" type="button" data-i="${i}">
      <span class="card-img"><img src="${pic(p.cover, 800)}" alt="" loading="lazy"><span class="card-date">${fmtMonth(p.date)}</span></span>
      <span class="card-meta"><span>${esc(topicOf(p))}</span><span>${esc(p.client || "")}</span></span>
      <h3>${esc(p.title)}</h3>
      <span class="card-more">View project</span>
    </button></li>`).join("");
  $("#filters").innerHTML = TOPICS.map((t, i) => `<button type="button" aria-pressed="${i === 0}" data-topic="${esc(t)}">${esc(t)}</button>`).join("");
  const items = $$("li", grid);
  const setRows = (n) => (rows.textContent = `${n} row${n === 1 ? "" : "s"} returned`);
  setRows(items.length);
  let typingWhere = 0;
  function typeWhere(topic) {
    const run = ++typingWhere, full = `'${topic}'`;
    let i = 0;
    const step = () => {
      if (run !== typingWhere) return;
      i++;
      whereLine.innerHTML = `<span class="k">WHERE</span> topic = <span class="s">${esc(full.slice(0, i))}</span>${i < full.length ? '<span class="caret"></span>' : ";"}`;
      if (i < full.length) setTimeout(step, reduce ? 0 : 22);
    };
    step();
  }
  $("#filters").addEventListener("click", (e) => {
    const b = e.target.closest("button"); if (!b) return;
    const topic = b.dataset.topic;
    $$("#filters button").forEach((x) => x.setAttribute("aria-pressed", x === b));
    typeWhere(topic);
    const state = Flip.getState(items);
    let n = 0;
    items.forEach((li) => { const show = topic === "All" || li.dataset.topic === topic; li.hidden = !show; n += show; });
    setRows(n);
    if (!reduce) Flip.from(state, { duration: 0.6, ease: "power3.inOut", absolute: true, onEnter: (els) => gsap.fromTo(els, { opacity: 0, scale: 0.94 }, { opacity: 1, scale: 1, duration: 0.5 }) });
    ScrollTrigger.refresh();
  });

  /* ======================= certificates ======================= */
  $("#certGrid").innerHTML = CERTS.map((c) => `<li><a class="cert" href="${esc(c.pdf || c.image)}" target="_blank" rel="noopener">
    <span class="cert-logo">${c.logo ? `<img src="${esc(c.logo)}" alt="" loading="lazy">` : `<b>${esc(c.issuer)}</b>`}</span>
    <h3>${esc(c.title)}</h3><p class="issuer">${esc(c.issuer)}, ${fmtMonth(c.date)}</p>${c.note ? `<p class="note">${esc(c.note)}</p>` : ""}
    <span class="view">View certificate</span></a></li>`).join("");

  /* ======================= project modal ======================= */
  const modal = $("#modal"), slides = $("#mSlides");
  grid.addEventListener("click", (e) => {
    const c = e.target.closest(".card"); if (!c) return;
    const p = PROJECTS[c.dataset.i];
    $("#mCat").textContent = `-- ${topicOf(p).toLowerCase()}`;
    $("#mTitle").textContent = p.title;
    $("#mSum").textContent = p.summary || "";
    const imgs = p.gallery && p.gallery.length ? p.gallery : [p.cover];
    slides.innerHTML = imgs.map((u) => `<img src="${pic(u, 1600)}" alt="" loading="lazy">`).join("");
    slides.scrollLeft = 0;
    $(".slider").classList.toggle("single", imgs.length < 2);
    const meta = [["Client", p.client], ["Tools", p.tools], ["Date", p.date && fmtMonth(p.date)]];
    if (p.link) meta.push(["Link", `<a href="${esc(p.link)}" target="_blank" rel="noopener">Open project</a>`]);
    $("#mMeta").innerHTML = meta.filter((m) => m[1]).map(([k, v]) => `<div><dt>${k}</dt><dd>${k === "Link" ? v : esc(v)}</dd></div>`).join("");
    $("#mContent").innerHTML = p.content || ""; // own CMS content, not user input
    lenis && lenis.stop();
    modal.showModal();
  });
  modal.addEventListener("close", () => lenis && lenis.start());
  $(".modal-close").addEventListener("click", () => modal.close());
  modal.addEventListener("click", (e) => { if (e.target === modal) modal.close(); });
  $(".sl-prev").addEventListener("click", () => slides.scrollBy({ left: -slides.clientWidth, behavior: "smooth" }));
  $(".sl-next").addEventListener("click", () => slides.scrollBy({ left: slides.clientWidth, behavior: "smooth" }));

  addEventListener("load", () => ScrollTrigger.refresh());
})();
