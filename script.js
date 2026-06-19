/* ============================================================
   DHANUSH KUMAR G — Portfolio script.js
   Handles: mobile nav, reveal, skill bars, stat counters,
            project filter, gallery thumbnails, lightbox,
            read-more toggles, contact form
   ============================================================ */

// ── MOBILE NAV ────────────────────────────────────────────────
const tbToggle = document.getElementById('tbToggle');
const mobNav   = document.getElementById('mobNav');
if (tbToggle) {
  tbToggle.addEventListener('click', () => mobNav.classList.toggle('open'));
}
document.querySelectorAll('.mob-nav a').forEach(a => {
  a.addEventListener('click', () => mobNav.classList.remove('open'));
});

// ── SCROLL REVEAL ─────────────────────────────────────────────
const revealObs = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      revealObs.unobserve(e.target);
    }
  });
}, { threshold: 0.1 });
document.querySelectorAll('.reveal').forEach(el => revealObs.observe(el));

// ── SKILL BARS (both .sk-bar and .sp-bar) ─────────────────────
const barObs = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.style.width = (e.target.dataset.width || 0) + '%';
      barObs.unobserve(e.target);
    }
  });
}, { threshold: 0.3 });
document.querySelectorAll('.sk-bar, .sp-bar').forEach(b => barObs.observe(b));

// ── STAT COUNTERS ─────────────────────────────────────────────
function countUp(el) {
  const target = parseInt(el.dataset.target, 10);
  const suffix = el.dataset.suffix || '';
  const dur    = 1200;
  const t0     = performance.now();
  (function tick(now) {
    const p = Math.min((now - t0) / dur, 1);
    el.textContent = Math.round((1 - Math.pow(1 - p, 3)) * target);
    if (p < 1) requestAnimationFrame(tick);
    else el.textContent = target + suffix;
  })(t0);
}
const cntObs = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) { countUp(e.target); cntObs.unobserve(e.target); }
  });
}, { threshold: 0.5 });
document.querySelectorAll('.stat-num[data-target]').forEach(el => cntObs.observe(el));

// ── PROJECT FILTER RAIL ───────────────────────────────────────
const frBtns  = document.querySelectorAll('.fr-btn');
const pCards  = document.querySelectorAll('.proj-card[data-cat]');

frBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    frBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const f = btn.dataset.filter;
    pCards.forEach(c => {
      const show = f === 'all' || c.dataset.cat === f;
      c.style.display = show ? '' : 'none';
      if (show) {
        c.classList.remove('visible');
        setTimeout(() => c.classList.add('visible'), 50);
      }
    });
  });
});

// ── GALLERY THUMBNAILS ────────────────────────────────────────
// When a thumbnail is clicked, swap the main gallery image
// and update the counter badge.
document.querySelectorAll('.gal-thumb').forEach(thumb => {
  thumb.addEventListener('click', () => {
    const project = thumb.dataset.project;
    const src     = thumb.dataset.src;
    const idx     = parseInt(thumb.dataset.index, 10);

    // Update active thumb
    document.querySelectorAll(`.gal-thumb[data-project="${project}"]`).forEach(t => t.classList.remove('active'));
    thumb.classList.add('active');

    // Swap main image
    const main = document.querySelector(`.gallery-main[data-project="${project}"]`);
    if (!main) return;

    // Check if an <img> exists inside; if so, update src
    let img = main.querySelector('img');
    if (img) {
      img.style.opacity = '0';
      setTimeout(() => { img.src = src; img.style.opacity = '1'; }, 150);
    }
    // If only a placeholder exists, create an img element
    else {
      const ph = main.querySelector('.media-ph');
      if (ph) ph.style.display = 'none';
      img = document.createElement('img');
      img.src = src;
      img.alt = 'Project screenshot';
      img.style.cssText = 'width:100%;height:100%;object-fit:cover;display:block;';
      main.appendChild(img);
    }

    // Update counter badge
    const totalThumbs = document.querySelectorAll(`.gal-thumb[data-project="${project}"]`).length;
    const countEl = main.querySelector('.gal-count');
    if (countEl) countEl.textContent = `${idx + 1} / ${totalThumbs}`;
  });
});

