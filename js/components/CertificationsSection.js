class CertificationsSection extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
            <section id="certifications" aria-hidden="true" aria-labelledby="certifications-heading">
                <h2 id="certifications-heading" class="text-neon-cyan">Certifications</h2>
                <p style="margin-bottom: 25px; color: #cbd5e1;">Professional certifications and badges from recognized institutions.</p>
                
                <div class="projects-grid">
                     <div class="project-card glass-panel" style="align-items: center; text-align: center;">
                        <img src="images/CCNA - Introduction to Networks.png" alt="CCNA Badge" style="max-width: 200px; margin-bottom: 15px;">
                        <h3><a href="https://www.credly.com/badges/6779285f-4386-4978-877a-75171593580b/" target="_blank" style="color: white; text-decoration: none;">CCNA: Introduction to Networks <i class="fa-solid fa-external-link-alt" style="font-size: 0.8em; margin-left: 5px; color: var(--neon-cyan);"></i></a></h3>
                        <p style="margin-top: 15px; color: #cbd5e1;">Cisco Certified Network Associate</p>
                    </div>
                </div>
            </section>
        `;
    }
}

customElements.define('section-certifications', CertificationsSection);
