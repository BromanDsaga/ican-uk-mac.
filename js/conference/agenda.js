
import { conferenceSessions, speakers } from './data.js';

export function initAgenda(){
  const listEl = document.getElementById('agendaList');
  const filtersEl = document.getElementById('agendaFilters');
  if(!listEl || !filtersEl) return;

  let activeFilter = 'all';

  function getSpeakerNames(ids){
    return ids.map(id=> speakers.find(s=>s.id===id)?.name).filter(Boolean).join(', ');
  }

  function render(filter='all'){
    const filtered = conferenceSessions.filter(s=>{
      if(filter==='all') return true;
      if(filter==='day-1') return s.day==='day-1';
      if(filter==='day-2') return s.day==='day-2';
      if(filter==='virtual') return s.format==='virtual';
      return true;
    });

    listEl.innerHTML = filtered.map(sess=>{
      const speakerNames = getSpeakerNames(sess.speakerIds);
      return `
        <div class="agenda-session" data-session-id="${sess.id}" tabindex="0" role="button" aria-label="View session ${sess.title}">
          <div class="agenda-session__time">${sess.startTime} — ${sess.endTime}</div>
          <div class="agenda-session__type agenda-session__type--${sess.type}">${sess.type}</div>
          <div class="agenda-session__main">
            <div class="agenda-session__title">${sess.title}</div>
            ${speakerNames ? `<div class="agenda-session__speaker">${speakerNames}</div>` : ''}
          </div>
          <div class="agenda-session__action">→</div>
        </div>
      `;
    }).join('');

    // Bind clicks
    listEl.querySelectorAll('.agenda-session').forEach(el=>{
      el.addEventListener('click', ()=> openSessionDrawer(el.dataset.sessionId));
      el.addEventListener('keydown', (e)=>{ if(e.key==='Enter' || e.key===' ') { e.preventDefault(); openSessionDrawer(el.dataset.sessionId); }});
    });
  }

  function openSessionDrawer(sessionId){
    const sess = conferenceSessions.find(s=>s.id===sessionId);
    if(!sess) return;
    const drawer = document.getElementById('sessionDrawer');
    const backdrop = document.getElementById('drawerBackdrop');
    if(!drawer) return;

    const speakerNames = sess.speakerIds.map(id=> speakers.find(s=>s.id===id)).filter(Boolean);

    drawer.innerHTML = `
      <div class="session-drawer__header">
        <div>
          <div class="mono" style="color:var(--brass)">${sess.type} • ${sess.day.toUpperCase()} • ${sess.startTime}–${sess.endTime}</div>
          <h3 style="margin-top:10px;font-size:1.6rem;line-height:1.1">${sess.title}</h3>
        </div>
        <button class="session-drawer__close" id="closeDrawer" aria-label="Close">✕</button>
      </div>
      <div style="padding:28px; display:flex; flex-direction:column; gap:20px;">
        <p style="line-height:1.7; color:var(--muted-dark)">${sess.description}</p>
        ${speakerNames.length ? `
          <div>
            <div style="font-size:.68rem; letter-spacing:.18em; text-transform:uppercase; color:var(--muted); font-weight:700;">Speakers</div>
            <div style="margin-top:12px; display:flex; flex-direction:column; gap:12px;">
              ${speakerNames.map(sp=>`
                <div style="display:flex; gap:12px; align-items:center;">
                  <img src="${sp.img}" alt="${sp.name}" style="width:44px;height:44px;border-radius:50%;object-fit:cover;">
                  <div><div style="font-weight:700;">${sp.name}</div><div style="font-size:.82rem; color:var(--muted);">${sp.role}, ${sp.org}</div></div>
                </div>
              `).join('')}
            </div>
          </div>
        ` : ''}
        <div style="display:flex; gap:12px; flex-wrap:wrap; margin-top:8px;">
          ${sess.calendarEnabled ? `<a href="#" class="btn btn--brass" onclick="alert('Calendar integration point - connect to .ics generation'); return false;">+ Calendar</a>` : ''}
          <button class="btn btn--ghost" onclick="document.getElementById('pricing').scrollIntoView({behavior:'smooth'})">Register for this session</button>
        </div>
      </div>
    `;

    drawer.classList.add('is-open');
    backdrop?.classList.add('is-visible');
    document.body.style.overflow='hidden';

    drawer.querySelector('#closeDrawer')?.addEventListener('click', closeDrawer);
    backdrop?.addEventListener('click', closeDrawer, {once:true});

    function closeDrawer(){
      drawer.classList.remove('is-open');
      backdrop?.classList.remove('is-visible');
      document.body.style.overflow='';
    }
    // Escape
    const esc = (e)=>{ if(e.key==='Escape'){ closeDrawer(); window.removeEventListener('keydown', esc);} };
    window.addEventListener('keydown', esc);
  }

  // Filters
  filtersEl.querySelectorAll('.agenda-filter').forEach(btn=>{
    btn.addEventListener('click', ()=>{
      filtersEl.querySelectorAll('.agenda-filter').forEach(b=>b.classList.remove('is-active'));
      btn.classList.add('is-active');
      activeFilter = btn.dataset.filter;
      render(activeFilter);
    });
  });

  render('all');
}
