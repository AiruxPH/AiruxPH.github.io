class SkillsSection extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
            <section id="skills" aria-hidden="true" aria-labelledby="skills-heading">
                <h2 id="skills-heading" class="text-neon-cyan">Technical Skills</h2>
                <p style="margin-bottom: 25px; color: #cbd5e1;">A comprehensive overview of competencies acquired through academic coursework and practical application.</p>
                
                <div class="skills-grid">
                    <div class="skill-category glass-panel">
                        <h3><i class="fa-solid fa-terminal text-neon-cyan"></i> Programming</h3>
                        <ul>
                            <li><strong>Java / C++:</strong> Object-Oriented Programming, Logic Formulation (ITP 4 & CSIT 2).</li>
                            <li><strong>Web Fundamentals:</strong> HTML5, CSS3, Vanilla JS.</li>
                            <li><strong>HCI:</strong> Building intuitive user interfaces (ITP 6).</li>
                        </ul>
                    </div>
                    
                    <div class="skill-category glass-panel">
                        <h3><i class="fa-solid fa-network-wired text-neon-blue"></i> Networking & Systems</h3>
                        <ul>
                            <li><strong>Cisco Routing:</strong> Protocols & Concepts (ITP 5).</li>
                            <li><strong>IT Fundamentals:</strong> Core hardware and operating system competencies.</li>
                        </ul>
                    </div>

                    <div class="skill-category glass-panel">
                        <h3><i class="fa-solid fa-database text-neon-cyan"></i> Data & Logic</h3>
                        <ul>
                            <li><strong>Information Management:</strong> Database organization and querying (CSIT 5).</li>
                            <li><strong>Discrete Mathematics:</strong> Algorithmic logic and problem resolution.</li>
                        </ul>
                    </div>
                </div>
            </section>
        `;
    }
}

customElements.define('section-skills', SkillsSection);
