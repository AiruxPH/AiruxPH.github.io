class GallerySection extends HTMLElement {
  constructor() {
    super();
    this.carouselIndex = 0;
    this.lightboxOpen = false;
    this.playing = false;
    this.timer = null;
    this.touchStartX = null;
    this.images = [
      'images/profile.jpg', ...Array.from({length: 9}, (_, i) => 'images/img' + (i + 2) + '.jpg')
    ];
    this.onKeyDown = this.onKeyDown.bind(this);
    this.onVisibility = this.onVisibility.bind(this);
  }

  connectedCallback() {
    this.innerHTML = `
      <section id="gallery" aria-hidden="true" aria-labelledby="gallery-heading">
        <h2 id="gallery-heading" class="text-neon-cyan">Gallery</h2>
        <div class="gallery-viewer">
          <div class="gallery-stage glass-panel" tabindex="0" aria-label="Gallery slideshow. Use left and right arrow keys to navigate.">
            <div class="gallery-track">
              ${this.images.map((src, i) => `<div class="gallery-slide"><img src="${src}" alt="Gallery photo ${i + 1}" loading="${i === 0 ? 'eager' : 'lazy'}" decoding="async"></div>`).join('')}
            </div>
            <button type="button" class="gallery-arrow gallery-prev" aria-label="Previous photo">❮</button>
            <button type="button" class="gallery-arrow gallery-next" aria-label="Next photo">❯</button>
            <button type="button" class="gallery-expand" aria-label="Open fullscreen photo" title="View larger">⛶</button>
          </div>
          <div class="gallery-toolbar">
            <span class="gallery-count" aria-live="polite">1 / ${this.images.length}</span>
            <div class="gallery-actions">
              <button type="button" class="gallery-play" aria-pressed="false" aria-label="Start slideshow">▶ Play</button>
              <button type="button" class="gallery-fullscreen">⛶ Fullscreen</button>
            </div>
          </div>
          <div class="gallery-thumbnails" aria-label="Choose a gallery photo">
            ${this.images.map((src, i) => `<button type="button" class="gallery-thumb" data-index="${i}" aria-label="Show photo ${i + 1}" aria-current="${i === 0 ? 'true' : 'false'}"><img src="${src}" alt="" loading="lazy"></button>`).join('')}
          </div>
        </div>
      </section>
      <div class="gallery-lightbox" role="dialog" aria-modal="true" aria-label="Gallery fullscreen viewer" hidden>
        <button type="button" class="gallery-close" aria-label="Close fullscreen viewer">✕</button>
        <button type="button" class="gallery-light-prev" aria-label="Previous photo">❮</button>
        <div class="gallery-light-content">
          <img class="gallery-light-image" alt="Enlarged gallery photo">
          <div class="gallery-light-footer"><span class="gallery-light-count"></span><button type="button" class="gallery-zoom" aria-pressed="false">Zoom</button></div>
        </div>
        <button type="button" class="gallery-light-next" aria-label="Next photo">❯</button>
      </div>`;
    const on = (selector, fn) => this.querySelector(selector).addEventListener('click', fn);
    on('.gallery-prev', () => this.moveCarousel(-1));
    on('.gallery-next', () => this.moveCarousel(1));
    on('.gallery-light-prev', () => this.moveCarousel(-1));
    on('.gallery-light-next', () => this.moveCarousel(1));
    on('.gallery-expand', () => this.openLightbox());
    on('.gallery-fullscreen', () => this.openLightbox());
    on('.gallery-close', () => this.closeLightbox());
    on('.gallery-play', () => this.togglePlay());
    on('.gallery-zoom', () => this.toggleZoom());
    this.querySelectorAll('.gallery-thumb').forEach(btn => btn.addEventListener('click', () => this.goTo(Number(btn.dataset.index))));
    const stage = this.querySelector('.gallery-stage');
    const lightbox = this.querySelector('.gallery-lightbox');
    [stage, lightbox].forEach(el => {
      el.addEventListener('touchstart', e => { this.touchStartX = e.changedTouches[0].screenX; }, {passive:true});
      el.addEventListener('touchend', e => {
        if (this.touchStartX === null) return;
        const delta = e.changedTouches[0].screenX - this.touchStartX;
        this.touchStartX = null;
        if (Math.abs(delta) > 45) this.moveCarousel(delta < 0 ? 1 : -1);
      }, {passive:true});
    });
    lightbox.addEventListener('click', e => { if (e.target === lightbox) this.closeLightbox(); });
    document.addEventListener('keydown', this.onKeyDown);
    document.addEventListener('visibilitychange', this.onVisibility);
    this.render();
  }

  disconnectedCallback() {
    this.pause();
    document.removeEventListener('keydown', this.onKeyDown);
    document.removeEventListener('visibilitychange', this.onVisibility);
    if (this.lightboxOpen) document.body.style.overflow = this.previousOverflow || '';
  }

  goTo(index) {
    this.carouselIndex = (index + this.images.length) % this.images.length;
    this.render();
  }
  moveCarousel(step) { this.goTo(this.carouselIndex + step); }
  render() {
    const index = this.carouselIndex;
    this.querySelector('.gallery-track').style.transform = `translateX(-${index * 100}%)`;
    this.querySelector('.gallery-count').textContent = `${index + 1} / ${this.images.length}`;
    this.querySelector('.gallery-light-count').textContent = `${index + 1} / ${this.images.length}`;
    this.querySelectorAll('.gallery-thumb').forEach((btn, i) => {
      btn.setAttribute('aria-current', String(i === index));
      btn.tabIndex = i === index ? 0 : -1;
    });
    const selected = this.querySelector('.gallery-thumb[aria-current="true"]');
    if (selected) selected.scrollIntoView({block:'nearest', inline:'nearest', behavior:'auto'});
    const img = this.querySelector('.gallery-light-image');
    img.src = this.images[index];
    img.alt = `Enlarged gallery photo ${index + 1}`;
    img.classList.remove('is-zoomed');
    this.querySelector('.gallery-zoom').setAttribute('aria-pressed', 'false');
  }
  onKeyDown(e) {
    if (this.lightboxOpen) {
      if (e.key === 'Escape') { e.preventDefault(); this.closeLightbox(); }
      else if (e.key === 'ArrowLeft') { e.preventDefault(); this.moveCarousel(-1); }
      else if (e.key === 'ArrowRight') { e.preventDefault(); this.moveCarousel(1); }
      else if (e.key === 'Tab') {
        const controls = [...this.querySelectorAll('.gallery-lightbox button')];
        const first = controls[0], last = controls[controls.length - 1];
        if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
        else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
      }
    } else if (this.contains(document.activeElement) && this.querySelector('#gallery').classList.contains('active')) {
      if (e.key === 'ArrowLeft' || e.key === 'ArrowRight') {
        e.preventDefault(); this.moveCarousel(e.key === 'ArrowRight' ? 1 : -1);
      }
    }
  }
  openLightbox() {
    this.pause();
    this.previousFocus = document.activeElement;
    this.previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    this.lightboxOpen = true;
    this.querySelector('.gallery-lightbox').hidden = false;
    this.querySelector('.gallery-close').focus();
  }
  closeLightbox() {
    this.lightboxOpen = false;
    this.querySelector('.gallery-lightbox').hidden = true;
    document.body.style.overflow = this.previousOverflow || '';
    if (this.previousFocus && this.previousFocus.isConnected) this.previousFocus.focus();
  }
  toggleZoom() {
    const img = this.querySelector('.gallery-light-image');
    const zoomed = img.classList.toggle('is-zoomed');
    this.querySelector('.gallery-zoom').setAttribute('aria-pressed', String(zoomed));
  }
  togglePlay() {
    if (this.playing) return this.pause();
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    this.playing = true;
    this.querySelector('.gallery-play').textContent = '❚❚ Pause';
    this.querySelector('.gallery-play').setAttribute('aria-pressed','true');
    this.timer = setInterval(() => {
      if (!document.hidden && this.querySelector('#gallery').classList.contains('active')) this.moveCarousel(1);
    }, 4500);
  }
  pause() {
    clearInterval(this.timer);
    this.timer = null;
    this.playing = false;
    const btn = this.querySelector('.gallery-play');
    if (btn) { btn.textContent = '▶ Play'; btn.setAttribute('aria-pressed','false'); }
  }
  onVisibility() { if (document.hidden) this.pause(); }
}
customElements.define('section-gallery', GallerySection);
