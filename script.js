/* ============================================================
   DHANUSH KUMAR G — Portfolio script.js
   Ghost of Tsushima / Autumn Warriors Theme
   Features: autumn leaves, fire embers, star field,
             scroll reveals, skill bars, stat counters,
             project filter, contact form, navbar, cursor
   ============================================================ */

// ── 1. NAVBAR ────────────────────────────────────────────────
const navToggle = document.getElementById('navToggle');
const navLinks  = document.getElementById('navLinks');
const navbar    = document.getElementById('navbar');

if (navToggle) {
  navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('open');
  });
}
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => navLinks.classList.remove('open'));
});

window.addEventListener('scroll', () => {
  if (navbar) {
    navbar.classList.toggle('scrolled', window.scrollY > 20);
  }
}, { passive: true });

// ── 2. AUTUMN LEAVES CANVAS ──────────────────────────────────
(function initLeaves() {
  const canvas = document.getElementById('leaf-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  let W = window.innerWidth;
  let H = window.innerHeight;
  canvas.width  = W;
  canvas.height = H;

  window.addEventListener('resize', () => {
    W = canvas.width  = window.innerWidth;
    H = canvas.height = window.innerHeight;
  });

  // Leaf shape paths — 4 variants
  function drawLeaf(ctx, x, y, size, angle, opacity, color) {
    ctx.save();
    ctx.translate(x, y);
    ctx.rotate(angle);
    ctx.globalAlpha = opacity;
    ctx.fillStyle = color;
    ctx.beginPath();
    // Simple maple-leaf-like shape using bezier
    ctx.moveTo(0, -size);
    ctx.bezierCurveTo( size * 0.6, -size * 0.6,  size,  0,  0,  size * 0.8);
    ctx.bezierCurveTo(-size, 0, -size * 0.6, -size * 0.6, 0, -size);
    ctx.fill();
    // Stem
    ctx.strokeStyle = color;
    ctx.globalAlpha = opacity * 0.6;
    ctx.lineWidth = size * 0.1;
    ctx.beginPath();
    ctx.moveTo(0, size * 0.8);
    ctx.lineTo(0, size * 1.4);
    ctx.stroke();
    ctx.restore();
  }

  function drawMapleLeaf(ctx, x, y, size, angle, opacity, color) {
    ctx.save();
    ctx.translate(x, y);
    ctx.rotate(angle);
    ctx.globalAlpha = opacity;
    ctx.fillStyle = color;
    ctx.beginPath();
    // Simplified 5-point maple leaf
    const pts = [];
    for (let i = 0; i < 10; i++) {
      const a  = (i / 10) * Math.PI * 2 - Math.PI / 2;
      const r  = (i % 2 === 0) ? size : size * 0.4;
      pts.push([Math.cos(a) * r, Math.sin(a) * r]);
    }
    ctx.moveTo(pts[0][0], pts[0][1]);
    pts.forEach(([px, py]) => ctx.lineTo(px, py));
    ctx.closePath();
    ctx.fill();
    ctx.restore();
  }

  // Leaf colors — autumn palette
  const leafColors = [
    'rgba(192,57,43,VAL)',
    'rgba(224,85,69,VAL)',
    'rgba(201,152,74,VAL)',
    'rgba(212,135,60,VAL)',
    'rgba(180,80,50,VAL)',
    'rgba(232,164,154,VAL)',
    'rgba(240,190,100,VAL)',
    'rgba(160,60,40,VAL)',
  ];

  function rndColor(op) {
    return leafColors[Math.floor(Math.random() * leafColors.length)]
           .replace('VAL', op.toFixed(2));
  }

  const NUM_LEAVES = 22;
  const leaves = [];

  for (let i = 0; i < NUM_LEAVES; i++) {
    leaves.push({
      x:      Math.random() * W,
      y:      Math.random() * H - H,
      size:   6 + Math.random() * 12,
      angle:  Math.random() * Math.PI * 2,
      rotSpd: (Math.random() - 0.5) * 0.04,
      vx:     (Math.random() - 0.5) * 1.2,
      vy:     0.6 + Math.random() * 1.2,
      sway:   0.008 + Math.random() * 0.012,
      swayT:  Math.random() * 100,
      opacity: 0.35 + Math.random() * 0.5,
      color:  rndColor(1),
      type:   Math.random() > 0.5 ? 'maple' : 'simple',
    });
  }

  function animateLeaves() {
    ctx.clearRect(0, 0, W, H);

    leaves.forEach(l => {
      l.swayT += l.sway;
      l.x     += l.vx + Math.sin(l.swayT) * 0.8;
      l.y     += l.vy;
      l.angle += l.rotSpd;

      if (l.y > H + 30) {
        l.y = -20;
        l.x = Math.random() * W;
        l.color = rndColor(1);
      }
      if (l.x > W + 30) l.x = -10;
      if (l.x < -30)    l.x = W + 10;

      if (l.type === 'maple') {
        drawMapleLeaf(ctx, l.x, l.y, l.size, l.angle, l.opacity, l.color);
      } else {
        drawLeaf(ctx, l.x, l.y, l.size, l.angle, l.opacity, l.color);
      }
    });

    requestAnimationFrame(animateLeaves);
  }

  animateLeaves();
})();

// ── 3. STAR FIELD (hero only) ─────────────────────────────────
(function initStars() {
  const sf = document.getElementById('starField');
  if (!sf) return;
  for (let i = 0; i < 40; i++) {
    const star = document.createElement('div');
    star.className = 'star';
    const size = 1 + Math.random() * 2;
    star.style.cssText = `
      width:${size}px; height:${size}px;
      top:${Math.random() * 70}%;
      left:${Math.random() * 100}%;
      --op:${0.2 + Math.random() * 0.5};
      --dur:${2 + Math.random() * 4}s;
      --delay:${Math.random() * 4}s;
    `;
    sf.appendChild(star);
  }
})();

// ── 4. FIRE EMBERS (hero only) ────────────────────────────────
(function initEmbers() {
  const container = document.getElementById('embersContainer');
  if (!container) return;
  container.style.cssText = 'position:absolute;inset:0;pointer-events:none;overflow:hidden;';

  function spawnEmber() {
    const e = document.createElement('div');
    e.className = 'ember';
    const size = 2 + Math.random() * 3;
    const dx   = (Math.random() - 0.5) * 40;
    e.style.cssText = `
      width:${size}px; height:${size}px;
      background:${Math.random() > 0.5 ? 'var(--crimson)' : 'var(--gold)'};
      left:${20 + Math.random() * 60}%;
      bottom:${10 + Math.random() * 20}%;
      --dur:${3 + Math.random() * 4}s;
      --delay:${Math.random() * 5}s;
      --dx:${dx}px;
      box-shadow:0 0 ${size * 2}px currentColor;
    `;
    container.appendChild(e);
    setTimeout(() => e.remove(), (3 + Math.random() * 4 + Math.random() * 5) * 1000);
  }

  setInterval(spawnEmber, 400);
})();

// ── 5. SCROLL REVEAL ──────────────────────────────────────────
const revealEls = document.querySelectorAll('.reveal');
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      // Stagger siblings slightly
      const siblings = Array.from(entry.target.parentElement?.querySelectorAll('.reveal') || []);
      const idx = siblings.indexOf(entry.target);
      setTimeout(() => {
        entry.target.classList.add('visible');
      }, Math.min(idx * 80, 400));
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

revealEls.forEach(el => revealObserver.observe(el));

// ── 6. SKILL BARS ─────────────────────────────────────────────
const skillBars = document.querySelectorAll('.skill-bar');
const barObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const bar = entry.target;
      const target = bar.dataset.width || 0;
      // Small delay so the reveal animation plays first
      setTimeout(() => { bar.style.width = target + '%'; }, 300);
      barObserver.unobserve(bar);
    }
  });
}, { threshold: 0.3 });
skillBars.forEach(bar => barObserver.observe(bar));

