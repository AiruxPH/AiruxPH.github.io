class ContactSection extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
            <section id="contact" aria-hidden="true" aria-labelledby="contact-heading">
                <h2 id="contact-heading" class="text-neon-cyan">Contact Me</h2>
                <div class="contact-container">
                    <div class="contact-links">
                        <a href="https://www.facebook.com/randythegreat000" target="_blank" rel="noopener noreferrer" aria-label="Facebook Profile">
                            <i class="fa-brands fa-facebook text-neon-blue"></i>
                            <span>Randy Calunod Jr.</span>
                        </a>
                        <a href="mailto:randythegreat000@gmail.com" aria-label="Send Email">
                            <i class="fa-solid fa-envelope text-neon-cyan"></i>
                            <span>randythegreat000@gmail.com</span>
                        </a>
                        <p aria-label="Mobile Legends ID">
                            <i class="fa-solid fa-gamepad" style="color:#fcd34d;"></i>
                            <span>Mobile Legends: 22920129</span>
                        </p>
                        <a href="https://instagram.com/itsmerandythegreat" target="_blank" rel="noopener noreferrer" aria-label="Instagram Profile">
                            <i class="fa-brands fa-instagram" style="color:pink;"></i>
                            <span>itsmerandythegreat</span>
                        </a>
                    </div>
                </div>
            </section>
        `;
    }
}

customElements.define('section-contact', ContactSection);
