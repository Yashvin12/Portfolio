/* =====================================================
   YASHVIN MEHRA — Portfolio  ·  animations.js
   Three.js Neural Globe · GSAP · Lenis
   Canvas 2D: Aurum (Gold) · NyaayPath (Black/Orange) · SkillLens (Cyan)
   ===================================================== */
'use strict';

document.addEventListener('DOMContentLoaded', () => {

  /* ══════════════════════════════════════════════════
     GSAP PLUGIN REGISTRATION
  ══════════════════════════════════════════════════ */
  gsap.registerPlugin(ScrollTrigger);

    /* ══════════════════════════════════════════════════
      DEVICE PROFILE
    ══════════════════════════════════════════════════ */
    const DEVICE = (() => {
     const ua = navigator.userAgent || '';
     const minEdge = Math.min(window.innerWidth, window.innerHeight);
     const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
     const isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
     // Use matchMedia to exactly mirror the CSS @media (max-width: 767px) breakpoint
     // This prevents JS/CSS mismatches from DPR, soft-keyboard, or viewport quirks
     const isMobileCSS = window.matchMedia('(max-width: 767px)').matches;
     const isMobileUA = /Mobi|Android|iPhone|iPod/i.test(ua);
     // Also check innerWidth as a safety net for edge cases (soft keyboard, etc.)
     const isMobileW = window.innerWidth <= 767;
     const isMobile = isMobileCSS || isMobileUA || isMobileW;
     const isTablet = !isMobile && minEdge <= 1024;
     const memory = navigator.deviceMemory || 4;
     const cores = navigator.hardwareConcurrency || 4;
     const lowPower = prefersReducedMotion || isMobile || memory <= 4 || cores <= 4;
     // Debug log for mobile diagnosis
     console.log('[Portfolio] DEVICE detection:', { isMobile, isMobileCSS, isMobileUA, isMobileW, isTouch, innerW: window.innerWidth, innerH: window.innerHeight });
     return { isMobile, isTablet, isTouch, prefersReducedMotion, lowPower, memory, cores };
    })();
    document.documentElement.dataset.device = DEVICE.isMobile ? 'mobile' : (DEVICE.isTablet ? 'tablet' : 'desktop');

  /* ══════════════════════════════════════════════════
     LENIS — SMOOTH SCROLL
  ══════════════════════════════════════════════════ */
  let lenis;
  if (!DEVICE.isMobile && !DEVICE.prefersReducedMotion) {
    try {
      lenis = new Lenis({
        duration: 1.35,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        orientation: 'vertical',
        smoothWheel: true,
      });

      lenis.on('scroll', ScrollTrigger.update);

      gsap.ticker.add((time) => { lenis.raf(time * 1000); });
      gsap.ticker.lagSmoothing(0);
    } catch (e) {
      // Lenis not available — fallback to native scroll
      console.warn('Lenis not available, using native scroll');
    }
  }

  /* ══════════════════════════════════════════════════
     DOM REFS
  ══════════════════════════════════════════════════ */
  const cursorDot    = document.getElementById('cursor-dot');
  const cursorRing   = document.getElementById('cursor-ring');
  const heroCanvas   = document.getElementById('hero-canvas');
  const heroN1       = document.getElementById('hero-n1');
  const heroN2       = document.getElementById('hero-n2');
  const heroTag      = document.getElementById('hero-tag');
  const heroRole     = document.getElementById('hero-role');
  const heroSub      = document.getElementById('hero-sub');
  const heroCtas     = document.getElementById('hero-ctas');
  const scrollHint   = document.getElementById('scroll-hint');
  const mainNav      = document.getElementById('main-nav');
  const scrollProg   = document.getElementById('scroll-prog');
  const ctaEmail     = document.getElementById('cta-email');
  const resumeBtn    = document.getElementById('btn-resume');
  const resumeViewBtn = document.getElementById('btn-resume-view');
  const navToggle     = document.getElementById('nav-toggle');
  const navMobile     = document.getElementById('nav-mobile');
  const navMobileClose = document.getElementById('nav-mobile-close');
  const navMobileBackdrop = document.getElementById('nav-mobile-backdrop');
  const tsMobileCarousel = document.getElementById('ts-mobile-carousel');
  const techMobileSheet = document.getElementById('tech-mobile-sheet');
  const techMobilePanel = document.getElementById('tech-mobile-panel');
  const techMobileClose = document.getElementById('tech-mobile-close');
  const techMobileBackdrop = document.getElementById('tech-mobile-backdrop');

  function createCanvasLoop(canvas, drawFrame) {
    let rafId = null;
    let isVisible = true;
    let lastFrame = 0;
    const frameInterval = DEVICE.lowPower ? 1000 / 30 : 1000 / 60;

    if (DEVICE.prefersReducedMotion) {
      drawFrame();
      return () => {};
    }

    function loop(now) {
      if (!isVisible || document.hidden) { rafId = null; return; }
      if (now - lastFrame >= frameInterval) {
        lastFrame = now;
        drawFrame();
      }
      rafId = requestAnimationFrame(loop);
    }

    let observer = null;
    if (canvas && 'IntersectionObserver' in window) {
      observer = new IntersectionObserver(entries => {
        isVisible = entries[0]?.isIntersecting ?? true;
        if (isVisible && !rafId) {
          lastFrame = performance.now();
          rafId = requestAnimationFrame(loop);
        }
      }, { threshold: 0.2 });
      observer.observe(canvas);
    }

    document.addEventListener('visibilitychange', () => {
      if (!document.hidden && isVisible && !rafId) {
        lastFrame = performance.now();
        rafId = requestAnimationFrame(loop);
      }
    });

    rafId = requestAnimationFrame(loop);

    return () => {
      if (rafId) cancelAnimationFrame(rafId);
      if (observer) observer.disconnect();
    };
  }

  /* ══════════════════════════════════════════════════
     MOUSE STATE
  ══════════════════════════════════════════════════ */
  const mouse = { x: window.innerWidth / 2, y: window.innerHeight / 2, nx: 0, ny: 0 };
  let ringX = mouse.x, ringY = mouse.y;
  let cursorVisible = false;
  if (!DEVICE.isTouch) {
    window.addEventListener('mousemove', (e) => {
      mouse.x  = e.clientX;
      mouse.y  = e.clientY;
      mouse.nx = (e.clientX / window.innerWidth)  * 2 - 1;
      mouse.ny = (e.clientY / window.innerHeight) * 2 - 1;

      if (!cursorVisible) {
        cursorVisible = true;
        gsap.to([cursorDot, cursorRing], { opacity: 1, duration: .5 });
      }
      gsap.to(cursorDot, { x: e.clientX, y: e.clientY, duration: .08, ease: 'none' });
    }, { passive: true });

    // Lerp ring follow
    (function lerpRing() {
      ringX += (mouse.x - ringX) * 0.11;
      ringY += (mouse.y - ringY) * 0.11;
      gsap.set(cursorRing, { x: ringX, y: ringY });
      requestAnimationFrame(lerpRing);
    })();

    // Hover states on interactive elements
    document.querySelectorAll('a, button, [role="button"]').forEach(el => {
      el.addEventListener('mouseenter', () => { cursorDot.classList.add('is-hover');    cursorRing.classList.add('is-hover'); });
      el.addEventListener('mouseleave', () => { cursorDot.classList.remove('is-hover'); cursorRing.classList.remove('is-hover'); });
    });
  }

  /* ══════════════════════════════════════════════════
     SCROLL PROGRESS BAR
  ══════════════════════════════════════════════════ */
  let lastY = 0;
  let navShown = true;
  let scrollTicking = false;
  let latestScrollY = window.scrollY;

  function handleScroll() {
    const y = latestScrollY;
    const maxScroll = document.body.scrollHeight - window.innerHeight;
    const pct = maxScroll > 0 ? y / maxScroll : 0;
    scrollProg.style.width = `${pct * 100}%`;

    if (y > 110 && y > lastY && navShown) {
      gsap.to(mainNav, { opacity: 0, y: -14, duration: .32, ease: 'power2.in',
        onComplete: () => mainNav.style.pointerEvents = 'none' });
      navShown = false;
    } else if (y < lastY && !navShown) {
      mainNav.style.pointerEvents = '';
      gsap.to(mainNav, { opacity: 1, y: 0, duration: .4, ease: 'power2.out' });
      navShown = true;
    }
    lastY = y;
  }

  window.addEventListener('scroll', () => {
    latestScrollY = window.scrollY;
    if (!scrollTicking) {
      scrollTicking = true;
      requestAnimationFrame(() => {
        handleScroll();
        scrollTicking = false;
      });
    }
  }, { passive: true });

  /* ══════════════════════════════════════════════════
     MOBILE NAV
  ══════════════════════════════════════════════════ */
  function openMobileNav() {
    if (!navMobile || !navToggle) return;
    navMobile.classList.add('is-open');
    navMobile.setAttribute('aria-hidden', 'false');
    navToggle.setAttribute('aria-expanded', 'true');
    document.body.classList.add('nav-open');
  }
  function closeMobileNav() {
    if (!navMobile || !navToggle) return;
    navMobile.classList.remove('is-open');
    navMobile.setAttribute('aria-hidden', 'true');
    navToggle.setAttribute('aria-expanded', 'false');
    document.body.classList.remove('nav-open');
  }

  if (navToggle) {
    navToggle.addEventListener('click', () => {
      if (navMobile?.classList.contains('is-open')) closeMobileNav();
      else openMobileNav();
    });
  }
  if (navMobileBackdrop) navMobileBackdrop.addEventListener('click', closeMobileNav);
  if (navMobileClose) navMobileClose.addEventListener('click', closeMobileNav);
  if (navMobile) {
    navMobile.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMobileNav));
  }
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeMobileNav();
  });

  /* ══════════════════════════════════════════════════
     LOADER → HERO ENTRANCE
  ══════════════════════════════════════════════════ */
  const loader    = document.getElementById('loader');
  const loaderBar = document.getElementById('loader-bar');

  gsap.to(loaderBar, {
    width: '100%',
    duration: 1.5,
    ease: 'power2.inOut',
    onComplete: () => {
      gsap.to(loader, {
        opacity: 0,
        y: -20,
        duration: .55,
        ease: 'power2.in',
        onComplete: () => {
          loader.style.display = 'none';
          // Refresh ScrollTrigger after loader is removed so all scroll-based
          // reveal animations (data-reveal, project cards, etc.) have correct
          // viewport positions on mobile where Lenis is disabled.
          ScrollTrigger.refresh();
          startHeroEntrance();
        },
      });
    },
  });

  function startHeroEntrance() {
    const tl = gsap.timeline();
    tl.to(heroN1,    { y: '0%',  duration: 1.2, ease: 'expo.out' }, 0)
      .to(heroN2,    { y: '0%',  duration: 1.2, ease: 'expo.out' }, .08)
      .to(heroTag,   { opacity: 1, y: 0, duration: .9, ease: 'expo.out' }, .3)
      .to(heroRole,  { opacity: 1, y: 0, duration: .85, ease: 'expo.out' }, .42)
      .to(heroSub,   { opacity: 1, y: 0, duration: .85, ease: 'expo.out' }, .52)
      .to(heroCtas,  { opacity: 1, y: 0, duration: .85, ease: 'expo.out' }, .62)
      .to(scrollHint,{ opacity: 1,       duration: .7,  ease: 'expo.out' }, .9);
  }

  /* ══════════════════════════════════════════════════
     THREE.JS — HERO NEURAL GLOBE
  ══════════════════════════════════════════════════ */
  (function initThree() {
    if (!window.THREE || !heroCanvas) return;

    const clamp = (val, min, max) => Math.min(max, Math.max(min, val));
    const heroQuality = {
      lowPower: DEVICE.lowPower,
      prefersReducedMotion: DEVICE.prefersReducedMotion,
      dprMin: DEVICE.isMobile ? 0.8 : (DEVICE.isTablet ? 1.0 : 1.25),
      dprMax: DEVICE.isMobile ? 1.0 : (DEVICE.isTablet ? 1.5 : 2.0),
    };

    const W = window.innerWidth;
    const H = window.innerHeight;

    // — Renderer —
    let currentDpr = clamp(window.devicePixelRatio || 1, heroQuality.dprMin, heroQuality.dprMax);
    const renderer = new THREE.WebGLRenderer({
      canvas: heroCanvas,
      antialias: !heroQuality.lowPower,
      alpha: true,
      powerPreference: heroQuality.lowPower ? 'low-power' : 'high-performance',
    });
    renderer.setSize(W, H);
    renderer.setPixelRatio(currentDpr);
    renderer.setClearColor(0x000000, 0);

    // — Scene & Camera —
    const scene  = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(46, W / H, 0.1, 100);
    camera.position.set(0, 0.5, 5.8);

    // — Lights —
    const lightScale = heroQuality.lowPower ? 0.7 : 1;
    scene.add(new THREE.AmbientLight(0x0d0526, 2 * lightScale));

    const lViolet = new THREE.PointLight(0x7c5cf4, 5 * lightScale, 14);
    const lCyan   = new THREE.PointLight(0x22d3ee, 3.5 * lightScale, 12);
    const lRose   = new THREE.PointLight(0xff6b9d, 2.5 * lightScale, 10);
    scene.add(lViolet, lCyan, lRose);

    // — Neural Globe group —
    const globeGroup = new THREE.Group();

    // Inner sphere (dark, subtle specular)
    const sphereSegments = heroQuality.lowPower ? 24 : 36;
    const sphereGeo = new THREE.SphereGeometry(1.2, sphereSegments, sphereSegments);
    const sphereMat = new THREE.MeshPhongMaterial({
      color:    0x0d0526,
      emissive: 0x05010f,
      shininess: 90,
      specular: new THREE.Color(0.45, 0.22, 0.95),
      transparent: true,
      opacity: 0.72,
    });
    globeGroup.add(new THREE.Mesh(sphereGeo, sphereMat));

    // Icosahedron edges (neural net look)
    const icoGeo   = new THREE.IcosahedronGeometry(1.25, heroQuality.lowPower ? 1 : 2);
    const edgeGeo  = new THREE.EdgesGeometry(icoGeo);
    const edgeMat  = new THREE.LineBasicMaterial({ color: 0x5a28c8, transparent: true, opacity: 0.38 });
    globeGroup.add(new THREE.LineSegments(edgeGeo, edgeMat));

    // Vertex points (glowing nodes)
    const ptGeo = new THREE.BufferGeometry();
    ptGeo.setAttribute('position', icoGeo.attributes.position);
    const ptMat = new THREE.PointsMaterial({ color: 0xa385ff, size: 0.055, transparent: true, opacity: 0.95 });
    globeGroup.add(new THREE.Points(ptGeo, ptMat));

    scene.add(globeGroup);

    // Outer rings (independent)
    const ringSegs = heroQuality.lowPower ? 64 : 110;
    const ringBase = new THREE.TorusGeometry(1.65, 0.006, 8, ringSegs);
    const ringMat1 = new THREE.MeshBasicMaterial({ color: 0x7c5cf4, transparent: true, opacity: 0.45 });
    const ringMat2 = new THREE.MeshBasicMaterial({ color: 0x22d3ee, transparent: true, opacity: 0.3 });
    const ring1 = new THREE.Mesh(ringBase,                             ringMat1);
    const ring2 = new THREE.Mesh(new THREE.TorusGeometry(1.82, 0.005, 8, ringSegs), ringMat2);
    ring2.rotation.x = Math.PI / 2.3;
    ring2.rotation.y = Math.PI / 6;
    scene.add(ring1, ring2);

    // Particle cloud
    const PC = heroQuality.lowPower ? 420 : 1400;
    const pPos = new Float32Array(PC * 3);
    for (let i = 0; i < PC; i++) {
      const r     = 2.1 + Math.random() * 2.9;
      const theta = Math.random() * Math.PI * 2;
      const phi   = Math.acos(2 * Math.random() - 1);
      pPos[i*3]   = r * Math.sin(phi) * Math.cos(theta);
      pPos[i*3+1] = r * Math.sin(phi) * Math.sin(theta);
      pPos[i*3+2] = r * Math.cos(phi);
    }
    const partGeo = new THREE.BufferGeometry();
    partGeo.setAttribute('position', new THREE.BufferAttribute(pPos, 3));
    const partMat = new THREE.PointsMaterial({ color: 0x9d7cff, size: 0.028, transparent: true, opacity: 0.55 });
    const particles = new THREE.Points(partGeo, partMat);
    scene.add(particles);

    // — GSAP entrance scale from zero —
    globeGroup.scale.set(0, 0, 0);
    ring1.scale.set(0, 0, 0);
    ring2.scale.set(0, 0, 0);
    particles.scale.set(0, 0, 0);

    gsap.to(globeGroup.scale, { x:1, y:1, z:1, duration:2.2, ease:'elastic.out(1,.5)', delay:.6 });
    gsap.to(ring1.scale,      { x:1, y:1, z:1, duration:1.8, ease:'power3.out',        delay:.75 });
    gsap.to(ring2.scale,      { x:1, y:1, z:1, duration:1.8, ease:'power3.out',        delay:.85 });
    gsap.to(particles.scale,  { x:1, y:1, z:1, duration:1.6, ease:'power3.out',        delay:.9 });

    // — Scroll: camera rise + fade —
    ScrollTrigger.create({
      trigger: '.hero',
      start: 'top top',
      end:   'bottom top',
      scrub: 1.2,
      onUpdate(self) {
        const p = self.progress;
        camera.position.y = 0.5 + p * 2;
        partMat.opacity   = 0.55 * (1 - p * 0.88);
        edgeMat.opacity   = 0.38 * (1 - p * 0.88);
      },
    });

    // — rAF loop —
    const clock = new THREE.Clock();
    let tgtRotX = 0, tgtRotY = 0;
    let heroRaf = null;
    let heroActive = true;
    let fpsFrames = 0;
    let fpsElapsed = 0;
    const timeScale = heroQuality.lowPower ? 0.8 : 1;

    function updateAdaptiveDpr(dt) {
      fpsFrames += 1;
      fpsElapsed += dt;
      if (fpsElapsed < 0.6) return;
      const fps = fpsFrames / fpsElapsed;
      fpsFrames = 0;
      fpsElapsed = 0;
      if (fps < 45 && currentDpr > heroQuality.dprMin) {
        currentDpr = Math.max(heroQuality.dprMin, currentDpr - 0.1);
        renderer.setPixelRatio(currentDpr);
      } else if (fps > 58 && !heroQuality.lowPower && currentDpr < heroQuality.dprMax) {
        currentDpr = Math.min(heroQuality.dprMax, currentDpr + 0.1);
        renderer.setPixelRatio(currentDpr);
      }
    }

    function tick() {
      if (!heroActive) { heroRaf = null; return; }
      heroRaf = requestAnimationFrame(tick);
      const dt = clock.getDelta();
      const t = clock.elapsedTime * timeScale;
      updateAdaptiveDpr(dt);

      // Mouse-reactive tilt on globe
      tgtRotX = -mouse.ny * 0.2;
      tgtRotY =  mouse.nx * 0.3;
      globeGroup.rotation.x += (tgtRotX - globeGroup.rotation.x) * 0.042 + 0.0035;
      globeGroup.rotation.y += (tgtRotY - globeGroup.rotation.y) * 0.042 + 0.007;

      // Ring animations
      ring1.rotation.z = t * 0.28;
      ring2.rotation.y = t * 0.22;
      ring2.rotation.x = Math.PI / 2.3 + Math.sin(t * 0.18) * 0.25;

      // Particles slow drift
      particles.rotation.y = t * 0.038;
      particles.rotation.x = t * 0.013;

      // Orbiting lights
      lViolet.position.set(Math.sin(t * 0.48) * 4.5, Math.cos(t * 0.32) * 3,   Math.cos(t * 0.48) * 4.5);
      lCyan.position.set(  Math.cos(t * 0.38) * 3.5, Math.sin(t * 0.48) * 2.5, Math.sin(t * 0.38) * 3.5);
      lRose.position.set(  Math.sin(t * 0.28 + 2)*5,  Math.cos(t * 0.38 + 1)*2, Math.cos(t * 0.28) * 3.5);

      renderer.render(scene, camera);
    }

    if (heroQuality.prefersReducedMotion) {
      renderer.render(scene, camera);
      return;
    }

    heroRaf = requestAnimationFrame(tick);

    const heroSection = document.getElementById('hero');
    if ('IntersectionObserver' in window && heroSection) {
      const heroObserver = new IntersectionObserver(entries => {
        heroActive = entries[0]?.isIntersecting ?? true;
        if (heroActive && !heroRaf) heroRaf = requestAnimationFrame(tick);
      }, { threshold: 0.1 });
      heroObserver.observe(heroSection);
    }
    document.addEventListener('visibilitychange', () => {
      heroActive = !document.hidden;
      if (heroActive && !heroRaf) heroRaf = requestAnimationFrame(tick);
    });

    // — Resize —
    let resizeTimer = null;
    window.addEventListener('resize', () => {
      if (resizeTimer) clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        const W = window.innerWidth, H = window.innerHeight;
        camera.aspect = W / H;
        camera.updateProjectionMatrix();
        currentDpr = clamp(window.devicePixelRatio || 1, heroQuality.dprMin, heroQuality.dprMax);
        renderer.setPixelRatio(currentDpr);
        renderer.setSize(W, H);
      }, 120);
    }, { passive: true });

  })();

  /* ══════════════════════════════════════════════════
     CANVAS 2D — AURUM (Gold rings + financial chart)
  ══════════════════════════════════════════════════ */
  function initAurumCanvas(canvas) {
    const ctx = canvas.getContext('2d');
    let t = 0, alive = true;
    const isLow = DEVICE.lowPower;
    const rings = isLow ? [
      { r:72, speed:.18, dash:[12,8],  lw:1.4 },
      { r:118,speed:-.12,dash:[18,10], lw:1.0 },
    ] : [
      { r:72, speed:.22, dash:[14,9],  lw:1.6 },
      { r:104,speed:-.16,dash:[22,11], lw:1.1 },
      { r:138,speed:.11, dash:[9,18],  lw:.9  },
      { r:170,speed:-.08,dash:[6,22],  lw:.7  },
    ];
    const chartPts = isLow ? 22 : 32;

    function resize() {
      canvas.width  = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    }
    resize();

    function draw() {
      if (!alive) return;
      const W = canvas.width, H = canvas.height;
      const cx = W * .5, cy = H * .52;

      ctx.clearRect(0, 0, W, H);
      ctx.fillStyle = '#050300';
      ctx.fillRect(0, 0, W, H);

      // Central glow
      const bg = ctx.createRadialGradient(cx, cy, 0, cx, cy, 170);
      bg.addColorStop(0, 'rgba(212,175,55,.1)');
      bg.addColorStop(1, 'rgba(0,0,0,0)');
      ctx.fillStyle = bg;
      ctx.fillRect(0, 0, W, H);

      // Rotating dashed rings
      rings.forEach(ring => {
        const grad = ctx.createLinearGradient(cx-ring.r, cy, cx+ring.r, cy);
        grad.addColorStop(0,   'rgba(180,130,10,.4)');
        grad.addColorStop(.5,  'rgba(255,215,0,.95)');
        grad.addColorStop(1,   'rgba(180,130,10,.4)');

        ctx.save();
        ctx.translate(cx, cy);
        ctx.rotate(t * ring.speed);
        ctx.beginPath();
        ctx.arc(0, 0, ring.r, 0, Math.PI*2);
        ctx.strokeStyle = grad;
        ctx.lineWidth   = ring.lw;
        ctx.setLineDash(ring.dash);
        ctx.lineDashOffset = -t * 35;
        ctx.stroke();
        ctx.setLineDash([]);
        ctx.restore();
      });

      // Chart line (upward trend with wave noise)
      const PTS = chartPts;
      const chartX0 = W*.08, chartX1 = W*.92;
      const chartY0 = H*.72;

      ctx.beginPath();
      for (let i = 0; i <= PTS; i++) {
        const x   = chartX0 + (chartX1 - chartX0) * (i / PTS);
        const wave= Math.sin(i*.65 + t*1.6)*20 + Math.sin(i*1.15 + t*.9)*12;
        const y   = chartY0 - (i/PTS)*H*.38 - wave;
        i === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
      }
      ctx.strokeStyle = 'rgba(255,215,0,.85)';
      ctx.lineWidth   = 2.2;
      ctx.stroke();

      // Area fill under chart
      ctx.lineTo(chartX1, H);
      ctx.lineTo(chartX0, H);
      ctx.closePath();
      const area = ctx.createLinearGradient(0, chartY0-H*.3, 0, H);
      area.addColorStop(0, 'rgba(212,175,55,.18)');
      area.addColorStop(1, 'rgba(212,175,55,0)');
      ctx.fillStyle = area;
      ctx.fill();

      // Data points with glow
      for (let i = 0; i <= PTS; i += 5) {
        const x   = chartX0 + (chartX1 - chartX0) * (i / PTS);
        const wave= Math.sin(i*.65 + t*1.6)*20 + Math.sin(i*1.15 + t*.9)*12;
        const y   = chartY0 - (i/PTS)*H*.38 - wave;

        const dg = ctx.createRadialGradient(x, y, 0, x, y, 14);
        dg.addColorStop(0, 'rgba(255,215,0,.55)');
        dg.addColorStop(1, 'rgba(255,215,0,0)');
        ctx.beginPath(); ctx.arc(x, y, 14, 0, Math.PI*2);
        ctx.fillStyle = dg; ctx.fill();

        ctx.beginPath(); ctx.arc(x, y, 4, 0, Math.PI*2);
        ctx.fillStyle = '#FFD700'; ctx.fill();
      }

      // Central gold orb
      const og = ctx.createRadialGradient(cx, cy, 0, cx, cy, 38);
      og.addColorStop(0, 'rgba(255,215,0,.85)');
      og.addColorStop(.4,'rgba(212,175,55,.4)');
      og.addColorStop(1, 'rgba(212,175,55,0)');
      ctx.beginPath(); ctx.arc(cx, cy, 38, 0, Math.PI*2);
      ctx.fillStyle = og; ctx.fill();
      ctx.beginPath(); ctx.arc(cx, cy, 13, 0, Math.PI*2);
      ctx.fillStyle = '#FFD700'; ctx.fill();

      t += isLow ? 0.006 : 0.008;
    }
    const stop = createCanvasLoop(canvas, draw);
    return () => { alive = false; stop(); };
  }

  /* ══════════════════════════════════════════════════
     CANVAS 2D — NYAAYPATH (Black + Orange nodes/graph)
  ══════════════════════════════════════════════════ */
  function initNyaayCanvas(canvas) {
    const ctx = canvas.getContext('2d');
    let t = 0, alive = true;
    const isLow = DEVICE.lowPower;

    function resize() {
      canvas.width  = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    }
    resize();

    // Nodes
    const nodes = Array.from({ length: isLow ? 7 : 11 }, () => ({
      x:  Math.random() * canvas.width  * .82 + canvas.width  * .09,
      y:  Math.random() * canvas.height * .78 + canvas.height * .11,
      vx: (Math.random() - .5) * (isLow ? .28 : .45),
      vy: (Math.random() - .5) * (isLow ? .28 : .45),
      r:  4.5 + Math.random() * 3,
      phase: Math.random() * Math.PI * 2,
    }));

    function draw() {
      if (!alive) return;
      const W = canvas.width, H = canvas.height;

      ctx.clearRect(0, 0, W, H);
      ctx.fillStyle = '#050100';
      ctx.fillRect(0, 0, W, H);

      // Background glow
      const bg = ctx.createRadialGradient(W*.5, H*.5, 0, W*.5, H*.5, W*.55);
      bg.addColorStop(0, 'rgba(249,115,22,.06)');
      bg.addColorStop(1, 'rgba(0,0,0,0)');
      ctx.fillStyle = bg; ctx.fillRect(0, 0, W, H);

      // Connections
      nodes.forEach((n1, i) => {
        nodes.forEach((n2, j) => {
          if (j <= i) return;
          const dx = n2.x - n1.x, dy = n2.y - n1.y;
          const dist = Math.sqrt(dx*dx + dy*dy);
          if (dist > (isLow ? 150 : 190)) return;

          const alpha = (1 - dist/190) * .45;

          // Line
          ctx.beginPath();
          ctx.moveTo(n1.x, n1.y);
          ctx.lineTo(n2.x, n2.y);
          ctx.strokeStyle = `rgba(249,115,22,${alpha})`;
          ctx.lineWidth = .9;
          ctx.stroke();

          // Animated packet travelling along edge
          const prog = (t * .32 + i * .12) % 1;
          const px = n1.x + dx * prog;
          const py = n1.y + dy * prog;
          ctx.beginPath();
          ctx.arc(px, py, 2.8, 0, Math.PI*2);
          ctx.fillStyle = `rgba(251,146,60,${alpha * 2.2})`;
          ctx.fill();
        });
      });

      // Nodes
      nodes.forEach(n => {
        n.x += n.vx; n.y += n.vy;
        n.phase += .025;
        if (n.x < 18 || n.x > W-18) n.vx *= -1;
        if (n.y < 18 || n.y > H-18) n.vy *= -1;

        const pulseR = n.r + Math.sin(n.phase) * 2.2;

        const ng = ctx.createRadialGradient(n.x, n.y, 0, n.x, n.y, pulseR + 18);
        ng.addColorStop(0, 'rgba(249,115,22,.65)');
        ng.addColorStop(1, 'rgba(249,115,22,0)');
        ctx.beginPath(); ctx.arc(n.x, n.y, pulseR + 18, 0, Math.PI*2);
        ctx.fillStyle = ng; ctx.fill();

        ctx.beginPath(); ctx.arc(n.x, n.y, pulseR, 0, Math.PI*2);
        ctx.fillStyle   = '#F97316';
        ctx.strokeStyle = 'rgba(251,146,60,.8)';
        ctx.lineWidth   = 1.5;
        ctx.fill();
        ctx.stroke();
      });

      // Scales of justice — simple geometric symbol
      const sx = W*.82, sy = H*.2;
      ctx.save();
      ctx.globalAlpha = .12;
      ctx.strokeStyle = '#F97316';
      ctx.lineWidth = 2;

      // Vertical bar
      ctx.beginPath();
      ctx.moveTo(sx, sy - 22);
      ctx.lineTo(sx, sy + 40);
      ctx.stroke();
      // Horizontal bar
      ctx.beginPath();
      ctx.moveTo(sx - 22, sy);
      ctx.lineTo(sx + 22, sy);
      ctx.stroke();
      // Left pan
      ctx.beginPath();
      ctx.arc(sx - 22, sy + 18, 10, 0, Math.PI);
      ctx.stroke();
      // Right pan
      ctx.beginPath();
      ctx.arc(sx + 22, sy + 18, 10, 0, Math.PI);
      ctx.stroke();

      ctx.restore();

      t += isLow ? 0.012 : 0.016;
    }
    const stop = createCanvasLoop(canvas, draw);
    return () => { alive = false; stop(); };
  }

  /* ══════════════════════════════════════════════════
     CANVAS 2D — SKILLLENS (Cyan neural network layers)
  ══════════════════════════════════════════════════ */
  function initSkillCanvas(canvas) {
    const ctx = canvas.getContext('2d');
    let t = 0, alive = true;
    const isLow = DEVICE.lowPower;

    function resize() {
      canvas.width  = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    }
    resize();

    const LAYERS = isLow ? [3, 4, 3] : [3, 5, 5, 3];

    function draw() {
      if (!alive) return;
      const W = canvas.width, H = canvas.height;

      ctx.clearRect(0, 0, W, H);
      ctx.fillStyle = '#010508';
      ctx.fillRect(0, 0, W, H);

      // Background
      const bg = ctx.createRadialGradient(W*.5, H*.5, 0, W*.5, H*.5, W*.55);
      bg.addColorStop(0, 'rgba(6,182,212,.07)');
      bg.addColorStop(1, 'rgba(0,0,0,0)');
      ctx.fillStyle = bg; ctx.fillRect(0, 0, W, H);

      const lCount = LAYERS.length;
      const lSpacing = W / (lCount + 1);

      // Compute node positions
      const nodePos = LAYERS.map((count, li) => {
        const x = lSpacing * (li + 1);
        const ns = H / (count + 1);
        return Array.from({ length: count }, (_, ni) => ({
          x, y: ns * (ni + 1),
          intensity: Math.sin(t * 1.6 + li * .55 + ni * .9) * .5 + .5,
        }));
      });

      // Draw connections
      for (let li = 0; li < lCount - 1; li++) {
        nodePos[li].forEach(fn => {
          nodePos[li+1].forEach(tn => {
            const weight = Math.sin(t + fn.y*.05 + tn.y*.05) * .5 + .5;
            const alpha  = weight * .38;

            ctx.beginPath();
            ctx.moveTo(fn.x, fn.y);
            ctx.lineTo(tn.x, tn.y);
            ctx.strokeStyle = `rgba(6,182,212,${alpha})`;
            ctx.lineWidth   = weight * 1.5;
            ctx.stroke();

            // Signal pulse
            const pulseT = ((t * .75 + fn.y * .01) % 1);
            const px = fn.x + (tn.x - fn.x) * pulseT;
            const py = fn.y + (tn.y - fn.y) * pulseT;
            ctx.beginPath();
            ctx.arc(px, py, 2.2, 0, Math.PI*2);
            ctx.fillStyle = `rgba(34,211,238,${weight * .85})`;
            ctx.fill();
          });
        });
      }

      // Draw nodes
      nodePos.forEach(layer => {
        layer.forEach(node => {
          const r = 11;

          const ng = ctx.createRadialGradient(node.x, node.y, 0, node.x, node.y, r + 18);
          ng.addColorStop(0, `rgba(6,182,212,${node.intensity * .65})`);
          ng.addColorStop(1,  'rgba(6,182,212,0)');
          ctx.beginPath(); ctx.arc(node.x, node.y, r + 18, 0, Math.PI*2);
          ctx.fillStyle = ng; ctx.fill();

          ctx.beginPath(); ctx.arc(node.x, node.y, r, 0, Math.PI*2);
          ctx.fillStyle   = `rgba(6,182,212,${node.intensity * .82})`;
          ctx.strokeStyle = `rgba(34,211,238,.85)`;
          ctx.lineWidth   = 1.5;
          ctx.fill();
          ctx.stroke();
        });
      });

      t += isLow ? 0.012 : 0.016;
    }
    const stop = createCanvasLoop(canvas, draw);
    return () => { alive = false; stop(); };
  }

  /* ══════════════════════════════════════════════════
     CANVAS 2D — GITHUB CONTRIBUTION GRAPH
  ══════════════════════════════════════════════════ */
  function initContribCanvas(canvas) {
    const ctx = canvas.getContext('2d');
    const W = canvas.offsetWidth;
    canvas.width  = W;
    canvas.height = 72;

    const COLS = 52, ROWS = 7;
    const cell = Math.floor((W - COLS) / COLS);
    const gapX = 1;

    // Fake contribution data with realistic clusters
    const data = Array.from({ length: COLS * ROWS }, (_, i) => {
      const col = Math.floor(i / ROWS);
      const base = Math.sin(col * 0.18) * 0.4 + 0.4;
      return Math.max(0, Math.min(1, base + (Math.random() - 0.5) * 0.7));
    });

    data.forEach((val, i) => {
      const col = Math.floor(i / ROWS);
      const row = i % ROWS;
      const x   = col * (cell + gapX);
      const y   = row * (cell + gapX);

      const alpha = val > .8 ? 1 : val > .6 ? .7 : val > .35 ? .4 : val > .1 ? .18 : .07;
      ctx.fillStyle = `rgba(124,92,244,${alpha})`;
      ctx.fillRect(x, y, cell, cell);
    });
  }

  /* ══════════════════════════════════════════════════
     TECH STACK UNIVERSE
  ══════════════════════════════════════════════════ */
  // Tech orbit removed — replaced by techstack-universe.js WebGL engine

  let mobileTechReady = false;
  function initMobileTechStack() {
    if (mobileTechReady || !tsMobileCarousel) return;

    // Debug log for mobile diagnosis
    console.log('[Portfolio] initMobileTechStack called:', {
      hasData: !!window.TECHSTACK_DATA,
      dataLen: window.TECHSTACK_DATA?.length,
      screenW: window.innerWidth,
      screenH: window.innerHeight,
    });

    if (!window.TECHSTACK_DATA) {
      // Data not yet available — show fallback content so the section
      // is never a black screen. The retry logic will repopulate it.
      console.warn('[Portfolio] TECHSTACK_DATA not available yet — showing fallback');
      // Don't mark as ready so we can retry when data arrives
      return;
    }

    mobileTechReady = true;
    console.log('[Portfolio] Populating mobile tech carousel with', window.TECHSTACK_DATA.length, 'items');

    function openMobilePanel(tech) {
      if (!techMobileSheet || !techMobilePanel) return;
      const panelWrap = techMobilePanel.closest('.tech-mobile-panel');
      if (panelWrap) panelWrap.style.setProperty('--accent', tech.accent || '#7c5cf4');
      techMobilePanel.innerHTML = '';

      const title = document.createElement('h3');
      title.className = 'tm-title';
      title.textContent = tech.name;

      const cat = document.createElement('div');
      cat.className = 'tm-category';
      cat.textContent = tech.cat || 'Technology';

      const desc = document.createElement('p');
      desc.className = 'tm-desc';
      desc.textContent = tech.desc || '';

      const stats = document.createElement('div');
      stats.className = 'tm-stats';
      const list = (tech.stats && tech.stats.length ? tech.stats : [
        { label: 'Experience', value: tech.years || '—' },
        { label: 'Projects', value: tech.projects || '—' },
        { label: 'Role', value: tech.role || '—' },
        { label: 'Proficiency', value: tech.proficiency ? `${tech.proficiency}%` : '—' },
      ]).slice(0, 4);
      list.forEach(stat => {
        const card = document.createElement('div');
        card.className = 'tm-stat';
        const lbl = document.createElement('div');
        lbl.className = 'tm-stat-label';
        lbl.textContent = stat.label;
        const val = document.createElement('div');
        val.className = 'tm-stat-value';
        val.textContent = stat.value;
        card.append(lbl, val);
        stats.appendChild(card);
      });

      const code = document.createElement('pre');
      code.className = 'tm-code';
      code.textContent = tech.code || '';

      const connects = document.createElement('div');
      connects.className = 'tm-connects';
      (tech.connects || []).slice(0, 8).forEach(name => {
        const chip = document.createElement('span');
        chip.className = 'tm-connect';
        chip.textContent = name;
        connects.appendChild(chip);
      });

      techMobilePanel.append(title, cat, desc, stats, code, connects);

      techMobileSheet.classList.add('is-open');
      techMobileSheet.setAttribute('aria-hidden', 'false');
      document.body.classList.add('sheet-open');
    }

    function closeMobilePanel() {
      if (!techMobileSheet) return;
      techMobileSheet.classList.remove('is-open');
      techMobileSheet.setAttribute('aria-hidden', 'true');
      document.body.classList.remove('sheet-open');
    }

    if (techMobileBackdrop) techMobileBackdrop.addEventListener('click', closeMobilePanel);
    if (techMobileClose) techMobileClose.addEventListener('click', closeMobilePanel);
    document.addEventListener('keydown', e => {
      if (e.key === 'Escape') closeMobilePanel();
    });

    window.TECHSTACK_DATA.forEach(tech => {
      const card = document.createElement('button');
      card.type = 'button';
      card.className = 'ts-mobile-card';
      card.setAttribute('role', 'listitem');
      card.style.setProperty('--accent', tech.accent || '#7c5cf4');

      const eyebrow = document.createElement('div');
      eyebrow.className = 'ts-mobile-card-eyebrow';
      eyebrow.textContent = tech.cat || 'Tech';

      const title = document.createElement('div');
      title.className = 'ts-mobile-card-title';
      title.textContent = tech.name;

      const desc = document.createElement('div');
      desc.className = 'ts-mobile-card-desc';
      const raw = tech.desc || '';
      desc.textContent = raw.length > 120 ? raw.slice(0, 118) + '…' : raw;

      const meta = document.createElement('div');
      meta.className = 'ts-mobile-card-meta';
      [tech.years, tech.projects, tech.role].filter(Boolean).slice(0, 3).forEach(item => {
        const chip = document.createElement('span');
        chip.className = 'ts-mobile-card-chip';
        chip.textContent = item;
        meta.appendChild(chip);
      });

      const action = document.createElement('div');
      action.className = 'ts-mobile-card-action';
      action.textContent = 'Tap to inspect →';

      card.append(eyebrow, title, desc, meta, action);
      card.addEventListener('click', () => openMobilePanel(tech));
      tsMobileCarousel.appendChild(card);
    });
    console.log('[Portfolio] Mobile tech carousel populated successfully.');
  }


  /* ══════════════════════════════════════════════════
     TERMINAL TYPEWRITER
  ══════════════════════════════════════════════════ */
  function initTerminal() {
    const body = document.getElementById('terminal-body');
    if (!body) return;
    body.innerHTML = '';

    const lines = [
      { cmd: 'whoami',                        out: '→ Yashvin12' },
      { cmd: 'git log --oneline | wc -l',     out: '→ 200+ commits' },
      { cmd: 'ls ~/repos/ | wc -l',           out: '→ 20+ repositories' },
      { cmd: 'cat ~/.languages',               out: '→ Python · JS · TS · Go' },
    ];

    lines.forEach((line, i) => {
      const wrap = document.createElement('div');
      wrap.className = 'terminal-line';

      const prompt = document.createElement('span');
      prompt.className = 'terminal-prompt';
      prompt.textContent = '$';

      const cmd = document.createElement('span');
      cmd.className = 'terminal-cmd';

      const out = document.createElement('span');
      out.className = 'terminal-output';

      wrap.append(prompt, cmd, out);
      body.appendChild(wrap);

      const delay = i * 820 + 250;
      setTimeout(() => {
        typeText(cmd, line.cmd, 42, () => {
          setTimeout(() => typeText(out, line.out, 28), 220);
        });
      }, delay);
    });
  }

  function typeText(el, text, speed, cb) {
    let i = 0;
    el.textContent = '';
    const interval = setInterval(() => {
      if (i < text.length) { el.textContent += text[i++]; }
      else { clearInterval(interval); cb && cb(); }
    }, speed);
  }

  /* ══════════════════════════════════════════════════
     GSAP — SCROLL REVEAL
  ══════════════════════════════════════════════════ */
  document.querySelectorAll('[data-reveal]').forEach(el => {
    const delay = parseFloat(el.dataset.delay || 0);
    if (DEVICE.prefersReducedMotion) {
      el.style.opacity = '1';
      el.style.transform = 'none';
      return;
    }
    ScrollTrigger.create({
      trigger: el,
      start:   'top 88%',
      once:    true,
      onEnter() {
        gsap.to(el, { opacity:1, y:0, duration:.95, delay, ease:'expo.out' });
      },
    });
  });

  // Project cards — staggered entry + canvas lazy-init
  const projectCanvases = {
    'project-aurum': { id:'aurum-canvas', init: initAurumCanvas },
    'project-nyaay': { id:'nyaay-canvas', init: initNyaayCanvas },
    'project-skill': { id:'skill-canvas', init: initSkillCanvas },
  };

  document.querySelectorAll('.project-scene').forEach((card, i) => {
    ScrollTrigger.create({
      trigger: card,
      start:   'top 84%',
      once:    true,
      onEnter() {
        gsap.to(card, { opacity:1, y:0, duration:1, delay: i * 0.1, ease:'expo.out' });

        // Lazy-start Canvas 2D for this project
        const cfg = projectCanvases[card.id];
        if (cfg) {
          const cnv = document.getElementById(cfg.id);
          if (cnv) cfg.init(cnv);
        }
      },
    });
  });

  // Tech Universe — init when section enters viewport (fires immediately on enter)
  let techUniverseDestroy = null;

  if (DEVICE.isMobile) {
    // Try immediately; if TECHSTACK_DATA isn't set yet (Three.js CDN slow),
    // retry every 100ms for up to 3 seconds.
    let mobileRetries = 0;
    const MAX_RETRIES = 30; // 3 seconds at 100ms intervals
    function tryMobileInit() {
      if (window.TECHSTACK_DATA) {
        initMobileTechStack();
        console.log('[Portfolio] Mobile tech stack initialized on attempt', mobileRetries + 1);
      } else if (mobileRetries < MAX_RETRIES) {
        mobileRetries++;
        setTimeout(tryMobileInit, 100);
      } else {
        // Data never arrived (CDN failure) — the section is still visible due
        // to CSS min-height; just log the failure.
        console.error('[Portfolio] TECHSTACK_DATA never loaded — mobile carousel will be empty. Check CDN for Three.js and techstack-universe.js.');
      }
    }
    tryMobileInit();
  } else {
    // Fallback: even if DEVICE.isMobile is false, if the CSS mobile layout is
    // actually visible (matchMedia check), populate the carousel anyway.
    // This catches edge cases where JS/CSS device detection diverges.
    if (window.matchMedia('(max-width: 767px)').matches) {
      let fallbackRetries = 0;
      function tryFallbackInit() {
        if (window.TECHSTACK_DATA) {
          initMobileTechStack();
          console.log('[Portfolio] Fallback mobile carousel populated (CSS mobile, JS desktop)');
        } else if (fallbackRetries < 20) {
          fallbackRetries++;
          setTimeout(tryFallbackInit, 100);
        }
      }
      tryFallbackInit();
    }
  }

  ScrollTrigger.create({
    trigger: '#techstack',
    start:   'top 100%',   // fires as soon as ANY part of the section is visible
    once:    true,
    onEnter() {
      const isMobileView = DEVICE.isMobile || window.matchMedia('(max-width: 767px)').matches;
      console.log('[Portfolio] #techstack entered viewport. isMobileView:', isMobileView, 'innerW:', window.innerWidth);
      if (isMobileView) {
        // Retry on viewport enter in case the first attempt failed
        initMobileTechStack();
      } else if (typeof window.initTechUniverse === 'function' && !techUniverseDestroy) {
        console.log('[Portfolio] Initializing WebGL Tech Universe');
        techUniverseDestroy = window.initTechUniverse();
      }
    },
  });

  // Heading mouse parallax — subtle depth shift on ts-heading
  const tsHeading = document.querySelector('.ts-heading');
  if (tsHeading && !DEVICE.isTouch) {
    window.addEventListener('mousemove', (e) => {
      const nx = (e.clientX / window.innerWidth)  * 2 - 1;
      const ny = (e.clientY / window.innerHeight) * 2 - 1;
      // Very subtle: shifts 4px in each axis, feels like letters in 3D space
      gsap.to(tsHeading, {
        x: nx * -4,
        y: ny * -3,
        duration: 1.8,
        ease: 'power2.out',
        overwrite: 'auto',
      });
    }, { passive: true });
  }


  // Social section — terminal + contribution canvas
  ScrollTrigger.create({
    trigger: '#social',
    start:   'top 80%',
    once:    true,
    onEnter() {
      initTerminal();
    },
  });

  /* ══════════════════════════════════════════════════
     STAT COUNTERS — LinkedIn
  ══════════════════════════════════════════════════ */
  document.querySelectorAll('[data-count]').forEach(el => {
    const target = parseInt(el.dataset.count, 10);
    ScrollTrigger.create({
      trigger: el,
      start:   'top 85%',
      once:    true,
      onEnter() {
        const obj = { v: 0 };
        gsap.to(obj, {
          v: target,
          duration: 1.6,
          ease: 'power2.out',
          onUpdate() { el.textContent = Math.round(obj.v); },
        });
      },
    });
  });

  /* ══════════════════════════════════════════════════
     MAGNETIC BUTTONS
  ══════════════════════════════════════════════════ */
  function addMagnetic(btn, strength = 0.36) {
    if (!btn) return;
    btn.addEventListener('mousemove', e => {
      const r  = btn.getBoundingClientRect();
      const cx = r.left + r.width  / 2;
      const cy = r.top  + r.height / 2;
      gsap.to(btn, {
        x: (e.clientX - cx) * strength,
        y: (e.clientY - cy) * strength,
        duration: .45, ease: 'power2.out',
      });
    });
    btn.addEventListener('mouseleave', () => {
      gsap.to(btn, { x:0, y:0, duration: .65, ease: 'elastic.out(1,.4)' });
    });
  }

  if (!DEVICE.isTouch && !DEVICE.prefersReducedMotion) {
    addMagnetic(ctaEmail, 0.32);
    addMagnetic(resumeBtn, 0.32);
    addMagnetic(resumeViewBtn, 0.3);
    addMagnetic(document.getElementById('cta-work'), 0.28);
  }

  /* ══════════════════════════════════════════════════
     PROJECT CARD — mouse-follow radial glow
  ══════════════════════════════════════════════════ */
  if (!DEVICE.isTouch) {
    document.querySelectorAll('.project-scene').forEach(card => {
      card.addEventListener('mousemove', e => {
        const r = card.getBoundingClientRect();
        card.style.setProperty('--mx', `${e.clientX - r.left}px`);
        card.style.setProperty('--my', `${e.clientY - r.top}px`);
      });
    });
  }

  /* ══════════════════════════════════════════════════
     MARQUEE — pause on hover
  ══════════════════════════════════════════════════ */
  const mTrack = document.querySelector('.marquee-track');
  if (mTrack && !DEVICE.isTouch) {
    mTrack.addEventListener('mouseenter', () => mTrack.style.animationPlayState = 'paused');
    mTrack.addEventListener('mouseleave', () => mTrack.style.animationPlayState = 'running');
  }

  /* ══════════════════════════════════════════════════
     PERIODIC GLITCH on hero name (subtle, every ~6s)
  ══════════════════════════════════════════════════ */
  function glitch(el) {
    if (!el) return;
    const tl = gsap.timeline();
    tl.to(el, { x: 5,  skewX: 2,  duration: .05, ease:'none' })
      .to(el, { x: -5, skewX: -2, duration: .05, ease:'none' })
      .to(el, { x: 2,  skewX: 0,  duration: .05, ease:'none' })
      .to(el, { x: 0,  skewX: 0,  duration: .1,  ease:'none' });
  }

  if (!DEVICE.prefersReducedMotion) {
    const glitchInterval = DEVICE.lowPower ? 8400 : 6200;
    setInterval(() => {
      if (Math.random() > .65) { glitch(heroN1); glitch(heroN2); }
    }, glitchInterval);
  }

}); // end DOMContentLoaded