// ── 7. STAT COUNTERS ──────────────────────────────────────────
function animateCounter(el) {
  const target   = parseInt(el.dataset.target, 10);
  const suffix   = el.dataset.suffix || '';
  const duration = 1600;
  const start    = performance.now();

  function tick(now) {
    const progress = Math.min((now - start) / duration, 1);
    const eased    = 1 - Math.pow(1 - progress, 3);
    el.textContent = Math.round(eased * target);
    if (progress < 1) requestAnimationFrame(tick);
    else el.textContent = target + suffix;
  }
  requestAnimationFrame(tick);
}

const counterObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      animateCounter(entry.target);
      counterObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.5 });

document.querySelectorAll('.stat-num[data-target]')
  .forEach(el => counterObserver.observe(el));

// ── 8. PROJECT FILTER ─────────────────────────────────────────
const filterTabs   = document.querySelectorAll('.filter-tab');
const projectCards = document.querySelectorAll('.project-card[data-cat]');

filterTabs.forEach(tab => {
  tab.addEventListener('click', () => {
    filterTabs.forEach(t => t.classList.remove('active'));
    tab.classList.add('active');
    const filter = tab.dataset.filter;

    projectCards.forEach(card => {
      if (filter === 'all' || card.dataset.cat === filter) {
        card.style.display = '';
        card.classList.remove('visible');
        setTimeout(() => card.classList.add('visible'), 60);
      } else {
        card.style.display = 'none';
      }
    });
  });
});

// ── 9. PROJECT CARD HOVER GLOW ────────────────────────────────
document.querySelectorAll('.project-card').forEach(card => {
  card.addEventListener('mouseover', () => {
    card.style.boxShadow = '0 0 30px rgba(192,57,43,0.25), 0 0 60px rgba(192,57,43,0.08)';
  });
  card.addEventListener('mouseout', () => {
    card.style.boxShadow = '';
  });
});

// ── 10. CONTACT FORM ──────────────────────────────────────────
const contactForm = document.getElementById('contactForm');
const formMsg     = document.getElementById('formMsg');

