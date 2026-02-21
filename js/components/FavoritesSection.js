class FavoritesSection extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
            <section id="favorites" aria-hidden="true" aria-labelledby="favorites-heading">
                <h2 id="favorites-heading" class="text-neon-cyan">My Favorites</h2>
                <div class="favorites-list">
                    <div class="favorite-item glass-panel">
                        <h3>1. Musical Instruments</h3><p>Finding rhythm and expressing emotions.</p>
                    </div>
                    <div class="favorite-item glass-panel">
                        <h3>2. Video Games</h3><p>Strategic challenges and immersive worlds.</p>
                    </div>
                    <div class="favorite-item glass-panel">
                        <h3>3. Reading Novels</h3><p>Expanding imagination beyond the screen.</p>
                    </div>
                    <div class="favorite-item glass-panel">
                        <h3>4. Cyan Color</h3><p>Appreciating tech aesthetics and sci-fi themes.</p>
                    </div>
                    <div class="favorite-item glass-panel">
                        <h3>5. Writing Stories</h3><p>Crafting narratives from boundless imagination.</p>
                    </div>
                    <div class="favorite-item glass-panel">
                        <h3>6. Singing</h3><p>A personal talent and creative outlet.</p>
                    </div>
                </div>
            </section>
        `;
    }
}

customElements.define('section-favorites', FavoritesSection);
