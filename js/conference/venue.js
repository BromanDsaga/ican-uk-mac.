
export function initVenue(){
  // Accordions for travel/accommodation/visa
  document.querySelectorAll('.accordion__trigger').forEach(btn=>{
    btn.addEventListener('click', ()=>{
      const expanded = btn.getAttribute('aria-expanded') === 'true';
      btn.setAttribute('aria-expanded', String(!expanded));
      const panel = document.getElementById(btn.getAttribute('aria-controls'));
      if(panel) panel.classList.toggle('is-open', !expanded);
    });
  });

  // Simple map placeholder - replace with real embed when venue confirmed
  const mapEl = document.getElementById('venueMap');
  if(mapEl){
    mapEl.innerHTML = `
      <div style="width:100%; height:100%; display:grid; place-items:center; background:radial-gradient(60% 60% at 50% 30%, rgba(36,78,59,.18), transparent), linear-gradient(180deg, #F2EFE7, #D9D5CC); color:var(--muted); text-align:center; padding:24px;">
        <div>
          <div style="font-size:.7rem; letter-spacing:.18em; text-transform:uppercase; font-weight:700;">Map Placeholder</div>
          <div style="margin-top:8px; font-weight:600; color:var(--ink);">[VENUE MAP - Replace with Google Maps embed when venue confirmed]</div>
          <a href="https://maps.google.com/?q=London" target="_blank" rel="noopener" class="btn btn--ghost" style="margin-top:16px; padding:10px 18px;">Open in Google Maps</a>
        </div>
      </div>
    `;
  }
}
