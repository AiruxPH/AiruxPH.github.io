/* Accessible theme selector with saved preference. */
(function () {
  const key='airux-portfolio-theme';
  const choices=[['glass','✨ Glass'],['arcade','🎮 Arcade'],['pixel','👾 Pixel'],['minimal','☀️ Minimal']];
  const supported=choices.map(([id])=>id);
  let initial='glass';
  try {const stored=localStorage.getItem(key);initial=stored==='cartoon'?'arcade':supported.includes(stored)?stored:'glass'}catch(_){}
  const root=document.createElement('div');
  root.className='theme-picker';
  root.innerHTML='<button type="button" id="theme-switcher" class="theme-switcher" aria-haspopup="true" aria-expanded="false" aria-controls="theme-options">🎨 Themes</button><div id="theme-options" class="theme-options" hidden role="group" aria-label="Choose portfolio theme"></div>';
  document.body.appendChild(root);
  const button=root.querySelector('#theme-switcher'),panel=root.querySelector('#theme-options');
  for(const [id,label] of choices) {
    const option=document.createElement('button');
    option.type='button';option.dataset.themeChoice=id;option.textContent=label;
    option.addEventListener('click',()=>{apply(id);toggle(false);button.focus()});
    panel.appendChild(option);
  }
  function apply(id) {
    document.body.dataset.theme=id;
    button.textContent='🎨 '+choices.find(([value])=>value===id)[1].split(' ').slice(1).join(' ');
    button.setAttribute('aria-label','Current theme: '+id+'. Choose a theme');
    panel.querySelectorAll('button').forEach(option=>option.setAttribute('aria-pressed',String(option.dataset.themeChoice===id)));
    try {localStorage.setItem(key,id)}catch(_){}
  }
  function toggle(open) {panel.hidden=!open;button.setAttribute('aria-expanded',String(open))}
  button.addEventListener('click',()=>toggle(panel.hidden));
  document.addEventListener('keydown',e=>{if(e.key==='Escape'&&!panel.hidden){toggle(false);button.focus()}});
  document.addEventListener('pointerdown',e=>{if(!root.contains(e.target))toggle(false)});
  apply(initial);
})();
