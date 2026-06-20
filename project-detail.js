/* ============================================================
   project-detail.js
   Reads ?slug=... from the URL, finds the matching project in
   PROJECTS (projects-data.js), and renders the full detail page:
   image gallery (with lightbox + thumbnails), multiple video
   tabs, long-form description, feature list, and sidebar facts.
   ============================================================ */

(function () {
  const root = document.getElementById('projectRoot');
  if (!root) return;

  const params = new URLSearchParams(window.location.search);
  const slug = params.get('slug');
  const project = typeof getProjectBySlug === 'function' ? getProjectBySlug(slug) : null;

  // ── Engine accent lookup (badge color + label) ──────────────
  const ENGINE_META = {
    unreal:  { badgeClass: 'badge-ue',      accent: 'var(--crimson)' },
    unity:   { badgeClass: 'badge-unity',   accent: 'var(--unity)' },
    android: { badgeClass: 'badge-android', accent: 'var(--gold)' },
  };

  if (!project) {
    root.innerHTML = `
      <div class="detail-hero" style="padding-bottom:120px;text-align:center;">
        <div class="section-label" style="justify-content:center;">Not Found</div>
        <h1 style="color:var(--white);">Project Not <span style="color:var(--crimson)">Found</span></h1>
        <p style="max-width:480px;margin:16px auto 32px;">
          This project doesn't exist or the link is missing its slug.
        </p>
        <a href="projects.html" class="btn btn-primary">← Back to Projects</a>
      </div>`;
    return;
  }

  document.title = project.title + ' | Dhanush Kumar G';
  const meta = ENGINE_META[project.engine] || ENGINE_META.unreal;

  // ── Build HTML ───────────────────────────────────────────────
  const images = project.images || [];
  const videos = project.videos || [];

  const tagsHtml = (project.tags || [])
    .map(t => `<span class="tag">${t}</span>`).join('');

  const featuresHtml = (project.features || []).length
    ? `<h3>Key Features</h3><ul class="detail-feature-list">${
        project.features.map(f => `<li>${f}</li>`).join('')
      }</ul>`
    : '';

  const descriptionHtml = (project.description || [])
    .map(p => `<p>${p}</p>`).join('');

  const toolsHtml = (project.tools || [])
    .map(t => `<span class="tag">${t}</span>`).join('');

  root.innerHTML = `
    <div class="detail-hero reveal">
      <a href="projects.html" class="back-link">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="14" height="14"><path d="M15 18l-6-6 6-6"/></svg>
        Back to All Projects
      </a>

      <div class="detail-meta-row">
        <span class="detail-engine-badge ${meta.badgeClass}">${project.engineLabel}</span>
        <span class="project-type">${project.type || ''}</span>
        <span class="project-year">${project.year || ''}</span>
      </div>

      <h1>${project.title}</h1>
      <p class="detail-summary">${project.summary || ''}</p>

      <dl class="detail-stats-row">
        ${project.duration ? `<div class="detail-stat"><dt>Duration</dt><dd>${project.duration}</dd></div>` : ''}
        ${project.role ? `<div class="detail-stat"><dt>Role</dt><dd>${project.role}</dd></div>` : ''}
        <div class="detail-stat"><dt>Engine</dt><dd>${project.engineLabel}</dd></div>
        <div class="detail-stat"><dt>Year</dt><dd>${project.year || '—'}</dd></div>
      </dl>
    </div>

    ${images.length ? `
    <div class="gallery-wrap reveal">
      <div class="gallery-main" id="galleryMain">
        <span class="gallery-counter" id="galleryCounter">1 / ${images.length}</span>
        <img id="galleryMainImg" src="${images[0].src}" alt="${images[0].caption || project.title}">
        ${images.length > 1 ? `
          <div class="gallery-nav-btn gallery-nav-prev" id="galleryPrev">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="18" height="18"><path d="M15 18l-6-6 6-6"/></svg>
          </div>
          <div class="gallery-nav-btn gallery-nav-next" id="galleryNext">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="18" height="18"><path d="M9 18l6-6-6-6"/></svg>
          </div>` : ''}
        <span class="gallery-expand-hint">⤢ Click to expand</span>
      </div>
      <p class="gallery-caption" id="galleryCaption">${images[0].caption || ''}</p>
      ${images.length > 1 ? `
        <div class="gallery-thumbs" id="galleryThumbs">
          ${images.map((img, i) => `
            <div class="gallery-thumb${i === 0 ? ' active' : ''}" data-index="${i}">
              <img src="${img.src}" alt="${img.caption || ''}" loading="lazy">
            </div>`).join('')}
        </div>` : ''}
    </div>` : ''}

    ${videos.length ? `
    <div class="video-tabs-wrap reveal">
      <div class="section-label">Footage</div>
      <h2 class="section-title" style="margin-bottom:24px;">Video <span style="color:var(--crimson)">Gallery</span></h2>
      ${videos.length > 1 ? `
        <div class="video-tabs" id="videoTabs">
          ${videos.map((v, i) => `<button class="video-tab${i === 0 ? ' active' : ''}" data-index="${i}">${v.title}</button>`).join('')}
        </div>` : ''}
      <div class="video-frame">
        <div class="yt-embed-wrap">
          <iframe id="videoFrame"
            src="https://www.youtube.com/embed/${videos[0].id}"
            title="${videos[0].title}"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen>
          </iframe>
        </div>
        <div class="video-caption">
          <h3 id="videoCaptionTitle" style="font-family:var(--font-h);font-size:1rem;color:var(--white);">${videos[0].title}</h3>
        </div>
      </div>
    </div>` : ''}

    <div class="detail-body-grid">
      <div class="detail-prose reveal">
        <h3 style="margin-top:0;">About This Project</h3>
        ${descriptionHtml}
        ${featuresHtml}
      </div>

      <div class="detail-sidebar reveal">
        ${toolsHtml ? `
        <div class="sidebar-card">
          <h4>Tools &amp; Tech</h4>
          <div class="sidebar-tools">${toolsHtml}</div>
        </div>` : ''}

        ${tagsHtml ? `
        <div class="sidebar-card">
          <h4>Tags</h4>
          <div class="sidebar-tools">${tagsHtml}</div>
        </div>` : ''}

        <div class="sidebar-card">
          <h4>Links</h4>
          <div class="sidebar-links">
            ${project.links && project.links.demo ? `<a href="${project.links.demo}" target="_blank" class="btn btn-primary">▶ Watch Demo</a>` : ''}
            ${project.links && project.links.github ? `<a href="${project.links.github}" target="_blank" class="btn btn-outline">GitHub</a>` : ''}
          </div>
        </div>
      </div>
    </div>
  `;

  // Re-trigger reveal animations for the freshly injected content
  if (window.reinitReveals) window.reinitReveals();

  // ── GALLERY LOGIC ────────────────────────────────────────────
  let currentIndex = 0;

  function renderGallery(index) {
    if (!images.length) return;
    currentIndex = (index + images.length) % images.length;
    const img = images[currentIndex];
    const mainImg = document.getElementById('galleryMainImg');
    const caption = document.getElementById('galleryCaption');
    const counter = document.getElementById('galleryCounter');
    if (mainImg) { mainImg.style.opacity = '0'; setTimeout(() => { mainImg.src = img.src; mainImg.alt = img.caption || project.title; mainImg.style.opacity = '1'; }, 120); }
    if (caption) caption.textContent = img.caption || '';
    if (counter) counter.textContent = `${currentIndex + 1} / ${images.length}`;
    document.querySelectorAll('.gallery-thumb').forEach((t, i) => {
      t.classList.toggle('active', i === currentIndex);
    });
  }

  const galleryPrev = document.getElementById('galleryPrev');
  const galleryNext = document.getElementById('galleryNext');
  if (galleryPrev) galleryPrev.addEventListener('click', (e) => { e.stopPropagation(); renderGallery(currentIndex - 1); });
  if (galleryNext) galleryNext.addEventListener('click', (e) => { e.stopPropagation(); renderGallery(currentIndex + 1); });

  document.querySelectorAll('.gallery-thumb').forEach(thumb => {
    thumb.addEventListener('click', () => renderGallery(parseInt(thumb.dataset.index, 10)));
  });

  // ── LIGHTBOX ─────────────────────────────────────────────────
  const lightbox        = document.getElementById('lightboxOverlay');
  const lightboxImg     = document.getElementById('lightboxImg');
  const lightboxCaption = document.getElementById('lightboxCaption');
  const lightboxClose   = document.getElementById('lightboxClose');
  const lightboxPrev    = document.getElementById('lightboxPrev');
  const lightboxNext    = document.getElementById('lightboxNext');
  const galleryMain      = document.getElementById('galleryMain');

  function openLightbox(index) {
    if (!images.length) return;
    currentIndex = index;
    updateLightbox();
    lightbox.classList.add('open');
    document.body.style.overflow = 'hidden';
  }
  function updateLightbox() {
    const img = images[currentIndex];
    lightboxImg.src = img.src;
    lightboxImg.alt = img.caption || project.title;
    lightboxCaption.textContent = img.caption || '';
  }
  function closeLightbox() {
    lightbox.classList.remove('open');
    document.body.style.overflow = '';
  }

  if (galleryMain) {
    galleryMain.addEventListener('click', (e) => {
      if (e.target.closest('.gallery-nav-btn')) return;
      openLightbox(currentIndex);
    });
  }
  if (lightboxClose) lightboxClose.addEventListener('click', closeLightbox);
  if (lightbox) lightbox.addEventListener('click', (e) => { if (e.target === lightbox) closeLightbox(); });
  if (lightboxPrev) lightboxPrev.addEventListener('click', () => { currentIndex = (currentIndex - 1 + images.length) % images.length; updateLightbox(); renderGallery(currentIndex); });
  if (lightboxNext) lightboxNext.addEventListener('click', () => { currentIndex = (currentIndex + 1) % images.length; updateLightbox(); renderGallery(currentIndex); });

  document.addEventListener('keydown', (e) => {
    if (!lightbox.classList.contains('open')) return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowLeft' && lightboxPrev) lightboxPrev.click();
    if (e.key === 'ArrowRight' && lightboxNext) lightboxNext.click();
  });

  // ── VIDEO TABS ───────────────────────────────────────────────
  document.querySelectorAll('.video-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      document.querySelectorAll('.video-tab').forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      const v = videos[parseInt(tab.dataset.index, 10)];
      const frame = document.getElementById('videoFrame');
      const title = document.getElementById('videoCaptionTitle');
      if (frame) frame.src = `https://www.youtube.com/embed/${v.id}`;
      if (frame) frame.title = v.title;
      if (title) title.textContent = v.title;
    });
  });

  // ── NEXT PROJECT NAV ─────────────────────────────────────────
  const idx = PROJECTS.findIndex(p => p.slug === project.slug);
  const next = PROJECTS[(idx + 1) % PROJECTS.length];
  if (next) {
    const nextNav = document.createElement('div');
    nextNav.className = 'next-project reveal';
    nextNav.innerHTML = `
      <a href="project-detail.html?slug=${next.slug}" class="next-project-card">
        <div>
          <div class="next-project-label">Next Project</div>
          <div class="next-project-title">${next.title}</div>
        </div>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" width="28" height="28" style="color:var(--crimson);flex-shrink:0;"><path d="M9 18l6-6-6-6"/></svg>
      </a>`;
    root.appendChild(nextNav);
    if (window.reinitReveals) window.reinitReveals();
  }
})();