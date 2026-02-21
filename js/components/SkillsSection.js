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
                        <h3><i class="fa-solid fa-code text-neon-cyan"></i> Programming & Web</h3>
                        <ul>
                            <li><strong>Languages:</strong> Java, Python, JavaScript, PHP, SQL</li>
                            <li><strong>Web Technologies:</strong> HTML, CSS</li>
                            <li><strong>Frameworks:</strong> Bootstrap, Tailwind CSS</li>
                        </ul>
                    </div>
                    
                    <div class="skill-category glass-panel">
                        <h3><i class="fa-solid fa-screwdriver-wrench text-neon-blue"></i> Tools & OS</h3>
                        <ul>
                            <li><strong>Development Tools:</strong> VS Code, XAMPP, MySQL, Figma</li>
                            <li><strong>Version Control:</strong> Git, GitHub</li>
                            <li><strong>Operating Systems:</strong> Windows, Android</li>
                        </ul>
                    </div>

                    <div class="skill-category glass-panel">
                        <h3><i class="fa-solid fa-brain text-neon-cyan"></i> AI & Prompt Engineering</h3>
                        <ul>
                            <li><strong>Prompt Engineering</strong></li>
                            <li><strong>Generative AI</strong></li>
                            <li><strong>LLM Optimization</strong></li>
                        </ul>
                    </div>
                </div>
            </section>
        `;
    }
}

customElements.define('section-skills', SkillsSection);
