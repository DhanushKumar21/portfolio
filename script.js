/* ============================================================
   DHANUSH KUMAR G — Portfolio script.js
   Professional theme — calm, purposeful interactions only
   Handles: navbar, scroll reveals, skill bars,
            stat counters, project filter, contact form
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
  if (navbar) navbar.classList.toggle('scrolled', window.scrollY > 16);
}, { passive: true });

// ── 2. SCROLL REVEAL ──────────────────────────────────────────
const revealEls = document.querySelectorAll('.reveal');
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });
revealEls.forEach(el => revealObserver.observe(el));

// ── 3. SKILL BARS ─────────────────────────────────────────────
const skillBars = document.querySelectorAll('.skill-bar');
const barObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const bar = entry.target;
      const target = bar.dataset.width || 0;
      setTimeout(() => { bar.style.width = target + '%'; }, 150);
      barObserver.unobserve(bar);
    }
  });
}, { threshold: 0.3 });
skillBars.forEach(bar => barObserver.observe(bar));

// ── 4. STAT COUNTERS ──────────────────────────────────────────
function animateCounter(el) {
  const target   = parseInt(el.dataset.target, 10);
  const suffix   = el.dataset.suffix || '';
  const duration = 1200;
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

document.querySelectorAll('.hero-meta-item .num[data-target], .stat-num[data-target]')
  .forEach(el => counterObserver.observe(el));

// ── 5. PROJECT FILTER ─────────────────────────────────────────
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
        setTimeout(() => card.classList.add('visible'), 50);
      } else {
        card.style.display = 'none';
      }
    });
  });
});

// ── 6. CONTACT FORM ───────────────────────────────────────────
const contactForm = document.getElementById('contactForm');
const formMsg     = document.getElementById('formMsg');

if (contactForm) {
  contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const btn = contactForm.querySelector('[type="submit"]');
    const originalText = btn.textContent;
    btn.textContent = 'Sending…';
    btn.disabled = true;

    try {
      const res = await fetch(contactForm.action, {
        method: 'POST',
        body: new FormData(contactForm),
        headers: { 'Accept': 'application/json' }
      });

      if (res.ok) {
        formMsg.style.display    = 'block';
        formMsg.style.background = 'rgba(74,222,128,0.1)';
        formMsg.style.border     = '1px solid rgba(74,222,128,0.3)';
        formMsg.style.color      = '#4ade80';
        formMsg.textContent = 'Message sent — I will get back to you within 24 hours.';
        contactForm.reset();
      } else {
        throw new Error('Server error');
      }
    } catch {
      formMsg.style.display    = 'block';
      formMsg.style.background = 'rgba(239,68,68,0.1)';
      formMsg.style.border     = '1px solid rgba(239,68,68,0.3)';
      formMsg.style.color      = '#f87171';
      formMsg.textContent = 'Something went wrong. Please email me directly.';
    } finally {
      btn.textContent = originalText;
      btn.disabled = false;
    }
  });
}

console.log('Dhanush Kumar G — Game Developer Portfolio');