// ── LIGHTBOX ──────────────────────────────────────────────────
const lbOverlay = document.getElementById('lbOverlay');
const lbImg     = document.getElementById('lbImg');
const lbCaption = document.getElementById('lbCaption');
const lbClose   = document.getElementById('lbClose');
const lbPrev    = document.getElementById('lbPrev');
const lbNext    = document.getElementById('lbNext');

let lbImages = [];  // all image srcs for current project
let lbIndex  = 0;

function openLightbox(src, allSrcs, idx) {
  lbImages = allSrcs;
  lbIndex  = idx;
  lbImg.src = src;
  lbCaption.textContent = `${idx + 1} / ${allSrcs.length}`;
  lbOverlay.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeLightbox() {
  lbOverlay.classList.remove('open');
  document.body.style.overflow = '';
}

function lbNavigate(dir) {
  lbIndex = (lbIndex + dir + lbImages.length) % lbImages.length;
  lbImg.style.opacity = '0';
  setTimeout(() => {
    lbImg.src = lbImages[lbIndex];
    lbCaption.textContent = `${lbIndex + 1} / ${lbImages.length}`;
    lbImg.style.opacity = '1';
  }, 120);
}

// Click main gallery image to open lightbox
document.querySelectorAll('.gallery-main').forEach(main => {
  main.addEventListener('click', () => {
    const img = main.querySelector('img');
    if (!img) return;
    const project = main.dataset.project;
    const thumbs  = document.querySelectorAll(`.gal-thumb[data-project="${project}"]`);
    const allSrcs = Array.from(thumbs).map(t => t.dataset.src);
    const idx     = Array.from(thumbs).findIndex(t => t.classList.contains('active'));
    openLightbox(img.src, allSrcs, idx >= 0 ? idx : 0);
  });
});

if (lbClose) lbClose.addEventListener('click', closeLightbox);
if (lbPrev)  lbPrev.addEventListener('click', () => lbNavigate(-1));
if (lbNext)  lbNext.addEventListener('click', () => lbNavigate(1));
if (lbOverlay) {
  lbOverlay.addEventListener('click', e => { if (e.target === lbOverlay) closeLightbox(); });
}
document.addEventListener('keydown', e => {
  if (!lbOverlay || !lbOverlay.classList.contains('open')) return;
  if (e.key === 'Escape') closeLightbox();
  if (e.key === 'ArrowLeft')  lbNavigate(-1);
  if (e.key === 'ArrowRight') lbNavigate(1);
});

// ── READ MORE TOGGLES ─────────────────────────────────────────
document.querySelectorAll('.read-more').forEach(btn => {
  btn.addEventListener('click', () => {
    const card     = btn.closest('.proj-body');
    const longDesc = card.querySelector('.proj-desc-long');
    if (!longDesc) return;
    const isOpen = longDesc.classList.toggle('open');
    btn.textContent = isOpen ? 'Read less ↑' : 'Read more ↓';
  });
});

// ── CONTACT FORM ──────────────────────────────────────────────
const contactForm = document.getElementById('contactForm');
const formMsg     = document.getElementById('formMsg');

if (contactForm) {
  contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const btn  = contactForm.querySelector('[type="submit"]');
    const orig = btn.textContent;
    btn.textContent = 'Sending…';
    btn.disabled    = true;
    try {
      const res = await fetch(contactForm.action, {
        method: 'POST',
        body: new FormData(contactForm),
        headers: { 'Accept': 'application/json' }
      });
      if (res.ok) {
        formMsg.style.display    = 'block';
        formMsg.style.background = 'rgba(74,222,128,.1)';
        formMsg.style.border     = '1px solid rgba(74,222,128,.3)';
        formMsg.style.color      = '#4ade80';
        formMsg.textContent      = 'Message sent — I\'ll get back to you within 24 hours.';
        contactForm.reset();
      } else throw new Error();
    } catch {
      formMsg.style.display    = 'block';
      formMsg.style.background = 'rgba(239,68,68,.1)';
      formMsg.style.border     = '1px solid rgba(239,68,68,.3)';
      formMsg.style.color      = '#f87171';
      formMsg.textContent      = 'Something went wrong — please email me directly.';
    } finally {
      btn.textContent = orig;
      btn.disabled    = false;
    }
  });
}