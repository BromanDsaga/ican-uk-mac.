(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __require = /* @__PURE__ */ ((x) => typeof require !== "undefined" ? require : typeof Proxy !== "undefined" ? new Proxy(x, {
    get: (a, b) => (typeof require !== "undefined" ? require : a)[b]
  }) : x)(function(x) {
    if (typeof require !== "undefined") return require.apply(this, arguments);
    throw Error('Dynamic require of "' + x + '" is not supported');
  });
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));

  // js/conference/hero.js
  function initConferenceHero() {
    const hero = document.querySelector(".conf-hero");
    if (!hero) return;
    const els = [
      document.querySelector(".conf-hero__eyebrow"),
      document.querySelector(".conf-hero__title"),
      document.querySelector(".conf-hero__meta"),
      document.querySelector(".conf-hero__actions"),
      document.querySelector(".conference-core")
    ].filter(Boolean);
    els.forEach((el, i) => {
      el.style.opacity = "0";
      el.style.transform = "translateY(18px)";
      setTimeout(() => {
        el.animate(
          [{ opacity: 0, transform: "translateY(18px)" }, { opacity: 1, transform: "translateY(0)" }],
          { duration: 700, delay: i * 90, easing: "cubic-bezier(.22,1,.36,1)", fill: "forwards" }
        );
      }, 120 + i * 120);
    });
    let targetScroll = window.scrollY;
    let current = window.scrollY;
    const maxScroll = () => document.documentElement.scrollHeight - window.innerHeight;
    window.addEventListener("scroll", () => {
      targetScroll = window.scrollY;
    }, { passive: true });
    function lerp(a, b, t) {
      return a + (b - a) * t;
    }
    function render() {
      current = lerp(current, targetScroll, 0.08);
      const progress = Math.min(1, Math.max(0, window.scrollY / Math.max(1, maxScroll())));
      document.documentElement.style.setProperty("--scroll-progress", String(progress));
      document.documentElement.style.setProperty("--conference-depth", `${60 - progress * 220}px`);
      document.documentElement.style.setProperty("--conference-rotate-x", `${10 + progress * 14}deg`);
      document.documentElement.style.setProperty("--conference-rotate-y", `${-14 + progress * 22}deg`);
      document.documentElement.style.setProperty("--conference-opacity", `${1 - progress * 0.9}`);
      document.documentElement.style.setProperty("--scroll-offset", `${current * 0.12}px`);
      const header = document.querySelector(".conf-header");
      if (header) {
        if (window.scrollY > 20) header.classList.add("scrolled");
        else header.classList.remove("scrolled");
      }
      requestAnimationFrame(render);
    }
    render();
    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      let pointerLoop = function() {
        cx += (tx - cx) * 0.06;
        cy += (ty - cy) * 0.06;
        document.documentElement.style.setProperty("--pointer-x", `${cx * 14}px`);
        document.documentElement.style.setProperty("--pointer-y", `${cy * 10}px`);
        requestAnimationFrame(pointerLoop);
      };
      let tx = 0, ty = 0, cx = 0, cy = 0;
      window.addEventListener("pointermove", (e) => {
        tx = e.clientX / window.innerWidth - 0.5;
        ty = e.clientY / window.innerHeight - 0.5;
      }, { passive: true });
      pointerLoop();
    }
  }

  // js/conference/conference-core.js
  function initConferenceCore() {
    const core = document.querySelector(".conference-core");
    if (!core) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let t = 0;
    function animate() {
      t += 3e-3;
      const y = Math.sin(t) * 4;
      const rx = Math.sin(t * 0.6) * 1.2;
      const ry = Math.cos(t * 0.5) * 1.4;
      core.style.setProperty("--idle-y", `${y}px`);
      core.style.setProperty("--idle-rx", `${rx}deg`);
      core.style.setProperty("--idle-ry", `${ry}deg`);
      requestAnimationFrame(animate);
    }
    animate();
  }

  // js/conference/data.js
  var conferenceData = {
    year: 2026,
    title: "ICAN UK & District Society Conference",
    shortTitle: "CONFERENCE 2026",
    theme: "Navigating the Future of Global Finance",
    tagline: "Heritage \u2022 Knowledge \u2022 Conversation \u2022 Opportunity",
    dates: {
      start: "2026-11-18",
      end: "2026-11-19",
      display: "18\u201319 NOVEMBER 2026",
      startTime: "09:00",
      endTime: "18:00"
    },
    venue: {
      name: "[VENUE NAME]",
      address: "[VENUE ADDRESS, LONDON]",
      city: "London",
      country: "United Kingdom",
      postcode: "[POSTCODE]",
      nearestTube: "[NEAREST TUBE]",
      nearestTrain: "[NEAREST TRAIN]",
      parking: "[PARKING INFO]",
      accessibility: "Step-free access available. Contact us for specific requirements."
    },
    format: "In-person + Virtual",
    cpdHours: 12,
    delegatesExpected: 500,
    registration: {
      earlyBirdDeadline: "2026-09-30T23:59:59Z",
      tickets: [
        {
          id: "member",
          type: "ICAN MEMBER",
          earlyBird: 150,
          standard: 200,
          currency: "\xA3",
          recommended: true,
          benefits: [
            "Full conference access",
            "Gala dinner",
            "CPD certificate",
            "Networking sessions",
            "Digital resources"
          ]
        },
        {
          id: "non-member",
          type: "NON-MEMBER",
          earlyBird: 200,
          standard: 250,
          currency: "\xA3",
          recommended: false,
          benefits: [
            "Full conference access",
            "Gala dinner",
            "CPD certificate",
            "Networking sessions"
          ]
        },
        {
          id: "student",
          type: "STUDENT / ASSOCIATE",
          earlyBird: 75,
          standard: 100,
          currency: "\xA3",
          recommended: false,
          benefits: [
            "Full conference access",
            "CPD certificate",
            "Student networking"
          ]
        },
        {
          id: "virtual",
          type: "VIRTUAL",
          earlyBird: 50,
          standard: 75,
          currency: "\xA3",
          recommended: false,
          benefits: [
            "Live stream access",
            "On-demand recordings (30 days)",
            "Digital CPD certificate"
          ]
        }
      ]
    },
    themes: [
      "AI & ACCOUNTING",
      "GLOBAL TAX",
      "REGULATION & COMPLIANCE",
      "FINTECH & INNOVATION",
      "LEADERSHIP",
      "FUTURE OF WORK",
      "SUSTAINABILITY REPORTING",
      "RISK & RESILIENCE"
    ],
    audience: [
      {
        id: "accountants",
        label: "ACCOUNTANTS",
        desc: "Chartered Accountants across practice and industry seeking technical depth and CPD."
      },
      {
        id: "cfos",
        label: "CFOs",
        desc: "Finance leaders shaping strategy, governance and performance."
      },
      {
        id: "finance-leaders",
        label: "FINANCE LEADERS",
        desc: "Finance Directors, Controllers and senior managers driving transformation."
      },
      {
        id: "business-leaders",
        label: "BUSINESS LEADERS",
        desc: "Entrepreneurs and executives navigating finance, growth and regulation."
      },
      {
        id: "members",
        label: "MEMBERS",
        desc: "ICAN members and Fellows from across the UK district."
      },
      {
        id: "non-members",
        label: "NON-MEMBERS",
        desc: "Professionals exploring ICAN standards, community and development."
      },
      {
        id: "students",
        label: "STUDENTS",
        desc: "Students and recent qualifiers building career foundations."
      },
      {
        id: "associates",
        label: "ASSOCIATES",
        desc: "Associates seeking pathways to full qualification and network."
      }
    ],
    whyAttend: [
      {
        num: "01",
        title: "INSIGHT",
        text: "Understand the forces reshaping global finance \u2014 from AI and regulation to tax and sustainability."
      },
      {
        num: "02",
        title: "CPD",
        text: "Earn professional development credit through expert-led sessions, panels and workshops."
      },
      {
        num: "03",
        title: "NETWORK",
        text: "Build meaningful relationships with professionals across industries, firms and borders."
      },
      {
        num: "04",
        title: "OPPORTUNITY",
        text: "Discover partnerships, ideas and professional opportunities that extend beyond the event."
      }
    ],
    previousConference: {
      year: 2025,
      theme: "[2025 THEME]",
      stats: [
        { value: "550+", label: "DELEGATES", desc: "From across UK and Nigeria" },
        {
          value: "18",
          label: "EXPERT SPEAKERS",
          desc: "Leaders from Big Four, industry and regulation"
        },
        {
          value: "12",
          label: "CPD HOURS",
          desc: "Accredited professional development"
        },
        {
          value: "92%",
          label: "SATISFACTION",
          desc: "Attendee satisfaction rate"
        }
      ],
      outcomes: [
        "Practical insight",
        "Professional connections",
        "Industry knowledge",
        "New opportunities",
        "CPD development",
        "Community belonging"
      ],
      gallery: [
        {
          id: "main",
          label: "Main hall",
          placeholder: "Previous conference main stage"
        },
        {
          id: "speaker",
          label: "Keynote",
          placeholder: "Speaker delivering keynote"
        },
        {
          id: "networking",
          label: "Networking",
          placeholder: "Delegates networking"
        },
        { id: "gala", label: "Gala dinner", placeholder: "Gala dinner moment" }
      ]
    }
  };
  var speakers = [
    {
      id: "speaker-01",
      name: "Dr. Amina Yusuf",
      creds: "FCA, PhD",
      role: "CFO",
      org: "Global Finance Group",
      session: "Navigating the Global Finance Landscape",
      bio: "Finance leader with 20+ years across FTSE 100 and African markets. Focus on governance, transformation and inclusive growth.",
      img: "images/speaker-1.jpg",
      linkedin: "#"
    },
    {
      id: "speaker-02",
      name: "James Okonkwo",
      creds: "FCA",
      role: "Partner, Risk Advisory",
      org: "Big Four Firm",
      session: "Regulation & the Future of Audit",
      bio: "Risk and regulation specialist advising UK and Nigerian financial institutions on compliance, resilience and assurance.",
      img: "images/executive/chairman.jpeg",
      linkedin: "#"
    },
    {
      id: "speaker-03",
      name: "Sarah Adeyemi",
      creds: "FCA, MBA",
      role: "Finance Director",
      org: "Fintech Unicorn",
      session: "AI & Accounting: Practical Implementation",
      bio: "Former Big Four, now scaling finance operations in high-growth technology businesses.",
      img: "images/executive/vice-chairman.jpeg",
      linkedin: "#"
    },
    {
      id: "speaker-04",
      name: "Prof. David Olatunji",
      creds: "PhD, FCA",
      role: "Professor of Accounting",
      org: "London Business School",
      session: "Future of Work for Finance Professionals",
      bio: "Academic and advisor on future skills, ethics and professional development in accounting.",
      img: "images/executive/technical-secretary.jpeg",
      linkedin: "#"
    },
    {
      id: "speaker-05",
      name: "Chiamaka Nnaji",
      creds: "FCA",
      role: "Group Tax Lead",
      org: "Multinational PLC",
      session: "Global Tax: What Changed in 2026",
      bio: "International tax strategist with deep expertise in UK-Nigeria cross-border structures.",
      img: "images/executive/treasurer.jpeg",
      linkedin: "#"
    },
    {
      id: "speaker-06",
      name: "Michael Thompson",
      creds: "FCA",
      role: "Former HMRC Policy Advisor",
      org: "Independent",
      session: "UK Regulatory Outlook",
      bio: "Former HMRC advisor now consulting on tax policy and regulatory change.",
      img: "images/executive/ex-officio-1.jpeg",
      linkedin: "#"
    }
  ];
  var conferenceSessions = [
    {
      id: "session-01",
      day: "day-1",
      date: "2026-11-18",
      startTime: "09:00",
      endTime: "09:45",
      type: "keynote",
      title: "Navigating the Global Finance Landscape",
      description: "Opening keynote exploring macro trends, regulation and technology reshaping finance. Sets the context for two days of insight and debate.",
      speakerIds: ["speaker-01"],
      format: "in-person",
      calendarEnabled: true
    },
    {
      id: "session-02",
      day: "day-1",
      date: "2026-11-18",
      startTime: "10:00",
      endTime: "11:00",
      type: "panel",
      title: "AI & Accounting: From Hype to Implementation",
      description: "Panel of practitioners sharing real implementations, lessons learned and practical frameworks for AI adoption in finance teams.",
      speakerIds: ["speaker-03", "speaker-02"],
      format: "in-person",
      calendarEnabled: true
    },
    {
      id: "session-03",
      day: "day-1",
      date: "2026-11-18",
      startTime: "11:30",
      endTime: "12:30",
      type: "workshop",
      title: "Global Tax Update 2026",
      description: "Deep dive into UK and international tax changes affecting cross-border businesses. Practical takeaways for compliance and planning.",
      speakerIds: ["speaker-05"],
      format: "in-person",
      calendarEnabled: true
    },
    {
      id: "session-04",
      day: "day-1",
      date: "2026-11-18",
      startTime: "13:30",
      endTime: "14:30",
      type: "panel",
      title: "Regulation & the Future of Audit",
      description: "How assurance is evolving. Discussion on quality, ethics, technology and public trust.",
      speakerIds: ["speaker-02", "speaker-06"],
      format: "in-person",
      calendarEnabled: false
    },
    {
      id: "session-05",
      day: "day-1",
      date: "2026-11-18",
      startTime: "15:00",
      endTime: "16:00",
      type: "networking",
      title: "Structured Networking: Build Your Board",
      description: "Facilitated networking to connect with peers across industries, experience levels and specialisms.",
      speakerIds: [],
      format: "in-person",
      calendarEnabled: false
    },
    {
      id: "session-06",
      day: "day-2",
      date: "2026-11-19",
      startTime: "09:00",
      endTime: "10:00",
      type: "keynote",
      title: "Future of Work for Finance Professionals",
      description: "Skills, mindsets and pathways for the next decade of finance leadership.",
      speakerIds: ["speaker-04"],
      format: "in-person",
      calendarEnabled: true
    },
    {
      id: "session-07",
      day: "day-2",
      date: "2026-11-19",
      startTime: "10:30",
      endTime: "11:30",
      type: "workshop",
      title: "Fintech Finance: Scaling with Control",
      description: "How high-growth businesses build robust finance functions without losing agility.",
      speakerIds: ["speaker-03"],
      format: "virtual",
      calendarEnabled: true
    },
    {
      id: "session-08",
      day: "day-2",
      date: "2026-11-19",
      startTime: "12:00",
      endTime: "13:00",
      type: "panel",
      title: "Leadership & Inclusion in Finance",
      description: "CFOs and leaders discuss building high-performance, inclusive finance teams.",
      speakerIds: ["speaker-01", "speaker-04"],
      format: "in-person",
      calendarEnabled: true
    }
  ];

  // js/conference/agenda.js
  function initAgenda() {
    const listEl = document.getElementById("agendaList");
    const filtersEl = document.getElementById("agendaFilters");
    if (!listEl || !filtersEl) return;
    let activeFilter = "all";
    function getSpeakerNames(ids) {
      return ids.map((id) => speakers.find((s) => s.id === id)?.name).filter(Boolean).join(", ");
    }
    function render(filter = "all") {
      const filtered = conferenceSessions.filter((s) => {
        if (filter === "all") return true;
        if (filter === "day-1") return s.day === "day-1";
        if (filter === "day-2") return s.day === "day-2";
        if (filter === "virtual") return s.format === "virtual";
        return true;
      });
      listEl.innerHTML = filtered.map((sess) => {
        const speakerNames = getSpeakerNames(sess.speakerIds);
        return `
        <div class="agenda-session" data-session-id="${sess.id}" tabindex="0" role="button" aria-label="View session ${sess.title}">
          <div class="agenda-session__time">${sess.startTime} \u2014 ${sess.endTime}</div>
          <div class="agenda-session__type agenda-session__type--${sess.type}">${sess.type}</div>
          <div class="agenda-session__main">
            <div class="agenda-session__title">${sess.title}</div>
            ${speakerNames ? `<div class="agenda-session__speaker">${speakerNames}</div>` : ""}
          </div>
          <div class="agenda-session__action">\u2192</div>
        </div>
      `;
      }).join("");
      listEl.querySelectorAll(".agenda-session").forEach((el) => {
        el.addEventListener("click", () => openSessionDrawer(el.dataset.sessionId));
        el.addEventListener("keydown", (e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            openSessionDrawer(el.dataset.sessionId);
          }
        });
      });
    }
    function openSessionDrawer(sessionId) {
      const sess = conferenceSessions.find((s) => s.id === sessionId);
      if (!sess) return;
      const drawer = document.getElementById("sessionDrawer");
      const backdrop = document.getElementById("drawerBackdrop");
      if (!drawer) return;
      const speakerNames = sess.speakerIds.map((id) => speakers.find((s) => s.id === id)).filter(Boolean);
      drawer.innerHTML = `
      <div class="session-drawer__header">
        <div>
          <div class="mono" style="color:var(--brass)">${sess.type} \u2022 ${sess.day.toUpperCase()} \u2022 ${sess.startTime}\u2013${sess.endTime}</div>
          <h3 style="margin-top:10px;font-size:1.6rem;line-height:1.1">${sess.title}</h3>
        </div>
        <button class="session-drawer__close" id="closeDrawer" aria-label="Close">\u2715</button>
      </div>
      <div style="padding:28px; display:flex; flex-direction:column; gap:20px;">
        <p style="line-height:1.7; color:var(--muted-dark)">${sess.description}</p>
        ${speakerNames.length ? `
          <div>
            <div style="font-size:.68rem; letter-spacing:.18em; text-transform:uppercase; color:var(--muted); font-weight:700;">Speakers</div>
            <div style="margin-top:12px; display:flex; flex-direction:column; gap:12px;">
              ${speakerNames.map((sp) => `
                <div style="display:flex; gap:12px; align-items:center;">
                  <img src="${sp.img}" alt="${sp.name}" style="width:44px;height:44px;border-radius:50%;object-fit:cover;">
                  <div><div style="font-weight:700;">${sp.name}</div><div style="font-size:.82rem; color:var(--muted);">${sp.role}, ${sp.org}</div></div>
                </div>
              `).join("")}
            </div>
          </div>
        ` : ""}
        <div style="display:flex; gap:12px; flex-wrap:wrap; margin-top:8px;">
          ${sess.calendarEnabled ? `<a href="#" class="btn btn--brass" onclick="alert('Calendar integration point - connect to .ics generation'); return false;">+ Calendar</a>` : ""}
          <button class="btn btn--ghost" onclick="document.getElementById('pricing').scrollIntoView({behavior:'smooth'})">Register for this session</button>
        </div>
      </div>
    `;
      drawer.classList.add("is-open");
      backdrop?.classList.add("is-visible");
      document.body.style.overflow = "hidden";
      drawer.querySelector("#closeDrawer")?.addEventListener("click", closeDrawer);
      backdrop?.addEventListener("click", closeDrawer, { once: true });
      function closeDrawer() {
        drawer.classList.remove("is-open");
        backdrop?.classList.remove("is-visible");
        document.body.style.overflow = "";
      }
      const esc = (e) => {
        if (e.key === "Escape") {
          closeDrawer();
          window.removeEventListener("keydown", esc);
        }
      };
      window.addEventListener("keydown", esc);
    }
    filtersEl.querySelectorAll(".agenda-filter").forEach((btn) => {
      btn.addEventListener("click", () => {
        filtersEl.querySelectorAll(".agenda-filter").forEach((b) => b.classList.remove("is-active"));
        btn.classList.add("is-active");
        activeFilter = btn.dataset.filter;
        render(activeFilter);
      });
    });
    render("all");
  }

  // js/conference/speakers.js
  function initSpeakers() {
    const grid = document.getElementById("speakersGrid");
    if (!grid) return;
    grid.innerHTML = speakers.map((sp) => `
    <div class="speaker-card" data-speaker-id="${sp.id}" tabindex="0" role="button" aria-label="View ${sp.name}">
      <div class="speaker-card__img">
        <img src="${sp.img}" alt="${sp.name}" loading="lazy" onerror="this.style.display='none'">
      </div>
      <div class="speaker-card__content">
        <div class="speaker-card__name">${sp.name}</div>
        <div class="speaker-card__creds">${sp.creds}</div>
        <div class="speaker-card__role">${sp.role} \u2022 ${sp.org}</div>
        <div class="speaker-card__session">${sp.session}</div>
      </div>
    </div>
  `).join("");
    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches && !window.matchMedia("(pointer: coarse)").matches) {
      grid.querySelectorAll(".speaker-card").forEach((card) => {
        card.addEventListener("pointermove", (e) => {
          const rect = card.getBoundingClientRect();
          const x = e.clientX - rect.left;
          const y = e.clientY - rect.top;
          const rotateY = (x / rect.width - 0.5) * 5;
          const rotateX = (y / rect.height - 0.5) * -5;
          card.style.setProperty("--rotate-x", `${rotateX}deg`);
          card.style.setProperty("--rotate-y", `${rotateY}deg`);
          card.style.setProperty("--depth", `12px`);
        });
        card.addEventListener("pointerleave", () => {
          card.style.setProperty("--rotate-x", `0deg`);
          card.style.setProperty("--rotate-y", `0deg`);
          card.style.setProperty("--depth", `0px`);
        });
      });
    }
    const dialog = document.getElementById("speakerModal");
    if (!dialog) return;
    function openModal(id) {
      const sp = speakers.find((s) => s.id === id);
      if (!sp) return;
      dialog.innerHTML = `
      <div class="speaker-modal__inner">
        <div class="speaker-modal__img"><img src="${sp.img}" alt="${sp.name}"></div>
        <div class="speaker-modal__body">
          <button class="speaker-modal__close" id="closeSpeakerModal" aria-label="Close">\u2715</button>
          <div style="font-size:.68rem; letter-spacing:.18em; text-transform:uppercase; color:var(--brass); font-weight:700;">${sp.creds}</div>
          <h3 style="margin-top:8px; font-size:1.8rem; line-height:1.1;">${sp.name}</h3>
          <div style="margin-top:8px; color:var(--muted-dark); font-size:.92rem;">${sp.role} \u2022 ${sp.org}</div>
          <p style="margin-top:18px; line-height:1.7; color:var(--muted-dark);">${sp.bio}</p>
          <div style="margin-top:20px; padding:16px; background:var(--ivory); border-radius:12px; border:1px solid var(--border-light);">
            <div style="font-size:.68rem; letter-spacing:.14em; text-transform:uppercase; color:var(--muted); font-weight:700;">Session</div>
            <div style="margin-top:6px; font-weight:600;">${sp.session}</div>
          </div>
          <div style="margin-top:20px; display:flex; gap:10px;">
            <a href="${sp.linkedin}" class="btn btn--ghost" style="padding:10px 18px;">LinkedIn</a>
            <a href="#pricing" class="btn btn--brass" style="padding:10px 18px;" onclick="document.getElementById('speakerModal').close();">Register</a>
          </div>
        </div>
      </div>
    `;
      if (typeof dialog.showModal === "function") dialog.showModal();
      else dialog.setAttribute("open", "");
      dialog.querySelector("#closeSpeakerModal")?.addEventListener("click", () => dialog.close());
      dialog.addEventListener("click", (e) => {
        if (e.target === dialog) dialog.close();
      }, { once: true });
    }
    grid.querySelectorAll(".speaker-card").forEach((card) => {
      card.addEventListener("click", () => openModal(card.dataset.speakerId));
      card.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          openModal(card.dataset.speakerId);
        }
      });
    });
  }

  // js/conference/pricing.js
  function initPricing() {
    const grid = document.getElementById("pricingGrid");
    if (!grid) return;
    const tickets = conferenceData.registration.tickets;
    const deadline = new Date(conferenceData.registration.earlyBirdDeadline);
    const now = /* @__PURE__ */ new Date();
    const isEarlyBird = now < deadline;
    grid.innerHTML = tickets.map((t) => {
      const price = isEarlyBird ? t.earlyBird : t.standard;
      const otherPrice = isEarlyBird ? t.standard : null;
      return `
      <div class="pricing-card ${t.recommended ? "pricing-card--featured" : ""}">
        <div class="pricing-card__type">${t.type} ${t.recommended ? "\u2022 Recommended" : ""}</div>
        <div class="pricing-card__price">${t.currency}${price} <small>${isEarlyBird ? "/ Early Bird" : "/ Standard"}</small></div>
        ${otherPrice ? `<div style="font-size:.78rem; color:rgba(248,247,243,.5); text-decoration:line-through;">Standard ${t.currency}${otherPrice}</div>` : ""}
        <ul class="pricing-card__list">
          ${t.benefits.map((b) => `<li>${b}</li>`).join("")}
        </ul>
        <a href="#" class="btn ${t.recommended ? "btn--brass" : "btn--ghost"}" style="${!t.recommended ? "background:rgba(255,255,255,.06); color:white; border-color:rgba(255,255,255,.12);" : ""} pricing-card__cta" onclick="alert('Registration flow: Attendance \u2192 Ticket \u2192 Delegate \u2192 Payment. Connect to external platform or form.'); return false;">Register \u2014 ${t.type}</a>
      </div>
    `;
    }).join("");
  }

  // js/conference/countdown.js
  function initCountdown() {
    const el = document.getElementById("earlyBirdCountdown");
    const dateEl = document.getElementById("earlyBirdDate");
    if (!el) return;
    const deadline = new Date(conferenceData.registration.earlyBirdDeadline).getTime();
    if (dateEl) {
      dateEl.textContent = new Date(conferenceData.registration.earlyBirdDeadline).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" });
    }
    function tick() {
      const now = Date.now();
      let diff = deadline - now;
      if (diff <= 0) {
        el.innerHTML = `<div style="color:rgba(248,247,243,.6); font-size:.9rem;">Early bird ended. Standard pricing now applies.</div>`;
        return;
      }
      const d = Math.floor(diff / 864e5);
      diff %= 864e5;
      const h = Math.floor(diff / 36e5);
      diff %= 36e5;
      const m = Math.floor(diff / 6e4);
      diff %= 6e4;
      const s = Math.floor(diff / 1e3);
      el.querySelector("[data-days]") && (el.querySelector("[data-days]").textContent = String(d).padStart(2, "0"));
      el.querySelector("[data-hours]") && (el.querySelector("[data-hours]").textContent = String(h).padStart(2, "0"));
      el.querySelector("[data-mins]") && (el.querySelector("[data-mins]").textContent = String(m).padStart(2, "0"));
      el.querySelector("[data-secs]") && (el.querySelector("[data-secs]").textContent = String(s).padStart(2, "0"));
    }
    if (!el.querySelector("[data-days]")) {
      el.innerHTML = `
      <div class="eb-countdown__label">Early bird ends in \u2014 <span id="earlyBirdDate"></span></div>
      <div class="eb-countdown__grid">
        <div class="eb-countdown__box"><b data-days>00</b><span>Days</span></div>
        <div class="eb-countdown__box"><b data-hours>00</b><span>Hours</span></div>
        <div class="eb-countdown__box"><b data-mins>00</b><span>Minutes</span></div>
        <div class="eb-countdown__box"><b data-secs>00</b><span>Seconds</span></div>
      </div>
    `;
      if (dateEl) el.querySelector("#earlyBirdDate")?.replaceWith(dateEl);
    }
    tick();
    setInterval(tick, 1e3);
  }

  // js/conference/venue.js
  function initVenue() {
    document.querySelectorAll(".accordion__trigger").forEach((btn) => {
      btn.addEventListener("click", () => {
        const expanded = btn.getAttribute("aria-expanded") === "true";
        btn.setAttribute("aria-expanded", String(!expanded));
        const panel = document.getElementById(btn.getAttribute("aria-controls"));
        if (panel) panel.classList.toggle("is-open", !expanded);
      });
    });
    const mapEl = document.getElementById("venueMap");
    if (mapEl) {
      mapEl.innerHTML = `
      <div style="width:100%; height:100%; display:grid; place-items:center; background:radial-gradient(60% 60% at 50% 30%, rgba(36,78,59,.18), transparent), linear-gradient(180deg, #F2EFE7, #D9D5CC); color:var(--muted); text-align:center; padding:24px;">
        <div>
          <div style="font-size:.7rem; letter-spacing:.18em; text-transform:uppercase; font-weight:700;">Map Placeholder</div>
          <div style="margin-top:8px; font-weight:600; color:var(--ink);">[VENUE MAP - Replace with Google Maps embed when venue confirmed]</div>
          <a href="https://maps.google.com/?q=London" target="_blank" rel="noopener" class="btn btn--ghost" style="margin-top:16px; padding:10px 18px;">Open in Google Maps</a>
        </div>
      </div>
    `;
    }
  }

  // js/conference/faq.js
  var faqItems = [
    ["Who can attend?", "ICAN members, non-members, students, associates, and finance professionals across practice and industry."],
    ["How many CPD hours are available?", "Up to 12 CPD hours for full in-person attendance. Virtual attendance offers up to 8 CPD hours."],
    ["Can non-members attend?", "Yes. Non-members are welcome at non-member rates."],
    ["Is there a virtual option?", "Yes. Hybrid \u2014 in-person in London plus live stream and 30-day on-demand."],
    ["What is included in the ticket?", "Depends on ticket type. See pricing section for benefits."],
    ["Can I transfer my ticket?", "Ticket transfers possible up to 7 days before event."],
    ["Will I receive a CPD certificate?", "Yes. Digital certificates within 7 working days, subject to attendance."],
    ["Are accommodation costs included?", "No. See Travel & Accommodation for negotiated hotel rates."],
    ["How do I request a visa invitation letter?", "Registered delegates can request via confirmation email. For visa purposes only."],
    ["What is the cancellation policy?", "Full refund up to 30 days before, 50% up to 14 days, no refund within 14 days but transfer allowed."],
    ["How can I select all previous speakers?", "Use the 'Select all' button shown above the previous speakers. In the browser console you can call window.getSelectedPrevSpeakers() to return an array of selected speaker objects (name, role, img)."],
    ["How do I update the 2025 results placeholder?", "Open the file and replace the placeholder text in the Results section or update the JS resultsGrid data at the top of the script. If you'd like, provide the exact results and I can inject them for you."]
  ];
  function renderFAQList(listEl = document.getElementById("faqList")) {
    if (!listEl) return;
    const items = faqItems.map(([question, answer], index) => `
    <div class="faq-item">
      <button class="faq-item__trigger" aria-expanded="false" aria-controls="faq-panel-${index}">${question}</button>
      <div class="faq-item__panel" id="faq-panel-${index}"><div class="faq-item__content">${answer}</div></div>
    </div>
  `).join("");
    listEl.innerHTML = items;
    listEl.querySelectorAll(".faq-item__trigger").forEach((btn) => {
      btn.addEventListener("click", () => {
        const expanded = btn.getAttribute("aria-expanded") === "true";
        btn.setAttribute("aria-expanded", String(!expanded));
        const panel = document.getElementById(btn.getAttribute("aria-controls"));
        if (panel) panel.classList.toggle("is-open", !expanded);
      });
    });
  }
  function initFAQ() {
    renderFAQList();
    const els = document.querySelectorAll("[data-reveal]");
    if ("IntersectionObserver" in window) {
      const obs = new IntersectionObserver((entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("is-visible");
            obs.unobserve(e.target);
          }
        });
      }, { threshold: 0.15 });
      els.forEach((el) => obs.observe(el));
    } else {
      els.forEach((el) => el.classList.add("is-visible"));
    }
  }

  // js/conference/three-init.js
  async function initConferenceThree() {
    const canvas = document.getElementById("conf-three-canvas");
    if (!canvas) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (!("WebGLRenderingContext" in window)) return;
    const quality = getDeviceQuality();
    if (quality === "low") return;
    try {
      let animate = function() {
        const t = Date.now() * 18e-5;
        points.rotation.y = t * 0.22;
        points.rotation.x = Math.sin(t * 0.18) * 0.12;
        renderer.render(scene, camera);
        requestAnimationFrame(animate);
      };
      const THREE = await import("https://unpkg.com/three@0.160.0/build/three.module.js");
      const count = quality === "high" ? 500 : quality === "medium" ? 250 : 120;
      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(60, canvas.clientWidth / canvas.clientHeight, 0.1, 1e3);
      camera.position.z = 5;
      const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
      renderer.setSize(canvas.clientWidth, canvas.clientHeight, false);
      renderer.setClearColor(0, 0);
      const geometry = new THREE.BufferGeometry();
      const positions = new Float32Array(count * 3);
      const opacities = new Float32Array(count);
      for (let i = 0; i < count; i++) {
        positions[i * 3] = (Math.random() - 0.5) * 14;
        positions[i * 3 + 1] = (Math.random() - 0.5) * 8;
        positions[i * 3 + 2] = (Math.random() - 0.5) * 8 - 1;
        opacities[i] = Math.random() * 0.5 + 0.12;
      }
      geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
      geometry.setAttribute("alpha", new THREE.BufferAttribute(opacities, 1));
      const material = new THREE.PointsMaterial({
        size: 0.022,
        color: 11572579,
        transparent: true,
        opacity: 0.62,
        sizeAttenuation: true,
        depthWrite: false
      });
      const points = new THREE.Points(geometry, material);
      scene.add(points);
      animate();
      window.addEventListener("resize", () => {
        camera.aspect = canvas.clientWidth / canvas.clientHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(canvas.clientWidth, canvas.clientHeight, false);
      });
    } catch (e) {
      console.warn("Conference Three.js optional layer failed", e);
    }
  }
  function getDeviceQuality() {
    const mem = navigator.deviceMemory || 4;
    const cores = navigator.hardwareConcurrency || 4;
    const isMobile = /Mobi|Android/i.test(navigator.userAgent);
    if (mem <= 2 || cores <= 2) return "low";
    if (isMobile) return "medium";
    if (mem <= 4) return "medium";
    return "high";
  }

  // js/conference/main.js
  function initConferencePage() {
    try {
      initConferenceHero();
    } catch (e) {
      console.warn("hero failed", e);
    }
    try {
      initConferenceCore();
    } catch (e) {
      console.warn("core failed", e);
    }
    try {
      initAgenda();
    } catch (e) {
      console.warn("agenda failed", e);
    }
    try {
      initSpeakers();
    } catch (e) {
      console.warn("speakers failed", e);
    }
    try {
      initPricing();
    } catch (e) {
      console.warn("pricing failed", e);
    }
    try {
      initCountdown();
    } catch (e) {
      console.warn("countdown failed", e);
    }
    try {
      initVenue();
    } catch (e) {
      console.warn("venue failed", e);
    }
    try {
      initFAQ();
    } catch (e) {
      console.warn("faq failed", e);
    }
    try {
      initConferenceThree();
    } catch (e) {
      console.warn("three failed", e);
    }
    setTimeout(() => {
      document.querySelectorAll("[data-reveal]").forEach((el) => el.classList.add("is-visible"));
    }, 1e3);
    try {
      const bar = document.getElementById("mobileRegisterBar");
      const hero = document.querySelector(".conf-hero");
      if (bar && hero && "IntersectionObserver" in window) {
        const obs = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) {
              bar.classList.add("is-visible");
            } else {
              bar.classList.remove("is-visible");
            }
          });
        }, { threshold: 0 });
        obs.observe(hero);
      }
    } catch (e) {
      console.warn("mobile bar failed", e);
    }
    try {
      const sections = document.querySelectorAll("section[id]");
      const navLinks = document.querySelectorAll('.conf-nav a[href^="#"]');
      if ("IntersectionObserver" in window && sections.length) {
        const obs = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              navLinks.forEach((a) => a.classList.remove("is-active"));
              const active = document.querySelector(`.conf-nav a[href="#${entry.target.id}"]`);
              if (active) active.classList.add("is-active");
            }
          });
        }, { threshold: 0.4 });
        sections.forEach((s) => obs.observe(s));
      }
    } catch (e) {
      console.warn("nav active failed", e);
    }
  }
  function safeInit() {
    try {
      initConferencePage();
    } catch (e) {
      console.error("Conference init critical fail, forcing visible", e);
      document.querySelectorAll("[data-reveal]").forEach((el) => el.classList.add("is-visible"));
    }
  }
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", safeInit);
  } else {
    safeInit();
  }
})();
