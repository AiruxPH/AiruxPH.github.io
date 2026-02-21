class ProjectsSection extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
            <section id="projects" aria-hidden="true" aria-labelledby="projects-heading">
                <h2 id="projects-heading" class="text-neon-cyan">Projects</h2>
                <p style="margin-bottom: 25px; color: #cbd5e1;">Selected projects demonstrating practical application of development principles.</p>
                
                <div class="projects-grid">
                     <div class="project-card glass-panel">
                        <h3><a href="https://easypark.ccsblock2.com/" target="_blank" style="color: white; text-decoration: none;">EasyPark <i class="fa-solid fa-external-link-alt" style="font-size: 0.8em; margin-left: 5px; color: var(--neon-cyan);"></i></a></h3>
                        <div class="project-tags">
                            <span>Web App</span>
                        </div>
                        <p style="margin-top: 15px; color: #cbd5e1;">A comprehensive parking management system.</p>
                    </div>

                    <div class="project-card glass-panel">
                        <h3><a href="https://airuxph.github.io/project101/" target="_blank" style="color: white; text-decoration: none;">Project101 <i class="fa-solid fa-external-link-alt" style="font-size: 0.8em; margin-left: 5px; color: var(--neon-cyan);"></i></a></h3>
                        <div class="project-tags">
                            <span>Web Development</span>
                        </div>
                        <p style="margin-top: 15px; color: #cbd5e1;">A frontend web development project hosted on GitHub Pages.</p>
                    </div>

                    <div class="project-card glass-panel">
                        <h3><a href="https://notebookms.ccsblock2.com/" target="_blank" style="color: white; text-decoration: none;">NotebookMS <i class="fa-solid fa-external-link-alt" style="font-size: 0.8em; margin-left: 5px; color: var(--neon-cyan);"></i></a></h3>
                        <div class="project-tags">
                            <span>Management System</span>
                        </div>
                        <p style="margin-top: 15px; color: #cbd5e1;">A digital notebook management system.</p>
                    </div>

                    <div class="project-card glass-panel">
                        <h3><a href="https://airuxph.github.io/contactless/" target="_blank" style="color: white; text-decoration: none;">Contactless <i class="fa-solid fa-external-link-alt" style="font-size: 0.8em; margin-left: 5px; color: var(--neon-cyan);"></i></a></h3>
                        <div class="project-tags">
                            <span>Web App</span>
                        </div>
                        <p style="margin-top: 15px; color: #cbd5e1;">A contactless solution interface and landing page.</p>
                    </div>
                </div>
            </section>
        `;
    }
}

customElements.define('section-projects', ProjectsSection);
