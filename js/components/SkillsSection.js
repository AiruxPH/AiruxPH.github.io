class SkillsSection extends HTMLElement {
  connectedCallback() {
    const groups = [
      {name:'Programming',icon:'fa-code',items:['Java','Python','JavaScript','PHP','SQL','Assembly']},
      {name:'Web & Mobile',icon:'fa-laptop-code',items:['HTML','CSS','Flutter','Flame','Bootstrap','Tailwind CSS']},
      {name:'Data & AI',icon:'fa-brain',items:['MariaDB','Image Processing','MediaPipe','Roboflow','Prompt Engineering']},
      {name:'Tools & Systems',icon:'fa-screwdriver-wrench',items:['Git','GitHub','VS Code','XAMPP','Figma','Proteus','Networking']}
    ];
    this.innerHTML = `<section id="skills" aria-hidden="true" aria-labelledby="skills-heading">
      <div class="showcase-heading"><div><h2 id="skills-heading" class="text-neon-cyan">Technical Skills</h2><p>Technologies and tools used in coursework and projects.</p></div></div>
      <div class="skill-showcase">${groups.map(group => `<article class="skill-showcase-card glass-panel">
        <h3><i class="fa-solid ${group.icon}" aria-hidden="true"></i> ${group.name}</h3>
        <div class="showcase-tags">${group.items.map(item => `<span>${item}</span>`).join('')}</div>
      </article>`).join('')}</div>
    </section>`;
  }
}
customElements.define('section-skills', SkillsSection);
