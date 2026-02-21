class AboutSection extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
            <section id="about" class="active" aria-hidden="false" aria-labelledby="about-heading">
                <h2 id="about-heading" class="text-neon-cyan">About Me</h2>
                <div class="about-container">
                    <div class="profile-pic-container">
                        <img src="images/profile.jpg" alt="Anecito Randy Profile Picture">
                    </div>
                    <div class="about-details">
                        <p>Hi, I am <span class="highlight">Anecito Randy E. Calunod Jr</span>, a 24-year-old Information Technology student based in Ozamiz City, Misamis Occidental.</p>
                        
                        <p>I have a strong passion for technology and software development. My goal is to craft efficient, dynamic, and user-centric applications, blending technical fundamentals with modern design principles. Whether it's backend logic, networking protocols, or intuitive user interfaces, I am constantly learning and adapting in this fast-paced industry.</p>
                        
                        <p>When I'm not coding or studying, I enjoy expressing my creative side through <span class="highlight">singing, playing musical instruments, and drawing</span>. I believe that an analytical mind paired with a creative spirit is the ultimate formula for problem-solving.</p>
                        
                        <div class="tech-font" style="margin-top:20px; color: var(--text-color);">
                            <p>> <strong>Course:</strong> Bachelor of Science in Information Technology (3rd Year)</p>
                            <p>> <strong>Birthday:</strong> September 30, 2002</p>
                            <p style="color: var(--neon-cyan); margin-top: 10px;">> "Nothing is impossible."</p>
                        </div>
                    </div>
                </div>
            </section>
        `;
    }
}

customElements.define('section-about', AboutSection);
