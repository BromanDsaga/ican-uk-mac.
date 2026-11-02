
import { conferenceData } from './data.js';

export function initPricing(){
  const grid = document.getElementById('pricingGrid');
  if(!grid) return;

  const tickets = conferenceData.registration.tickets;
  const deadline = new Date(conferenceData.registration.earlyBirdDeadline);
  const now = new Date();
  const isEarlyBird = now < deadline;

  grid.innerHTML = tickets.map(t=>{
    const price = isEarlyBird ? t.earlyBird : t.standard;
    const otherPrice = isEarlyBird ? t.standard : null;
    return `
      <div class="pricing-card ${t.recommended ? 'pricing-card--featured' : ''}">
        <div class="pricing-card__type">${t.type} ${t.recommended ? '• Recommended' : ''}</div>
        <div class="pricing-card__price">${t.currency}${price} <small>${isEarlyBird ? '/ Early Bird' : '/ Standard'}</small></div>
        ${otherPrice ? `<div style="font-size:.78rem; color:rgba(248,247,243,.5); text-decoration:line-through;">Standard ${t.currency}${otherPrice}</div>` : ''}
        <ul class="pricing-card__list">
          ${t.benefits.map(b=>`<li>${b}</li>`).join('')}
        </ul>
        <a href="#" class="btn ${t.recommended ? 'btn--brass' : 'btn--ghost'}" style="${!t.recommended ? 'background:rgba(255,255,255,.06); color:white; border-color:rgba(255,255,255,.12);' : ''} pricing-card__cta" onclick="alert('Registration flow: Attendance → Ticket → Delegate → Payment. Connect to external platform or form.'); return false;">Register — ${t.type}</a>
      </div>
    `;
  }).join('');
}