/* =====================================================
   RECRUITER BRIEF — Isolated controller
   ===================================================== */
(function initRecruiterBrief() {
  'use strict';

  const overlay    = document.getElementById('recruiter-overlay');
  const closeBtn   = document.getElementById('rb-close');
  const rbContent  = document.getElementById('rb-content');
  const navBtn     = document.getElementById('nav-recruiter-btn');
  const heroBtn    = document.getElementById('hero-recruiter-btn');
  const mobileBtn  = document.getElementById('nav-mobile-recruiter-btn');
  const rbCanvas   = document.getElementById('rb-canvas');

  if (!overlay) return;

  /* ── Particle canvas background ── */
  let rbRaf = null;
  let rbParticlesReady = false;

  function initRbCanvas() {
    if (rbParticlesReady || !rbCanvas) return;
    rbParticlesReady = true;

    const ctx = rbCanvas.getContext('2d');
    let w, h;

    function resize() {
      w = rbCanvas.width  = overlay.offsetWidth;
      h = rbCanvas.height = overlay.offsetHeight;
    }
    resize();
    window.addEventListener('resize', resize, { passive: true });

    const COUNT = window.matchMedia('(max-width: 767px)').matches ? 40 : 90;
    const pts = Array.from({ length: COUNT }, () => ({
      x:  Math.random() * w,
      y:  Math.random() * h,
      vx: (Math.random() - .5) * .3,
      vy: (Math.random() - .5) * .3,
      r:  1.2 + Math.random() * 2.2,
      a:  Math.random() * Math.PI * 2,
      speed: .008 + Math.random() * .012,
      opacity: .1 + Math.random() * .35,
    }));

    let t = 0;
    function draw() {
      ctx.clearRect(0, 0, w, h);
      t += .006;

      pts.forEach((p, i) => {
        p.a += p.speed;
        p.x += p.vx + Math.sin(p.a) * .18;
        p.y += p.vy + Math.cos(p.a) * .18;
        if (p.x < 0)  p.x = w;
        if (p.x > w)  p.x = 0;
        if (p.y < 0)  p.y = h;
        if (p.y > h)  p.y = 0;

        const pulse = Math.sin(t * 1.4 + i * .35) * .5 + .5;
        const op = p.opacity * (.5 + pulse * .5);

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(124,92,244,${op})`;
        ctx.fill();

        // Connect nearby particles
        pts.slice(i + 1).forEach(p2 => {
          const dx = p2.x - p.x, dy = p2.y - p.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 130) {
            const lineOp = (1 - dist / 130) * .12 * op;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(124,92,244,${lineOp})`;
            ctx.lineWidth = .5;
            ctx.stroke();
          }
        });
      });

      rbRaf = requestAnimationFrame(draw);
    }

    rbRaf = requestAnimationFrame(draw);
  }

  function stopRbCanvas() {
    if (rbRaf) { cancelAnimationFrame(rbRaf); rbRaf = null; }
    rbParticlesReady = false; // allow re-init on next open
  }

  /* ── Focus trap helpers ── */
  const focusableSelectors = 'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])';
  let lastFocus = null;

  function trapFocus(e) {
    const focusable = [...overlay.querySelectorAll(focusableSelectors)].filter(el => el.offsetParent !== null);
    if (!focusable.length) return;
    const first = focusable[0];
    const last  = focusable[focusable.length - 1];
    if (e.shiftKey && document.activeElement === first) {
      e.preventDefault(); last.focus();
    } else if (!e.shiftKey && document.activeElement === last) {
      e.preventDefault(); first.focus();
    }
  }

  /* ── Open ── */
  function openRecruiter(fromEl) {
    overlay.classList.add('is-open');
    overlay.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    lastFocus = fromEl || document.activeElement;

    if (navBtn)    navBtn.setAttribute('aria-expanded', 'true');
    if (heroBtn)   heroBtn.setAttribute('aria-expanded', 'true');
    if (mobileBtn) mobileBtn.setAttribute('aria-expanded', 'true');

    // Spin up the canvas
    initRbCanvas();

    // Stack item stagger via JS (extra polish on top of CSS)
    const items = overlay.querySelectorAll('.rb-stack-item');
    items.forEach((item, i) => {
      item.style.opacity = '0';
      item.style.transform = 'translateY(12px)';
      setTimeout(() => {
        item.style.transition = 'opacity .4s ease, transform .4s cubic-bezier(0.16,1,0.3,1)';
        item.style.opacity = '1';
        item.style.transform = 'translateY(0)';
      }, 500 + i * 55);
    });

    // Delay focus inside overlay
    setTimeout(() => {
      if (closeBtn) closeBtn.focus();
      overlay.addEventListener('keydown', handleKeyDown);
    }, 200);

    // Increase cursor z-index above the overlay
    const cursorDotEl  = document.getElementById('cursor-dot');
    const cursorRingEl = document.getElementById('cursor-ring');
    if (cursorDotEl) cursorDotEl.style.zIndex = '99999';
    if (cursorRingEl) cursorRingEl.style.zIndex = '99998';

    // Close mobile nav if open
    const navMobileEl = document.getElementById('nav-mobile');
    if (navMobileEl?.classList.contains('is-open')) {
      navMobileEl.classList.remove('is-open');
      navMobileEl.setAttribute('aria-hidden', 'true');
      document.body.classList.remove('nav-open');
    }
  }

  /* ── Close ── */
  function closeRecruiter() {
    overlay.classList.remove('is-open');
    overlay.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    overlay.removeEventListener('keydown', handleKeyDown);

    if (navBtn)    navBtn.setAttribute('aria-expanded', 'false');
    if (heroBtn)   heroBtn.setAttribute('aria-expanded', 'false');
    if (mobileBtn) mobileBtn.setAttribute('aria-expanded', 'false');

    // Reset stack items so stagger plays again next open
    overlay.querySelectorAll('.rb-stack-item').forEach(item => {
      item.style.opacity = '';
      item.style.transform = '';
      item.style.transition = '';
    });

    // Reset cursor z-index
    const cursorDotEl  = document.getElementById('cursor-dot');
    const cursorRingEl = document.getElementById('cursor-ring');
    if (cursorDotEl) cursorDotEl.style.zIndex = '9990';
    if (cursorRingEl) cursorRingEl.style.zIndex = '9989';

    // Stop canvas after transition
    setTimeout(stopRbCanvas, 800);

    if (lastFocus) { try { lastFocus.focus(); } catch(_) {} lastFocus = null; }
  }

  /* ── Key handler ── */
  function handleKeyDown(e) {
    if (e.key === 'Escape') { e.preventDefault(); closeRecruiter(); }
    if (e.key === 'Tab')    trapFocus(e);
  }

  /* ── Bind triggers ── */
  if (navBtn)    navBtn.addEventListener('click',    () => openRecruiter(navBtn));
  if (heroBtn)   heroBtn.addEventListener('click',   () => openRecruiter(heroBtn));
  if (mobileBtn) mobileBtn.addEventListener('click', () => openRecruiter(mobileBtn));
  if (closeBtn)  closeBtn.addEventListener('click',  closeRecruiter);

  // Click outside content (on backdrop) closes
  overlay.addEventListener('click', e => {
    if (e.target === overlay) closeRecruiter();
  });

  // Also hook Escape globally (for when overlay is open)
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && overlay.classList.contains('is-open')) closeRecruiter();
  });

  /* ── Custom cursor hover states ── */
  const cursorDotEl  = document.getElementById('cursor-dot');
  const cursorRingEl = document.getElementById('cursor-ring');
  if (cursorDotEl && cursorRingEl) {
    overlay.querySelectorAll('a, button').forEach(el => {
      el.addEventListener('mouseenter', () => {
        cursorDotEl.classList.add('is-hover');
        cursorRingEl.classList.add('is-hover');
      });
      el.addEventListener('mouseleave', () => {
        cursorDotEl.classList.remove('is-hover');
        cursorRingEl.classList.remove('is-hover');
      });
    });
  }

})();
