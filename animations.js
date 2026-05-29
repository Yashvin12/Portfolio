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
     LENIS — SMOOTH SCROLL
  ══════════════════════════════════════════════════ */
  let lenis;
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

  /* ══════════════════════════════════════════════════
     MOUSE STATE
  ══════════════════════════════════════════════════ */
  const mouse = { x: window.innerWidth / 2, y: window.innerHeight / 2, nx: 0, ny: 0 };
  let ringX = mouse.x, ringY = mouse.y;
  let cursorVisible = false;

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

  /* ══════════════════════════════════════════════════
     SCROLL PROGRESS BAR
  ══════════════════════════════════════════════════ */
  function updateScrollProg() {
    const pct = window.scrollY / (document.body.scrollHeight - window.innerHeight);
    scrollProg.style.width = `${pct * 100}%`;
  }
  window.addEventListener('scroll', updateScrollProg, { passive: true });

  /* ══════════════════════════════════════════════════
     NAV — hide on scroll-down / show on scroll-up
  ══════════════════════════════════════════════════ */
  let lastY = 0, navShown = true;
  window.addEventListener('scroll', () => {
    const y = window.scrollY;
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
  }, { passive: true });

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

    const W = window.innerWidth;
    const H = window.innerHeight;

    // — Renderer —
    const renderer = new THREE.WebGLRenderer({ canvas: heroCanvas, antialias: true, alpha: true });
    renderer.setSize(W, H);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0);

    // — Scene & Camera —
    const scene  = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(46, W / H, 0.1, 100);
    camera.position.set(0, 0.5, 5.8);

    // — Lights —
    scene.add(new THREE.AmbientLight(0x0d0526, 2));

    const lViolet = new THREE.PointLight(0x7c5cf4, 5, 14);
    const lCyan   = new THREE.PointLight(0x22d3ee, 3.5, 12);
    const lRose   = new THREE.PointLight(0xff6b9d, 2.5, 10);
    scene.add(lViolet, lCyan, lRose);

    // — Neural Globe group —
    const globeGroup = new THREE.Group();

    // Inner sphere (dark, subtle specular)
    const sphereGeo = new THREE.SphereGeometry(1.2, 36, 36);
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
    const icoGeo   = new THREE.IcosahedronGeometry(1.25, 2);
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
    const ringBase = new THREE.TorusGeometry(1.65, 0.006, 8, 110);
    const ringMat1 = new THREE.MeshBasicMaterial({ color: 0x7c5cf4, transparent: true, opacity: 0.45 });
    const ringMat2 = new THREE.MeshBasicMaterial({ color: 0x22d3ee, transparent: true, opacity: 0.3 });
    const ring1 = new THREE.Mesh(ringBase,                             ringMat1);
    const ring2 = new THREE.Mesh(new THREE.TorusGeometry(1.82, 0.005, 8, 110), ringMat2);
    ring2.rotation.x = Math.PI / 2.3;
    ring2.rotation.y = Math.PI / 6;
    scene.add(ring1, ring2);

    // Particle cloud
    const PC = 1400;
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

    (function tick() {
      requestAnimationFrame(tick);
      const t = clock.getElapsedTime();

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
    })();

    // — Resize —
    window.addEventListener('resize', () => {
      const W = window.innerWidth, H = window.innerHeight;
      camera.aspect = W / H;
      camera.updateProjectionMatrix();
      renderer.setSize(W, H);
    });

  })();

  /* ══════════════════════════════════════════════════
     CANVAS 2D — AURUM (Gold rings + financial chart)
  ══════════════════════════════════════════════════ */
  function initAurumCanvas(canvas) {
    const ctx = canvas.getContext('2d');
    let t = 0, alive = true;

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
      const rings = [
        { r:72, speed:.22, dash:[14,9],  lw:1.6 },
        { r:104,speed:-.16,dash:[22,11], lw:1.1 },
        { r:138,speed:.11, dash:[9,18],  lw:.9  },
        { r:170,speed:-.08,dash:[6,22],  lw:.7  },
      ];
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
      const PTS = 32;
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

      t += 0.008;
      requestAnimationFrame(draw);
    }
    draw();
    return () => { alive = false; };
  }

  /* ══════════════════════════════════════════════════
     CANVAS 2D — NYAAYPATH (Black + Orange nodes/graph)
  ══════════════════════════════════════════════════ */
  function initNyaayCanvas(canvas) {
    const ctx = canvas.getContext('2d');
    let t = 0, alive = true;

    function resize() {
      canvas.width  = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    }
    resize();

    // Nodes
    const nodes = Array.from({ length: 11 }, () => ({
      x:  Math.random() * canvas.width  * .82 + canvas.width  * .09,
      y:  Math.random() * canvas.height * .78 + canvas.height * .11,
      vx: (Math.random() - .5) * .45,
      vy: (Math.random() - .5) * .45,
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
          if (dist > 190) return;

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

      t += 0.016;
      requestAnimationFrame(draw);
    }
    draw();
    return () => { alive = false; };
  }

  /* ══════════════════════════════════════════════════
     CANVAS 2D — SKILLLENS (Cyan neural network layers)
  ══════════════════════════════════════════════════ */
  function initSkillCanvas(canvas) {
    const ctx = canvas.getContext('2d');
    let t = 0, alive = true;

    function resize() {
      canvas.width  = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    }
    resize();

    const LAYERS = [3, 5, 5, 3];

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

      t += 0.016;
      requestAnimationFrame(draw);
    }
    draw();
    return () => { alive = false; };
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
     TECH ORBIT SYSTEM
  ══════════════════════════════════════════════════ */
  function initTechOrbit() {
    const container = document.getElementById('orbit-system');
    if (!container) return;

    const size = container.offsetWidth;
    const RADII   = [size * .182, size * .302, size * .435];
    const SPEEDS  = [.38, .26, .16];

    const techs = [
      // Inner orbit
      { name:'Python',     abbr:'PY',   color:'#3776ab', orbit:0 },
      { name:'React',      abbr:'RE⚛',  color:'#61dafb', orbit:0 },
      { name:'TypeScript', abbr:'TS',   color:'#3178c6', orbit:0 },
      { name:'TensorFlow', abbr:'TF',   color:'#ff6f00', orbit:0 },
      // Middle orbit
      { name:'Next.js',    abbr:'NX',   color:'#ffffff', orbit:1 },
      { name:'Three.js',   abbr:'3D',   color:'#ff6040', orbit:1 },
      { name:'GSAP',       abbr:'GS',   color:'#88ce02', orbit:1 },
      { name:'Node.js',    abbr:'NO',   color:'#339933', orbit:1 },
      { name:'MongoDB',    abbr:'MG',   color:'#47a248', orbit:1 },
      // Outer orbit
      { name:'JavaScript', abbr:'JS',   color:'#f7df1e', orbit:2 },
      { name:'Flask',      abbr:'FL',   color:'#aaaaaa', orbit:2 },
      { name:'MySQL',      abbr:'MY',   color:'#4479a1', orbit:2 },
      { name:'Tailwind',   abbr:'TW',   color:'#06b6d4', orbit:2 },
    ];

    // Orbit rings (visual)
    RADII.forEach(r => {
      const ring = document.createElement('div');
      ring.className = 'orbit-ring';
      ring.style.cssText = `width:${r*2}px;height:${r*2}px;left:calc(50% - ${r}px);top:calc(50% - ${r}px)`;
      container.appendChild(ring);
    });

    // Group by orbit
    const groups = [[], [], []];
    techs.forEach(t => groups[t.orbit].push(t));

    // Create nodes
    const nodes = techs.map(tech => {
      const el = document.createElement('div');
      el.className = 'tech-node';
      el.setAttribute('data-tech', tech.name);
      el.style.color       = tech.color;
      el.style.borderColor = tech.color + '55';

      const label   = document.createElement('span');
      label.textContent = tech.abbr;

      const tooltip = document.createElement('div');
      tooltip.className   = 'tech-tooltip';
      tooltip.textContent = tech.name;

      el.append(label, tooltip);
      container.appendChild(el);

      return {
        ...tech,
        el,
        angle: Math.random() * Math.PI * 2,
      };
    });

    function animate() {
      nodes.forEach(n => {
        n.angle += SPEEDS[n.orbit] * 0.012;
        const r = RADII[n.orbit];
        const x = Math.cos(n.angle) * r;
        const y = Math.sin(n.angle) * r;
        n.el.style.left = `calc(50% + ${x}px)`;
        n.el.style.top  = `calc(50% + ${y}px)`;
      });
      requestAnimationFrame(animate);
    }
    animate();
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
      { cmd: 'git log --oneline | wc -l',     out: '→ 1200+ commits' },
      { cmd: 'ls ~/repos/ | wc -l',           out: '→ 25+ repositories' },
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

  // Tech orbit — init when section enters
  ScrollTrigger.create({
    trigger: '#techstack',
    start:   'top 75%',
    once:    true,
    onEnter() { initTechOrbit(); },
  });

  // Social section — terminal + contribution canvas
  ScrollTrigger.create({
    trigger: '#social',
    start:   'top 80%',
    once:    true,
    onEnter() {
      initTerminal();
      const cnv = document.getElementById('contrib-canvas');
      if (cnv) initContribCanvas(cnv);
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

  addMagnetic(ctaEmail, 0.32);
  addMagnetic(resumeBtn, 0.32);
  addMagnetic(document.getElementById('cta-work'), 0.28);

  /* ══════════════════════════════════════════════════
     PROJECT CARD — mouse-follow radial glow
  ══════════════════════════════════════════════════ */
  document.querySelectorAll('.project-scene').forEach(card => {
    card.addEventListener('mousemove', e => {
      const r = card.getBoundingClientRect();
      card.style.setProperty('--mx', `${e.clientX - r.left}px`);
      card.style.setProperty('--my', `${e.clientY - r.top}px`);
    });
  });

  /* ══════════════════════════════════════════════════
     MARQUEE — pause on hover
  ══════════════════════════════════════════════════ */
  const mTrack = document.querySelector('.marquee-track');
  if (mTrack) {
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

  setInterval(() => {
    if (Math.random() > .65) { glitch(heroN1); glitch(heroN2); }
  }, 6200);

}); // end DOMContentLoaded
