/* ============================================================
   projects-grid.js
   Renders the project cards on projects.html from the PROJECTS
   array (projects-data.js), then wires up the filter tabs and
   hover-glow behaviour (script.js handles the actual filtering
   logic via data-cat attributes already used by the markup
   this script generates).
   ============================================================ */

(function () {
  const grid = document.getElementById('projectsGrid');
  if (!grid || typeof PROJECTS === 'undefined') return;

  const ENGINE_META = {
    unreal:  { badgeClass: 'badge-ue' },
    unity:   { badgeClass: 'badge-unity' },
    android: { badgeClass: 'badge-android' },
  };

  function mediaCountBadge(project) {
    const imgCount = (project.images || []).length;
    const vidCount = (project.videos || []).length;
    if (!imgCount && !vidCount) return '';
    return `
      <div class="media-count-badge">
        ${imgCount ? `<span class="media-count-pill">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><path d="M21 15l-5-5L5 21"/></svg>
          ${imgCount}
        </span>` : ''}
        ${vidCount ? `<span class="media-count-pill">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="5 3 19 12 5 21 5 3"/></svg>
          ${vidCount}
        </span>` : ''}
      </div>`;
  }

  function cardHtml(project) {
    const meta = ENGINE_META[project.engine] || ENGINE_META.unreal;
    const firstVideo = (project.videos || [])[0];
    const tagsHtml = (project.tags || []).slice(0, 5)
      .map(t => `<span class="tag">${t}</span>`).join('');

    return `
    <div class="project-card${project.featured ? ' featured' : ''} reveal" data-cat="${project.engine}">
      <div class="project-card-media">
        ${firstVideo ? `
        <div class="yt-embed-wrap">
          <iframe src="https://www.youtube.com/embed/${firstVideo.id}" title="${project.title}"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin" allowfullscreen loading="lazy"></iframe>
        </div>` : `
        <div class="yt-embed-wrap" style="background:var(--surface2);"></div>`}
        <span class="project-engine-badge ${meta.badgeClass}">${project.engineLabel}</span>
        ${mediaCountBadge(project)}
      </div>

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
  grid.innerHTML = sorted.map(cardHtml).join('');

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

  // ── FILTER TABS (re-bound here since cards now load after script.js) ──
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