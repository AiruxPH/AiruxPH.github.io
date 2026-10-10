/* Theme gallery with live color previews and persisted preference. */
(function () {
  const key='airux-portfolio-theme';
  const choices=[
    {id:'glass',name:'Glass',emoji:'✨',description:'Frosted neon'},
    {id:'arcade',name:'Arcade',emoji:'🎮',description:'Playful game UI'},
    {id:'pixel',name:'Pixel',emoji:'👾',description:'Retro 8-bit'},
    {id:'minimal',name:'Minimal',emoji:'☀️',description:'Clean and bright'}
  ];
  let initial='glass';
  try {const stored=localStorage.getItem(key);initial=stored==='cartoon'?'arcade':choices.some(c=>c.id===stored)?stored:'glass'}catch(_){}
  const root=document.createElement('div');
  root.className='theme-picker';
  root.innerHTML='<button type="button" id="theme-switcher" class="theme-switcher" aria-haspopup="true" aria-expanded="false" aria-controls="theme-options">🎨 Themes</button><div id="theme-options" class="theme-options" hidden role="group" aria-label="Choose portfolio theme"><div class="theme-options-heading">Choose your style</div><div class="theme-options-grid"></div></div>';
  document.body.appendChild(root);
  const button=root.querySelector('#theme-switcher'),panel=root.querySelector('#theme-options'),grid=root.querySelector('.theme-options-grid');
  for(const choice of choices) {
    const option=document.createElement('button');
    option.type='button';
    option.dataset.themeChoice=choice.id;
    option.setAttribute('aria-label',choice.name+' theme, '+choice.description);
    option.innerHTML='<span class="theme-preview theme-preview--'+choice.id+'" aria-hidden="true"><span class="theme-preview-header"></span><span class="theme-preview-body"><span class="theme-preview-nav"></span><span class="theme-preview-card"><i></i><i></i><i></i></span></span></span><span class="theme-option-name">'+choice.emoji+' '+choice.name+'</span><span class="theme-option-description">'+choice.description+'</span>';
    option.addEventListener('click',()=>{apply(choice.id);toggle(false);button.focus()});
    grid.appendChild(option);
  }
  function apply(id) {
    const choice=choices.find(c=>c.id===id)||choices[0];
    document.body.dataset.theme=choice.id;
    button.textContent='🎨 '+choice.name;
    button.setAttribute('aria-label','Current theme: '+choice.name+'. Choose a theme');
    grid.querySelectorAll('button').forEach(option=>option.setAttribute('aria-pressed',String(option.dataset.themeChoice===choice.id)));
    try {localStorage.setItem(key,choice.id)}catch(_){}
  }
  function toggle(open) {panel.hidden=!open;button.setAttribute('aria-expanded',String(open))}
  button.addEventListener('click',()=>toggle(panel.hidden));
  document.addEventListener('keydown',e=>{if(e.key==='Escape'&&!panel.hidden){toggle(false);button.focus()}});
  document.addEventListener('pointerdown',e=>{if(!root.contains(e.target))toggle(false)});
  apply(initial);
})();
