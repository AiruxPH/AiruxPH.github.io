class ProjectsSection extends HTMLElement {
  constructor() {
    super();
    this.projects = [
      {title:'EasyPark',category:'Web',icon:'fa-square-parking',summary:'Parking reservation and management system.',details:'A reservation system for managing parking spaces, vehicles, bookings and payments.',stack:['PHP','MariaDB','Bootstrap'],live:'https://easypark.ccsblock2.com/',preview:'easypark.png'},
      {title:'Pickleball Simulator',category:'Games',icon:'fa-table-tennis-paddle-ball',summary:'Playable pickleball simulator hosted online.',details:'A browser-accessible pickleball simulator. Explore the playable version through the live demo.',stack:['Game','Web'],live:'https://pickleball-simulator.web.app/',preview:'pickleball-simulator.png'},
      {title:'Flutter Pickleball Game',category:'Games',icon:'fa-gamepad',summary:'Mobile pickleball game built with Flutter and Flame.',details:'An in-development mobile pickleball game featuring rallies, scoring and court designs.',stack:['Flutter','Flame','Dart'],source:'https://github.com/AiruxPH/pickle_ball_game'},
      {title:'Palm-based Contactless Navigation',category:'AI',icon:'fa-hand',summary:'Exploring touch-free navigation with hand tracking.',details:'An image-processing project exploring camera-based palm and hand detection for contactless controls.',stack:['Image Processing','MediaPipe','Roboflow']},
      {title:'NotebookMS',category:'Web',icon:'fa-book',summary:'Digital notebook management system.',details:'A web-based system for organizing and managing digital notebooks.',stack:['Web App'],live:'https://notebookms.ccsblock2.com/',preview:'notebookms.png'},
      {title:'Contactless',category:'Web',icon:'fa-hand-pointer',summary:'Contactless solution interface and landing page.',details:'A web interface showcasing a contactless solution.',stack:['Web'],live:'https://airuxph.github.io/contactless/',preview:'contactless.png'},
      {title:'Project101',category:'Web',icon:'fa-globe',summary:'Frontend web development project.',details:'A frontend project published with GitHub Pages.',stack:['HTML','CSS','JavaScript'],live:'https://airuxph.github.io/project101/',preview:'project101.png'}
    ];
  }
  connectedCallback() {
    this.innerHTML = `<section id="projects" aria-hidden="true" aria-labelledby="projects-heading">
      <div class="showcase-heading"><div><h2 id="projects-heading" class="text-neon-cyan">Projects</h2><p>Selected applications, games and experiments.</p></div><span class="project-result-count" aria-live="polite"></span></div>
      <div class="project-filters" role="group" aria-label="Filter projects">
        ${['All','Web','Games','AI'].map((name,i)=>`<button type="button" data-filter="${name}" aria-pressed="${i===0}">${name}</button>`).join('')}
      </div>
      <div class="project-showcase-grid"></div>
      <dialog class="project-detail-dialog" aria-labelledby="project-dialog-title">
        <div class="project-dialog-top"><h3 id="project-dialog-title"></h3><button type="button" class="project-dialog-close" aria-label="Close project details">✕</button></div>
        <p class="project-dialog-description"></p><div class="showcase-tags project-dialog-tags"></div><div class="project-dialog-links"></div>
      </dialog>
    </section>`;
    this.querySelectorAll('[data-filter]').forEach(button => button.addEventListener('click', () => {
      this.querySelectorAll('[data-filter]').forEach(b => b.setAttribute('aria-pressed',String(b===button)));
      this.renderProjects(button.dataset.filter);
    }));
    this.querySelector('.project-dialog-close').addEventListener('click',()=>this.querySelector('dialog').close());
    this.querySelector('dialog').addEventListener('click',e=>{ if(e.target===e.currentTarget)e.currentTarget.close(); });
    this.renderProjects('All');
  }
  renderProjects(filter) {
    const projects = this.projects.filter(p=>filter==='All'||p.category===filter);
    this.querySelector('.project-result-count').textContent = `${projects.length} projects`;
    const grid=this.querySelector('.project-showcase-grid');
    grid.innerHTML = projects.map(p=>`<article class="project-showcase-card glass-panel">
      ${p.preview ? `<a class="project-preview-link" href="${p.live}" target="_blank" rel="noopener noreferrer" aria-label="Open ${p.title} website"><div class="project-preview-fallback"><i class="fa-solid ${p.icon}" aria-hidden="true"></i><span>Website preview</span></div><img class="project-preview-image" src="images/project-previews/${p.preview}" alt="Screenshot of ${p.title} website" loading="lazy" decoding="async"></a>` : `<div class="project-showcase-icon"><i class="fa-solid ${p.icon}" aria-hidden="true"></i></div>`}
      <div class="project-showcase-body"><span class="project-category">${p.category}</span><h3>${p.title}</h3><p>${p.summary}</p>
      <div class="showcase-tags">${p.stack.slice(0,3).map(t=>`<span>${t}</span>`).join('')}</div></div>
      <button type="button" class="project-details-button">View details <span aria-hidden="true">↗</span></button>
    </article>`).join('');
    grid.querySelectorAll('.project-preview-image').forEach(img => {
      img.addEventListener('load', () => { img.classList.add('is-loaded'); });
      img.addEventListener('error', () => { img.removeAttribute('src'); });
      if (img.complete && img.naturalWidth) img.classList.add('is-loaded');
    });
    grid.querySelectorAll('.project-details-button').forEach((button,i)=>button.addEventListener('click',()=>this.openProject(projects[i])));
  }
  openProject(project) {
    const dialog=this.querySelector('dialog');
    dialog.querySelector('#project-dialog-title').textContent=project.title;
    dialog.querySelector('.project-dialog-description').textContent=project.details;
    dialog.querySelector('.project-dialog-tags').innerHTML=project.stack.map(t=>`<span>${t}</span>`).join('');
    const links=dialog.querySelector('.project-dialog-links');
    links.replaceChildren();
    for(const [label,url] of [['Live demo',project.live],['Source code',project.source]]) {
      if(!url)continue;
      const a=document.createElement('a');a.href=url;a.target='_blank';a.rel='noopener noreferrer';a.textContent=label+' ↗';links.appendChild(a);
    }
    if(typeof dialog.showModal==='function')dialog.showModal();
  }
}
customElements.define('section-projects', ProjectsSection);
