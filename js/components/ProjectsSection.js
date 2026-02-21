class ProjectsSection extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
            <section id="projects" aria-hidden="true" aria-labelledby="projects-heading">
                <h2 id="projects-heading" class="text-neon-cyan">Projects</h2>
                <p style="margin-bottom: 25px; color: #cbd5e1;">Selected academic projects demonstrating practical application of Integrative Programming and HCI principles.</p>
                
                <div class="projects-grid">
                     <div class="project-card glass-panel">
                        <h3>Interactive Web Portfolio</h3>
                        <div class="project-tags">
                            <span>Web Components</span>
                            <span>CSS/Glassmorphism</span>
                            <span>Vanilla JS</span>
                        </div>
                        <p style="margin-top: 15px; color: #cbd5e1;">A responsive Single Page Application (SPA) utilizing vanilla JavaScript and Native Web Components. Features include a dynamic gallery carousel, semantic HTML for SEO, and modern glassmorphism design principles built without external CSS frameworks.</p>
                    </div>

                    <div class="project-card glass-panel">
                        <h3>Integrative Programming Model (ITP 4)</h3>
                        <div class="project-tags">
                            <span>Java</span>
                            <span>Algorithms</span>
                            <span>OOP</span>
                        </div>
                        <p style="margin-top: 15px; color: #cbd5e1;">Development of core algorithmic logic integrating advanced data processing techniques applied during university coursework.</p>
                    </div>
                </div>
            </section>
        `;
    }
}

customElements.define('section-projects', ProjectsSection);
