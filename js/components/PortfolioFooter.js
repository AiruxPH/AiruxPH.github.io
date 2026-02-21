class PortfolioFooter extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
            <footer class="glass-panel" role="contentinfo">
                <p>&copy; 2024-2025 Anecito Randy E. Calunod Jr. | Crafted with Custom Web Components</p>
            </footer>
        `;
    }
}

customElements.define('portfolio-footer', PortfolioFooter);
