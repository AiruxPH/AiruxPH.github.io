class PortfolioHeader extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
            <header class="glass-panel" role="banner">
                <h1 class="glitch" data-text="AiruxPH | IT Portfolio">AiruxPH <span class="text-neon-cyan">|</span> IT Portfolio</h1>
                <button class="mobile-menu-toggle" aria-label="Toggle Navigation">
                    <i class="fa-solid fa-bars"></i>
                </button>
            </header>
        `;
    }
}

customElements.define('portfolio-header', PortfolioHeader);
