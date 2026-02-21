class ContactSection extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
            <section id="contact" aria-hidden="true" aria-labelledby="contact-heading">
                <h2 id="contact-heading" class="text-neon-cyan">Contact Me</h2>
                <div class="contact-container" style="flex-direction: row; flex-wrap: wrap; gap: 20px;">
                    <div class="contact-links" style="max-width: 300px; flex: 1; min-width: 250px;">
                        <a href="https://www.facebook.com/randythegreat000" target="_blank" rel="noopener noreferrer" aria-label="Facebook Profile">
                            <i class="fa-brands fa-facebook text-neon-blue"></i>
                            <span>Randy Calunod Jr.</span>
                        </a>
                        <a href="https://www.instagram.com/itsmerandythegreat" target="_blank" rel="noopener noreferrer" aria-label="Instagram Profile">
                            <i class="fa-brands fa-instagram" style="color:pink;"></i>
                            <span>itsmerandythegreat</span>
                        </a>
                        <a href="https://www.tiktok.com/@airuxph" target="_blank" rel="noopener noreferrer" aria-label="TikTok Profile">
                            <i class="fa-brands fa-tiktok" style="color: white;"></i>
                            <span>@airuxph</span>
                        </a>
                    </div>
                    <div class="contact-links" style="max-width: 300px; flex: 1; min-width: 250px;">
                        <a href="https://github.com/AiruxPH" target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile">
                            <i class="fa-brands fa-github" style="color: white;"></i>
                            <span>AiruxPH</span>
                        </a>
                        <a href="https://www.figma.com/@airuxph" target="_blank" rel="noopener noreferrer" aria-label="Figma Profile">
                            <i class="fa-brands fa-figma" style="color: #f24e1e;"></i>
                            <span>@airuxph</span>
                        </a>
                        <p aria-label="Discord ID">
                            <i class="fa-brands fa-discord" style="color: #5865F2;"></i>
                            <span>randythegreat</span>
                        </p>
                    </div>
                </div>
            </section>
        `;
    }
}

customElements.define('section-contact', ContactSection);
