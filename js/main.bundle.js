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
  var __esm = (fn, res, err) => function __init() {
    if (err) throw err[0];
    try {
      return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
    } catch (e) {
      throw err = [e], e;
    }
  };
  var __export = (target, all) => {
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: true });
  };
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

  // js/three/particles.js
  var particles_exports = {};
  __export(particles_exports, {
    initParticles: () => initParticles
  });
  function initParticles(THREE, canvas, quality) {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(60, canvas.clientWidth / canvas.clientHeight, 0.1, 1e3);
    camera.position.z = 5;
    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.6));
    renderer.setSize(canvas.clientWidth, canvas.clientHeight, false);
    renderer.setClearColor(0, 0);
    const count = quality === "high" ? 600 : 280;
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(count * 3);
    const opacities = new Float32Array(count);
    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 12;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 7;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 6 - 1;
      opacities[i] = Math.random() * 0.6 + 0.15;
    }
    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute("alpha", new THREE.BufferAttribute(opacities, 1));
    const material = new THREE.PointsMaterial({
      size: 0.02,
      color: 11572579,
      transparent: true,
      opacity: 0.7,
      sizeAttenuation: true,
      depthWrite: false
    });
    const points = new THREE.Points(geometry, material);
    scene.add(points);
    let mouseX = 0, mouseY = 0;
    window.addEventListener("pointermove", (e) => {
      mouseX = (e.clientX / window.innerWidth - 0.5) * 0.4;
      mouseY = (e.clientY / window.innerHeight - 0.5) * 0.25;
    }, { passive: true });
    function animate() {
      const t = Date.now() * 2e-4;
      points.rotation.y = t * 0.3 + mouseX;
      points.rotation.x = Math.sin(t * 0.2) * 0.15 + mouseY;
      const pos = geometry.attributes.position.array;
      for (let i = 0; i < count; i++) {
        pos[i * 3 + 1] += Math.sin(t + i * 0.1) * 5e-4;
      }
      geometry.attributes.position.needsUpdate = true;
      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    }
    animate();
    window.addEventListener("resize", () => {
      camera.aspect = canvas.clientWidth / canvas.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(canvas.clientWidth, canvas.clientHeight, false);
    });
  }
  var init_particles = __esm({
    "js/three/particles.js"() {
    }
  });

  // js/scroll.js
  function initScroll() {
    let targetScroll = window.scrollY;
    let currentScroll = window.scrollY;
    const header = document.querySelector(".header");
    window.addEventListener("scroll", () => {
      targetScroll = window.scrollY;
    }, { passive: true });
    function render() {
      currentScroll += (targetScroll - currentScroll) * 0.08;
      const max = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
      const progress = Math.min(1, Math.max(0, window.scrollY / max));
      document.documentElement.style.setProperty("--page-scroll", String(currentScroll));
      document.documentElement.style.setProperty("--scroll-progress", String(progress));
      document.documentElement.style.setProperty("--scroll-offset", `${currentScroll * 0.15}px`);
      document.documentElement.style.setProperty("--core-depth", `${80 - progress * 380}px`);
      document.documentElement.style.setProperty("--core-rotate-x", `${8 + progress * 12}deg`);
      document.documentElement.style.setProperty("--core-rotate-y", `${-12 + progress * 18}deg`);
      document.documentElement.style.setProperty("--network-scale", `${1 + progress * 0.25}`);
      document.documentElement.style.setProperty("--hero-fade", `${1 - progress * 1.2}`);
      if (header) {
        if (window.scrollY > 20) header.classList.add("scrolled");
        else header.classList.remove("scrolled");
      }
      requestAnimationFrame(render);
    }
    render();
  }

  // js/reveal.js
  function initReveal() {
    const els = document.querySelectorAll("[data-reveal]");
    if (!els.length) return;
    const fallbackTimer = setTimeout(() => {
      els.forEach((el) => el.classList.add("is-visible"));
    }, 2e3);
    if (!("IntersectionObserver" in window)) {
      els.forEach((el) => el.classList.add("is-visible"));
      clearTimeout(fallbackTimer);
      return;
    }
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          try {
            if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches && entry.target.animate) {
              entry.target.animate(
                [{ opacity: 0, transform: "translateY(30px)" }, { opacity: 1, transform: "translateY(0)" }],
                { duration: 700, easing: "cubic-bezier(.22,1,.36,1)", fill: "both" }
              );
            }
          } catch (e) {
          }
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15, rootMargin: "0px 0px -40px 0px" });
    els.forEach((el) => observer.observe(el));
    setTimeout(() => clearTimeout(fallbackTimer), 2500);
  }

  // js/parallax.js
  function initParallax() {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (window.matchMedia("(pointer: coarse)").matches) return;
    let pointerX = 0, pointerY = 0, targetX = 0, targetY = 0;
    window.addEventListener("pointermove", (e) => {
      targetX = e.clientX / window.innerWidth - 0.5;
      targetY = e.clientY / window.innerHeight - 0.5;
    }, { passive: true });
    function render() {
      pointerX += (targetX - pointerX) * 0.06;
      pointerY += (targetY - pointerY) * 0.06;
      document.documentElement.style.setProperty("--pointer-x", `${pointerX * 12}px`);
      document.documentElement.style.setProperty("--pointer-y", `${pointerY * 10}px`);
      requestAnimationFrame(render);
    }
    render();
  }

  // js/cards.js
  function initCards() {
    const cards = document.querySelectorAll(".leader-card");
    cards.forEach((card) => {
      const img = card.querySelector(".avatar-img");
      const initials = card.querySelector(".avatar-initials");
      if (img) {
        const handleLoad = () => {
          if (img.getAttribute("src") && img.src) {
            img.style.display = "block";
            if (initials) initials.style.display = "none";
          }
        };
        const handleError = () => {
          img.style.display = "none";
          if (initials) initials.style.display = "grid";
        };
        img.addEventListener("load", handleLoad);
        img.addEventListener("error", handleError);
        if (img.complete) {
          if (img.naturalWidth > 0) handleLoad();
          else if (!img.getAttribute("src") || img.getAttribute("src") === "") handleError();
        }
      }
    });
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    document.querySelectorAll(".leader-card").forEach((card) => {
      card.addEventListener("pointermove", (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const rotateY = (x / rect.width - 0.5) * 5;
        const rotateX = (y / rect.height - 0.5) * -5;
        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-6px)`;
      });
      card.addEventListener("pointerleave", () => {
        card.style.transform = "";
      });
    });
  }

  // js/timeline.js
  function initTimeline() {
    const row = document.getElementById("timelineRow") || document.querySelector(".timeline-row");
    const nodes = document.querySelectorAll(".timeline-node");
    const prevBtn = document.getElementById("timelinePrev");
    const nextBtn = document.getElementById("timelineNext");
    if (!row || !nodes.length) return;
    if ("IntersectionObserver" in window) {
      const obs = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            nodes.forEach((n) => n.classList.remove("is-active"));
            entry.target.classList.add("is-active");
          }
        });
      }, { threshold: 0.6, root: row, rootMargin: "0px -20% 0px -20%" });
      nodes.forEach((n) => obs.observe(n));
    } else {
      nodes[0]?.classList.add("is-active");
    }
    let isDown = false;
    let startX, scrollLeft;
    row.addEventListener("mousedown", (e) => {
      isDown = true;
      row.classList.add("is-dragging");
      startX = e.pageX - row.offsetLeft;
      scrollLeft = row.scrollLeft;
    });
    row.addEventListener("mouseleave", () => {
      isDown = false;
      row.classList.remove("is-dragging");
    });
    row.addEventListener("mouseup", () => {
      isDown = false;
      row.classList.remove("is-dragging");
    });
    row.addEventListener("mousemove", (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - row.offsetLeft;
      const walk = (x - startX) * 1.6;
      row.scrollLeft = scrollLeft - walk;
    });
    row.addEventListener("wheel", (e) => {
      if (Math.abs(e.deltaY) > Math.abs(e.deltaX) && window.innerWidth > 900) {
        if (row.scrollWidth > row.clientWidth) {
          e.preventDefault();
          row.scrollLeft += e.deltaY;
        }
      }
    }, { passive: false });
    const scrollAmount = 320;
    prevBtn?.addEventListener("click", () => row.scrollBy({ left: -scrollAmount, behavior: "smooth" }));
    nextBtn?.addEventListener("click", () => row.scrollBy({ left: scrollAmount, behavior: "smooth" }));
    row.setAttribute("tabindex", "0");
    row.addEventListener("keydown", (e) => {
      if (e.key === "ArrowLeft") row.scrollBy({ left: -scrollAmount, behavior: "smooth" });
      if (e.key === "ArrowRight") row.scrollBy({ left: scrollAmount, behavior: "smooth" });
    });
  }

  // js/objectives.js
  function initObjectives() {
    const nodes = document.querySelectorAll(".obj-node");
    if (!nodes.length) return;
    nodes.forEach((node) => {
      node.addEventListener("click", () => {
        const wasActive = node.classList.contains("is-active");
        nodes.forEach((n) => n.classList.remove("is-active"));
        if (!wasActive) node.classList.add("is-active");
      });
    });
    let idx = 0;
    setInterval(() => {
      if (document.querySelector(".obj-node:hover")) return;
      nodes.forEach((n) => n.classList.remove("is-active"));
      nodes[idx % nodes.length].classList.add("is-active");
      idx++;
    }, 4e3);
  }

  // js/magazine.js
  function initMagazine() {
    const gallery = document.getElementById("magazineGallery");
    if (!gallery) return;
    function attachTilt(el) {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
      if (window.matchMedia("(pointer: coarse)").matches) return;
      el.addEventListener("pointermove", (e) => {
        const r = el.getBoundingClientRect();
        const x = (e.clientX - r.left) / r.width - 0.5;
        const y = (e.clientY - r.top) / r.height - 0.5;
        el.style.transform = `perspective(1400px) rotateY(${-10 + x * 12}deg) rotateX(${3 + y * -6}deg) translateY(-8px)`;
      });
      el.addEventListener("pointerleave", () => {
        el.style.transform = "";
      });
    }
    gallery.querySelectorAll(".mag-3d").forEach(attachTilt);
    gallery.querySelectorAll(".mag-cover-img").forEach((img) => {
      const src = img.getAttribute("src");
      if (!src || src === "" || src.includes("assets/images/magazine")) {
        img.addEventListener("error", () => {
          img.style.display = "none";
          img.style.opacity = "0";
        });
        img.addEventListener("load", () => {
          img.style.display = "block";
          img.style.opacity = "1";
        });
      }
      if (src && src !== "") {
        img.style.display = "block";
      }
    });
    gallery.style.opacity = "1";
    gallery.style.display = "grid";
  }

  // js/countdown.js
  function initCountdown() {
    const el = document.getElementById("countdown");
    if (!el) return;
    const target = (/* @__PURE__ */ new Date("2026-11-18T09:00:00Z")).getTime();
    function tick() {
      const now = Date.now();
      let diff = Math.max(0, target - now);
      const d = Math.floor(diff / 864e5);
      diff %= 864e5;
      const h = Math.floor(diff / 36e5);
      diff %= 36e5;
      const m = Math.floor(diff / 6e4);
      diff %= 6e4;
      const s = Math.floor(diff / 1e3);
      el.innerHTML = `
      <div class="cd-box"><b>${String(d).padStart(2, "0")}</b><span>Days</span></div>
      <div class="cd-box"><b>${String(h).padStart(2, "0")}</b><span>Hours</span></div>
      <div class="cd-box"><b>${String(m).padStart(2, "0")}</b><span>Minutes</span></div>
      <div class="cd-box"><b>${String(s).padStart(2, "0")}</b><span>Seconds</span></div>
    `;
    }
    tick();
    setInterval(tick, 1e3);
  }

  // js/three/init.js
  async function initThree() {
    const canvas = document.getElementById("three-canvas");
    if (!canvas) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (!("WebGLRenderingContext" in window)) return;
    const quality = getDeviceQuality();
    if (quality === "low") return;
    try {
      const THREE = await import("https://unpkg.com/three@0.160.0/build/three.module.js");
      const { initParticles: initParticles2 } = await Promise.resolve().then(() => (init_particles(), particles_exports));
      initParticles2(THREE, canvas, quality);
    } catch (e) {
      console.warn("Three.js optional layer failed, CSS 3D continues (expected on Mac file://)", e);
      if (canvas) canvas.style.display = "none";
    }
  }
  function getDeviceQuality() {
    const mem = navigator.deviceMemory || 4;
    const cores = navigator.hardwareConcurrency || 4;
    const isMobile = /Mobi|Android/i.test(navigator.userAgent);
    if (mem <= 2 || cores <= 2 || isMobile) return "medium";
    if (mem <= 4) return "medium";
    return "high";
  }

  // js/main.js
  async function init() {
    try {
      initScroll();
    } catch (e) {
      console.warn("initScroll failed", e);
    }
    try {
      initReveal();
    } catch (e) {
      console.warn("initReveal failed, forcing visible", e);
      document.querySelectorAll("[data-reveal]").forEach((el) => el.classList.add("is-visible"));
    }
    try {
      initParallax();
    } catch (e) {
      console.warn("initParallax failed", e);
    }
    try {
      initCards();
    } catch (e) {
      console.warn("initCards failed", e);
    }
    try {
      initTimeline();
    } catch (e) {
      console.warn("initTimeline failed", e);
    }
    try {
      initObjectives();
    } catch (e) {
      console.warn("initObjectives failed", e);
    }
    try {
      initMagazine();
    } catch (e) {
      console.warn("initMagazine failed", e);
    }
    try {
      initCountdown();
    } catch (e) {
      console.warn("initCountdown failed", e);
    }
    try {
      await initThree();
    } catch (e) {
      console.warn("initThree failed", e);
    }
    setTimeout(() => {
      document.querySelectorAll("[data-reveal]:not(.is-visible)").forEach((el) => {
        el.classList.add("is-visible");
      });
    }, 500);
  }
  function safeInit() {
    try {
      init();
    } catch (e) {
      console.error("Critical init failed, forcing content visible for Mac Safari", e);
      document.querySelectorAll("[data-reveal]").forEach((el) => el.classList.add("is-visible"));
    }
  }
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", safeInit);
  } else {
    safeInit();
  }
  window.addEventListener("error", (e) => {
    if (e.message && e.message.includes("is not defined")) {
      document.querySelectorAll("[data-reveal]").forEach((el) => el.classList.add("is-visible"));
    }
  });
})();
