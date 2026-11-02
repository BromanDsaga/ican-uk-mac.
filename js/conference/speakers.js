
import { speakers } from './data.js';

export function initSpeakers(){
  const grid = document.getElementById('speakersGrid');
  if(!grid) return;

  grid.innerHTML = speakers.map(sp=>`
    <div class="speaker-card" data-speaker-id="${sp.id}" tabindex="0" role="button" aria-label="View ${sp.name}">
      <div class="speaker-card__img">
        <img src="${sp.img}" alt="${sp.name}" loading="lazy" onerror="this.style.display='none'">
      </div>
      <div class="speaker-card__content">
        <div class="speaker-card__name">${sp.name}</div>
        <div class="speaker-card__creds">${sp.creds}</div>
        <div class="speaker-card__role">${sp.role} • ${sp.org}</div>
        <div class="speaker-card__session">${sp.session}</div>
      </div>
    </div>
  `).join('');

  // 3D tilt
  if(!window.matchMedia('(prefers-reduced-motion: reduce)').matches && !window.matchMedia('(pointer: coarse)').matches){
    grid.querySelectorAll('.speaker-card').forEach(card=>{
      card.addEventListener('pointermove', e=>{
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const rotateY = ((x / rect.width) - 0.5) * 5;
        const rotateX = ((y / rect.height) - 0.5) * -5;
        card.style.setProperty('--rotate-x', `${rotateX}deg`);
        card.style.setProperty('--rotate-y', `${rotateY}deg`);
        card.style.setProperty('--depth', `12px`);
      });
      card.addEventListener('pointerleave', ()=>{
        card.style.setProperty('--rotate-x', `0deg`);
        card.style.setProperty('--rotate-y', `0deg`);
        card.style.setProperty('--depth', `0px`);
      });
    });
  }

  // Modal
  const dialog = document.getElementById('speakerModal');
  if(!dialog) return;

  function openModal(id){
    const sp = speakers.find(s=>s.id===id);
    if(!sp) return;
    dialog.innerHTML = `
      <div class="speaker-modal__inner">
        <div class="speaker-modal__img"><img src="${sp.img}" alt="${sp.name}"></div>
        <div class="speaker-modal__body">
          <button class="speaker-modal__close" id="closeSpeakerModal" aria-label="Close">✕</button>
          <div style="font-size:.68rem; letter-spacing:.18em; text-transform:uppercase; color:var(--brass); font-weight:700;">${sp.creds}</div>
          <h3 style="margin-top:8px; font-size:1.8rem; line-height:1.1;">${sp.name}</h3>
          <div style="margin-top:8px; color:var(--muted-dark); font-size:.92rem;">${sp.role} • ${sp.org}</div>
          <p style="margin-top:18px; line-height:1.7; color:var(--muted-dark);">${sp.bio}</p>
          <div style="margin-top:20px; padding:16px; background:var(--ivory); border-radius:12px; border:1px solid var(--border-light);">
            <div style="font-size:.68rem; letter-spacing:.14em; text-transform:uppercase; color:var(--muted); font-weight:700;">Session</div>
            <div style="margin-top:6px; font-weight:600;">${sp.session}</div>
          </div>
          <div style="margin-top:20px; display:flex; gap:10px;">
            <a href="${sp.linkedin}" class="btn btn--ghost" style="padding:10px 18px;">LinkedIn</a>
            <a href="#pricing" class="btn btn--brass" style="padding:10px 18px;" onclick="document.getElementById('speakerModal').close();">Register</a>
          </div>
        </div>
      </div>
    `;
    if(typeof dialog.showModal === 'function') dialog.showModal();
    else dialog.setAttribute('open','');

    dialog.querySelector('#closeSpeakerModal')?.addEventListener('click', ()=> dialog.close());
    dialog.addEventListener('click', (e)=>{ if(e.target===dialog) dialog.close(); }, {once:true});
  }

  grid.querySelectorAll('.speaker-card').forEach(card=>{
    card.addEventListener('click', ()=> openModal(card.dataset.speakerId));
    card.addEventListener('keydown', (e)=>{ if(e.key==='Enter' || e.key===' ') { e.preventDefault(); openModal(card.dataset.speakerId); }});
  });
}
