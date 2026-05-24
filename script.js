/* ============================================================
   DHANUSH KUMAR G — Portfolio script.js
   Handles: navbar, scroll reveals, skill bars,
            stat counters, project filter, contact form
   ============================================================ */

// ── 1. NAVBAR MOBILE TOGGLE ──────────────────────────────────
const navToggle = document.getElementById('navToggle');
const navLinks  = document.getElementById('navLinks');

if (navToggle) {
  navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('open');
  });
}

// Close nav when a link is clicked (mobile)
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
  });
});

// ── 2. SCROLL REVEAL ─────────────────────────────────────────
const revealEls = document.querySelectorAll('.reveal');

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target); // animate once
    }
  });
}, { threshold: 0.12 });

revealEls.forEach(el => revealObserver.observe(el));

// ── 3. SKILL BAR ANIMATION ───────────────────────────────────
// Each .skill-bar has data-width="85" — animate to that width
// when it enters the viewport

const skillBars = document.querySelectorAll('.skill-bar');

const barObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const bar = entry.target;
      const target = bar.dataset.width || 0;
      bar.style.width = target + '%';
      barObserver.unobserve(bar);
    }
  });
}, { threshold: 0.3 });

skillBars.forEach(bar => barObserver.observe(bar));

// ── 4. STAT COUNTER ANIMATION ────────────────────────────────
// .stat-num elements with data-target="N" count up on reveal

const statNums = document.querySelectorAll('.stat-num[data-target]');

function animateCounter(el) {
  const target = parseInt(el.dataset.target, 10);
  const duration = 1400; // ms
  const start = performance.now();

  function tick(now) {
    const progress = Math.min((now - start) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
    el.textContent = Math.round(eased * target);
    if (progress < 1) requestAnimationFrame(tick);
    else el.textContent = target + (el.dataset.suffix || '');
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

statNums.forEach(el => counterObserver.observe(el));

// ── 5. PROJECT FILTER TABS ───────────────────────────────────
// Tabs with data-filter="all|unreal|android" filter cards by data-cat

const filterTabs  = document.querySelectorAll('.filter-tab');
const projectCards = document.querySelectorAll('.project-card[data-cat]');

filterTabs.forEach(tab => {
  tab.addEventListener('click', () => {
    // Update active tab
    filterTabs.forEach(t => t.classList.remove('active'));
    tab.classList.add('active');

    const filter = tab.dataset.filter;

    projectCards.forEach(card => {
      if (filter === 'all' || card.dataset.cat === filter) {
        card.style.display = '';
        // re-trigger reveal if not yet visible
        card.classList.remove('visible');
        setTimeout(() => card.classList.add('visible'), 50);
      } else {
        card.style.display = 'none';
      }
    });
  });
});

// ── 6. PROJECT CARD GLOW ON HOVER ────────────────────────────
document.querySelectorAll('.project-card').forEach(card => {
  card.addEventListener('mouseover', () => {
    card.style.boxShadow = '0 0 30px rgba(255,106,0,0.3), 0 0 60px rgba(255,106,0,0.1)';
  });
  card.addEventListener('mouseout', () => {
    card.style.boxShadow = '';
  });
});

// ── 7. CONTACT FORM (Formspree or native fetch) ───────────────
/*
  If you're using Formspree:
    1. Create a free account at https://formspree.io
    2. Create a new form — you'll get an ID like "xpwzabcd"
    3. Replace YOUR_FORMSPREE_ID in contact.html with that ID
    4. The form will POST to Formspree and emails will arrive in your inbox.

  The handler below intercepts the submit, POSTs via fetch, and shows
  a success/error message without a full page reload.
*/
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
        formMsg.style.background = 'rgba(0,229,255,0.08)';
        formMsg.style.border = '1px solid rgba(0,229,255,0.3)';
        formMsg.style.color = 'var(--cyan)';
        formMsg.textContent = '✓ Message sent! I will get back to you within 24 hours.';
        contactForm.reset();
      } else {
        throw new Error('Server error');
      }
    } catch {
      formMsg.style.display = 'block';
      formMsg.style.background = 'rgba(255,60,60,0.08)';
      formMsg.style.border = '1px solid rgba(255,60,60,0.3)';
      formMsg.style.color = '#ff6b6b';
      formMsg.textContent = '✗ Something went wrong. Please email me directly.';
    } finally {
      btn.textContent = 'Send Message →';
      btn.disabled = false;
    }
  });
}

// ── 8. NAVBAR SCROLL SHADOW ──────────────────────────────────
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
  if (window.scrollY > 10) {
    navbar.style.boxShadow = '0 4px 24px rgba(0,0,0,0.5)';
  } else {
    navbar.style.boxShadow = 'none';
  }
}, { passive: true });

// ── 9. CURSOR GLOW (desktop only) ───────────────────────────
if (window.matchMedia('(pointer: fine)').matches) {
  const cursor = document.createElement('div');
  cursor.style.cssText = `
    position: fixed;
    width: 12px; height: 12px;
    background: rgba(255,106,0,0.6);
    border-radius: 50%;
    pointer-events: none;
    z-index: 99999;
    transform: translate(-50%, -50%);
    transition: transform 0.1s, opacity 0.3s;
    mix-blend-mode: screen;
  `;
  document.body.appendChild(cursor);

  const trail = document.createElement('div');
  trail.style.cssText = `
    position: fixed;
    width: 30px; height: 30px;
    border: 1px solid rgba(255,106,0,0.25);
    border-radius: 50%;
    pointer-events: none;
    z-index: 99998;
    transform: translate(-50%, -50%);
    transition: left 0.15s ease, top 0.15s ease, opacity 0.3s;
  `;
  document.body.appendChild(trail);

  let mx = 0, my = 0;
  document.addEventListener('mousemove', e => {
    mx = e.clientX; my = e.clientY;
    cursor.style.left = mx + 'px';
    cursor.style.top  = my + 'px';
    trail.style.left  = mx + 'px';
    trail.style.top   = my + 'px';
  });

  // Grow on clickable elements
  document.querySelectorAll('a, button, .project-card, .skill-item').forEach(el => {
    el.addEventListener('mouseenter', () => {
      cursor.style.transform = 'translate(-50%,-50%) scale(2)';
      trail.style.transform  = 'translate(-50%,-50%) scale(1.4)';
      trail.style.borderColor = 'rgba(255,106,0,0.5)';
    });
    el.addEventListener('mouseleave', () => {
      cursor.style.transform = 'translate(-50%,-50%) scale(1)';
      trail.style.transform  = 'translate(-50%,-50%) scale(1)';
      trail.style.borderColor = 'rgba(255,106,0,0.25)';
    });
  });
}

console.log('%cDHANUSH KUMAR G — Game Developer Portfolio', 'color:#ff6a00;font-family:monospace;font-size:14px;font-weight:bold;');
console.log('%cBuilt with Unreal Engine passion ⚡', 'color:#00e5ff;font-family:monospace;');