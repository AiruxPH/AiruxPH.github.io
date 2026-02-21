class PortfolioSidebar extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
            <aside class="glass-panel" role="navigation" aria-label="Primary Navigation">
                <nav id="sidebar-nav">
                    <a href="#about" aria-current="page" class="active"><i class="fa-solid fa-user"></i> About Me</a>
                    <a href="#skills"><i class="fa-solid fa-code"></i> Technical Skills</a>
                    <a href="#projects"><i class="fa-solid fa-laptop-code"></i> Projects</a>
                    <a href="#contact"><i class="fa-solid fa-envelope"></i> Contact Me</a>
                    <a href="#favorites"><i class="fa-solid fa-star"></i> My Favorites</a>
                    <a href="#gallery"><i class="fa-solid fa-images"></i> Gallery</a>
                </nav>
            </aside>
        `;
    }
}

customElements.define('portfolio-sidebar', PortfolioSidebar);