if (contactForm) {
  contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const btn = contactForm.querySelector('[type="submit"]');
    btn.textContent = 'Sending…';
    btn.disabled = true;

    try {
      const res = await fetch(contactForm.action, {
        method: 'POST',
        body: new FormData(contactForm),
        headers: { 'Accept': 'application/json' }
      });
      if (res.ok) {
        formMsg.style.display = 'block';
        formMsg.style.background  = 'rgba(74,222,128,0.08)';
        formMsg.style.border      = '1px solid rgba(74,222,128,0.3)';
        formMsg.style.color       = '#4ade80';
        formMsg.textContent = '✓ Message sent! I will get back to you within 24 hours.';
        contactForm.reset();
      } else { throw new Error(); }
    } catch {
      formMsg.style.display = 'block';
      formMsg.style.background  = 'rgba(192,57,43,0.08)';
      formMsg.style.border      = '1px solid rgba(192,57,43,0.4)';
      formMsg.style.color       = 'var(--blush)';
      formMsg.textContent = '✗ Something went wrong. Please email me directly.';
    } finally {
      btn.textContent = 'Send Message →';
      btn.disabled = false;
    }
  });
}

// ── 11. CURSOR GLOW (desktop) ─────────────────────────────────
if (window.matchMedia('(pointer: fine)').matches) {
  const cursor = document.createElement('div');
  cursor.style.cssText = `
    position:fixed; width:10px; height:10px;
    background:rgba(192,57,43,0.7);
    border-radius:50%;
    pointer-events:none; z-index:99999;
    transform:translate(-50%,-50%);
    transition:transform 0.1s;
    mix-blend-mode:screen;
  `;
  document.body.appendChild(cursor);

  const trail = document.createElement('div');
  trail.style.cssText = `
    position:fixed; width:28px; height:28px;
    border:1px solid rgba(192,57,43,0.25);
    border-radius:50%;
    pointer-events:none; z-index:99998;
    transform:translate(-50%,-50%);
    transition:left 0.12s ease, top 0.12s ease;
  `;
  document.body.appendChild(trail);

  document.addEventListener('mousemove', e => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top  = e.clientY + 'px';
    trail.style.left  = e.clientX + 'px';
    trail.style.top   = e.clientY + 'px';
  });

  document.querySelectorAll('a, button, .project-card, .skill-item').forEach(el => {
    el.addEventListener('mouseenter', () => {
      cursor.style.transform = 'translate(-50%,-50%) scale(2.5)';
      cursor.style.background = 'rgba(201,152,74,0.8)';
      trail.style.borderColor = 'rgba(201,152,74,0.4)';
    });
    el.addEventListener('mouseleave', () => {
      cursor.style.transform = 'translate(-50%,-50%) scale(1)';
      cursor.style.background = 'rgba(192,57,43,0.7)';
      trail.style.borderColor = 'rgba(192,57,43,0.25)';
    });
  });
}

// ── 12. PARALLAX HERO BG (subtle) ────────────────────────────
const heroBg = document.querySelector('.hero-bg');
if (heroBg) {
  window.addEventListener('scroll', () => {
    const y = window.scrollY;
    heroBg.style.transform = `translateY(${y * 0.25}px)`;
  }, { passive: true });
}

// ── 13. PARTICLE CLICK BURST ──────────────────────────────────
document.addEventListener('click', (e) => {
  const colors = ['var(--crimson)', 'var(--gold)', 'var(--blush)', 'var(--crimson-light)'];
  for (let i = 0; i < 8; i++) {
    const p = document.createElement('div');
    const angle = (i / 8) * Math.PI * 2;
    const dist  = 30 + Math.random() * 40;
    const size  = 3 + Math.random() * 4;
    p.style.cssText = `
      position:fixed;
      left:${e.clientX}px; top:${e.clientY}px;
      width:${size}px; height:${size}px;
      border-radius:50%;
      background:${colors[Math.floor(Math.random() * colors.length)]};
      pointer-events:none;
      z-index:99997;
      transform:translate(-50%,-50%);
      transition:all 0.5s ease-out;
      opacity:1;
    `;
    document.body.appendChild(p);
    requestAnimationFrame(() => {
      p.style.left    = `${e.clientX + Math.cos(angle) * dist}px`;
      p.style.top     = `${e.clientY + Math.sin(angle) * dist}px`;
      p.style.opacity = '0';
      p.style.transform = 'translate(-50%,-50%) scale(0)';
    });
    setTimeout(() => p.remove(), 500);
  }
});

// ── 14. PAGE LOAD ANIMATION ───────────────────────────────────
window.addEventListener('load', () => {
  document.body.style.opacity = '0';
  document.body.style.transition = 'opacity 0.6s ease';
  requestAnimationFrame(() => {
    document.body.style.opacity = '1';
  });
});

// ── CONSOLE SIGNATURE ────────────────────────────────────────
console.log('%c⚔ DHANUSH KUMAR G — Game Developer Portfolio', 'color:#c0392b;font-family:serif;font-size:14px;font-weight:bold;');
console.log('%c🍂 Ghost of Tsushima Autumn Theme', 'color:#c9984a;font-family:serif;');