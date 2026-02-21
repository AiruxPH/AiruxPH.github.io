class GallerySection extends HTMLElement {
    constructor() {
        super();
        this.carouselIndex = 0;
    }

    connectedCallback() {
        this.innerHTML = `
            <section id="gallery" aria-hidden="true" aria-labelledby="gallery-heading">
                <h2 id="gallery-heading" class="text-neon-cyan">Gallery</h2>
                <div class="carousel-wrapper">
                    <div class="carousel-container glass-panel" aria-roledescription="carousel">
                        <div class="carousel" id="carousel" aria-live="polite">
                            <img src="images/profile.jpg" alt="Profile Shot 1" loading="lazy">
                            <img src="images/img2.jpg" alt="Gallery Image 2" loading="lazy">
                            <img src="images/img3.jpg" alt="Gallery Image 3" loading="lazy">
                            <img src="images/img4.jpg" alt="Gallery Image 4" loading="lazy">
                            <img src="images/img5.jpg" alt="Gallery Image 5" loading="lazy">
                            <img src="images/img6.jpg" alt="Gallery Image 6" loading="lazy">
                            <img src="images/img7.jpg" alt="Gallery Image 7" loading="lazy">
                            <img src="images/img8.jpg" alt="Gallery Image 8" loading="lazy">
                            <img src="images/img9.jpg" alt="Gallery Image 9" loading="lazy">
                            <img src="images/img10.jpg" alt="Gallery Image 10" loading="lazy">
                        </div>
                        <div class="carousel-buttons">
                            <button aria-label="Previous Image" class="prev-btn" aria-controls="carousel">❮</button>
                            <button aria-label="Next Image" class="next-btn" aria-controls="carousel">❯</button>
                        </div>
                    </div>
                </div>
            </section>
        `;

        // Attach event listeners for encapsulated carousel logic
        this.querySelector('.prev-btn').addEventListener('click', () => this.moveCarousel(-1));
        this.querySelector('.next-btn').addEventListener('click', () => this.moveCarousel(1));
    }

    moveCarousel(step) {
        const carousel = this.querySelector('#carousel');
        const images = this.querySelectorAll('.carousel img');
        if (images.length === 0) return;

        this.carouselIndex = (this.carouselIndex + step + images.length) % images.length;
        carousel.style.transform = `translateX(-${this.carouselIndex * 100}%)`;
    }
}

customElements.define('section-gallery', GallerySection);
