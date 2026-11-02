
const faqItems = [
  ["Who can attend?","ICAN members, non-members, students, associates, and finance professionals across practice and industry."],
  ["How many CPD hours are available?","Up to 12 CPD hours for full in-person attendance. Virtual attendance offers up to 8 CPD hours."],
  ["Can non-members attend?","Yes. Non-members are welcome at non-member rates."],
  ["Is there a virtual option?","Yes. Hybrid — in-person in London plus live stream and 30-day on-demand."],
  ["What is included in the ticket?","Depends on ticket type. See pricing section for benefits."],
  ["Can I transfer my ticket?","Ticket transfers possible up to 7 days before event."],
  ["Will I receive a CPD certificate?","Yes. Digital certificates within 7 working days, subject to attendance."],
  ["Are accommodation costs included?","No. See Travel & Accommodation for negotiated hotel rates."],
  ["How do I request a visa invitation letter?","Registered delegates can request via confirmation email. For visa purposes only."],
  ["What is the cancellation policy?","Full refund up to 30 days before, 50% up to 14 days, no refund within 14 days but transfer allowed."],
  ["How can I select all previous speakers?","Use the 'Select all' button shown above the previous speakers. In the browser console you can call window.getSelectedPrevSpeakers() to return an array of selected speaker objects (name, role, img)."],
  ["How do I update the 2025 results placeholder?","Open the file and replace the placeholder text in the Results section or update the JS resultsGrid data at the top of the script. If you'd like, provide the exact results and I can inject them for you."]
];

export function renderFAQList(listEl = document.getElementById('faqList')){
  if(!listEl) return;

  const items = faqItems.map(([question, answer], index)=>`
    <div class="faq-item">
      <button class="faq-item__trigger" aria-expanded="false" aria-controls="faq-panel-${index}">${question}</button>
      <div class="faq-item__panel" id="faq-panel-${index}"><div class="faq-item__content">${answer}</div></div>
    </div>
  `).join('');

  listEl.innerHTML = items;

  listEl.querySelectorAll('.faq-item__trigger').forEach(btn=>{
    btn.addEventListener('click', ()=>{
      const expanded = btn.getAttribute('aria-expanded') === 'true';
      btn.setAttribute('aria-expanded', String(!expanded));
      const panel = document.getElementById(btn.getAttribute('aria-controls'));
      if(panel) panel.classList.toggle('is-open', !expanded);
    });
  });
}

export function initFAQ(){
  renderFAQList();

  // Reveal
  const els = document.querySelectorAll('[data-reveal]');
  if('IntersectionObserver' in window){
    const obs = new IntersectionObserver((entries)=>{
      entries.forEach(e=>{
        if(e.isIntersecting){
          e.target.classList.add('is-visible');
          obs.unobserve(e.target);
        }
      });
    }, {threshold:0.15});
    els.forEach(el=>obs.observe(el));
  } else {
    els.forEach(el=>el.classList.add('is-visible'));
  }
}
