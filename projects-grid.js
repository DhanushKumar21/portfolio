/* ============================================================
   projects-grid.js
   Renders the project list on projects.html from the PROJECTS
   array (projects-data.js) as a vertical, one-by-one stack.
   Each card has:
     - An "Images" / "Video" toggle (only shown if both exist)
     - A swipeable image carousel (arrows, dots, captions)
     - A video panel with its own tabs if there are multiple videos
   ============================================================ */

(function () {
  const list = document.getElementById('projectsGrid');
  if (!list || typeof PROJECTS === 'undefined') return;

  const ENGINE_META = {
    unreal:  { badgeClass: 'badge-ue' },
    unity:   { badgeClass: 'badge-unity' },
    android: { badgeClass: 'badge-android' },
  };

  function cardHtml(project, cardIndex) {
    const meta = ENGINE_META[project.engine] || ENGINE_META.unreal;
    const images = project.images || [];
    const videos = project.videos || [];
    const hasImages = images.length > 0;
    const hasVideos = videos.length > 0;
    const uid = `pc${cardIndex}`;

    const tagsHtml = (project.tags || []).slice(0, 6)
      .map(t => `<span class="tag">${t}</span>`).join('');

    // ── Mode toggle (only if both images and video exist) ──
    const modeTabsHtml = (hasImages && hasVideos) ? `
      <div class="media-mode-tabs">
        <button class="media-mode-tab active" data-mode="images" data-card="${uid}">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><path d="M21 15l-5-5L5 21"/></svg>
          <span>Images</span>
        </button>
        <button class="media-mode-tab" data-mode="video" data-card="${uid}">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="5 3 19 12 5 21 5 3"/></svg>
          <span>Video</span>
        </button>
      </div>` : '';

    // ── Image carousel panel ──
    const carouselHtml = hasImages ? `
      <div class="media-panel active" data-panel="images" data-card="${uid}">
        <div class="carousel" data-carousel="${uid}">
          <span class="carousel-counter" data-counter="${uid}">1 / ${images.length}</span>
          <div class="carousel-track" data-track="${uid}" style="width:${images.length * 100}%;">
            ${images.map(img => `
              <div class="carousel-slide" style="width:${100 / images.length}%;">
                <img src="${img.src}" alt="${img.caption || project.title}" loading="lazy">
                ${img.caption ? `<div class="carousel-caption">${img.caption}</div>` : ''}
              </div>`).join('')}
          </div>
          ${images.length > 1 ? `
            <div class="carousel-arrow prev" data-arrow="prev" data-card="${uid}">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="18" height="18"><path d="M15 18l-6-6 6-6"/></svg>
            </div>
            <div class="carousel-arrow next" data-arrow="next" data-card="${uid}">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="18" height="18"><path d="M9 18l6-6-6-6"/></svg>
            </div>
            <div class="carousel-dots" data-dots="${uid}">
              ${images.map((_, i) => `<div class="carousel-dot${i === 0 ? ' active' : ''}" data-dot="${i}" data-card="${uid}"></div>`).join('')}
            </div>` : ''}
        </div>
      </div>` : '';

    // ── Video panel (with inner tabs if multiple videos) ──
    const videoPanelHtml = hasVideos ? `
      <div class="media-panel${!hasImages ? ' active' : ''}" data-panel="video" data-card="${uid}">
        ${videos.length > 1 ? `
          <div class="video-panel-tabs" data-video-tabs="${uid}">
            ${videos.map((v, i) => `<button class="video-panel-tab${i === 0 ? ' active' : ''}" data-vindex="${i}" data-card="${uid}">${v.title}</button>`).join('')}
          </div>` : ''}
        <div class="video-panel">
          <div class="yt-embed-wrap">
            <iframe data-video-frame="${uid}" src="https://www.youtube.com/embed/${videos[0].id}" title="${videos[0].title}"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin" allowfullscreen loading="lazy"></iframe>
          </div>
        </div>
      </div>` : '';

    const mediaBlock = (hasImages || hasVideos) ? `
      <div class="project-card-media">
        <span class="project-engine-badge ${meta.badgeClass}">${project.engineLabel}</span>
        ${modeTabsHtml}
        ${carouselHtml}
        ${videoPanelHtml}
      </div>` : '';

    return `
    <div class="project-card reveal" data-cat="${project.engine}">
      ${mediaBlock}

      <div class="project-card-body">
        <div class="project-meta">
          <span class="project-type">${project.type || ''}</span>
          <span class="project-year">${project.year || ''}</span>
        </div>

        <h3>${project.title}</h3>
        <p>${project.summary || ''}</p>

        <div class="project-tags">${tagsHtml}</div>

        <div class="project-links">
          <a href="project-detail.html?slug=${project.slug}" class="btn btn-primary" style="font-size:0.6rem;padding:10px 20px;">
            View Full Project →
          </a>
          ${project.links && project.links.github ? `<a href="${project.links.github}" target="_blank" class="btn btn-outline" style="font-size:0.6rem;padding:10px 20px;">GitHub</a>` : ''}
        </div>
      </div>
    </div>`;
  }

  // Featured project first, then the rest in array order
  const sorted = [...PROJECTS].sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
  list.innerHTML = sorted.map((p, i) => cardHtml(p, i)).join('');

  // Re-run the reveal observer + hover glow on the newly injected cards
  if (window.reinitReveals) window.reinitReveals();

  document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('mouseover', () => {
      card.style.boxShadow = '0 0 30px rgba(192,57,43,0.25), 0 0 60px rgba(192,57,43,0.08)';
    });
    card.addEventListener('mouseout', () => {
      card.style.boxShadow = '';
    });
  });

  // ── CAROUSEL STATE + LOGIC ──────────────────────────────────
  const carouselState = {}; // { uid: currentIndex }

  function moveCarousel(uid, dir) {
    const track = document.querySelector(`[data-track="${uid}"]`);
    if (!track) return;
    const slides = track.querySelectorAll('.carousel-slide');
    const count = slides.length;
    let idx = carouselState[uid] || 0;
    idx = (idx + dir + count) % count;
    carouselState[uid] = idx;
    track.style.transform = `translateX(-${idx * (100 / count)}%)`;

    const counter = document.querySelector(`[data-counter="${uid}"]`);
    if (counter) counter.textContent = `${idx + 1} / ${count}`;

    document.querySelectorAll(`[data-dot][data-card="${uid}"]`).forEach((dot, i) => {
      dot.classList.toggle('active', i === idx);
    });
  }

  function goToSlide(uid, index) {
    const track = document.querySelector(`[data-track="${uid}"]`);
    if (!track) return;
    const count = track.querySelectorAll('.carousel-slide').length;
    carouselState[uid] = ((index % count) + count) % count;
    const idx = carouselState[uid];
    track.style.transform = `translateX(-${idx * (100 / count)}%)`;
    const counter = document.querySelector(`[data-counter="${uid}"]`);
    if (counter) counter.textContent = `${idx + 1} / ${count}`;
    document.querySelectorAll(`[data-dot][data-card="${uid}"]`).forEach((dot, i) => {
      dot.classList.toggle('active', i === idx);
    });
  }

  document.querySelectorAll('[data-arrow]').forEach(arrow => {
    arrow.addEventListener('click', () => {
      const uid = arrow.dataset.card;
      const dir = arrow.dataset.arrow === 'next' ? 1 : -1;
      moveCarousel(uid, dir);
    });
  });

  document.querySelectorAll('[data-dot]').forEach(dot => {
    dot.addEventListener('click', () => {
      goToSlide(dot.dataset.card, parseInt(dot.dataset.dot, 10));
    });
  });

  // Swipe support (touch) on each carousel
  document.querySelectorAll('.carousel').forEach(carousel => {
    const uid = carousel.dataset.carousel;
    let startX = 0;
    let isDragging = false;

    carousel.addEventListener('touchstart', (e) => {
      startX = e.touches[0].clientX;
      isDragging = true;
    }, { passive: true });

    carousel.addEventListener('touchend', (e) => {
      if (!isDragging) return;
      isDragging = false;
      const endX = e.changedTouches[0].clientX;
      const delta = endX - startX;
      if (Math.abs(delta) > 40) moveCarousel(uid, delta < 0 ? 1 : -1);
    });
  });

  // ── VIDEO TABS (per-card, multiple videos) ──────────────────
  document.querySelectorAll('.video-panel-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      const uid = tab.dataset.card;
      const vIndex = parseInt(tab.dataset.vindex, 10);
      const project = sorted[parseInt(uid.replace('pc', ''), 10)];
      if (!project) return;
      const video = project.videos[vIndex];

      document.querySelectorAll(`[data-video-tabs="${uid}"] .video-panel-tab`).forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      const frame = document.querySelector(`[data-video-frame="${uid}"]`);
      if (frame) {
        frame.src = `https://www.youtube.com/embed/${video.id}`;
        frame.title = video.title;
      }
    });
  });

  // ── IMAGES / VIDEO MODE TOGGLE (per-card) ───────────────────
  document.querySelectorAll('.media-mode-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      const uid = tab.dataset.card;
      const mode = tab.dataset.mode;

      document.querySelectorAll(`.media-mode-tab[data-card="${uid}"]`).forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      document.querySelectorAll(`.media-panel[data-card="${uid}"]`).forEach(panel => {
        panel.classList.toggle('active', panel.dataset.panel === mode);
      });
    });
  });

  // ── FILTER TABS ──────────────────────────────────────────────
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
})();