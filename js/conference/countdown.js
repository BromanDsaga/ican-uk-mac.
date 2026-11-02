
import { conferenceData } from './data.js';

export function initCountdown(){
  const el = document.getElementById('earlyBirdCountdown');
  const dateEl = document.getElementById('earlyBirdDate');
  if(!el) return;

  const deadline = new Date(conferenceData.registration.earlyBirdDeadline).getTime();
  if(dateEl){
    dateEl.textContent = new Date(conferenceData.registration.earlyBirdDeadline).toLocaleDateString('en-GB', { day:'numeric', month:'long', year:'numeric' });
  }

  function tick(){
    const now = Date.now();
    let diff = deadline - now;
    if(diff <= 0){
      el.innerHTML = `<div style="color:rgba(248,247,243,.6); font-size:.9rem;">Early bird ended. Standard pricing now applies.</div>`;
      return;
    }
    const d = Math.floor(diff / 86400000); diff %= 86400000;
    const h = Math.floor(diff / 3600000); diff %= 3600000;
    const m = Math.floor(diff / 60000); diff %= 60000;
    const s = Math.floor(diff / 1000);

    el.querySelector('[data-days]') && (el.querySelector('[data-days]').textContent = String(d).padStart(2,'0'));
    el.querySelector('[data-hours]') && (el.querySelector('[data-hours]').textContent = String(h).padStart(2,'0'));
    el.querySelector('[data-mins]') && (el.querySelector('[data-mins]').textContent = String(m).padStart(2,'0'));
    el.querySelector('[data-secs]') && (el.querySelector('[data-secs]').textContent = String(s).padStart(2,'0'));
  }

  // Build structure if not present
  if(!el.querySelector('[data-days]')){
    el.innerHTML = `
      <div class="eb-countdown__label">Early bird ends in — <span id="earlyBirdDate"></span></div>
      <div class="eb-countdown__grid">
        <div class="eb-countdown__box"><b data-days>00</b><span>Days</span></div>
        <div class="eb-countdown__box"><b data-hours>00</b><span>Hours</span></div>
        <div class="eb-countdown__box"><b data-mins>00</b><span>Minutes</span></div>
        <div class="eb-countdown__box"><b data-secs>00</b><span>Seconds</span></div>
      </div>
    `;
    if(dateEl) el.querySelector('#earlyBirdDate')?.replaceWith(dateEl);
  }

  tick();
  setInterval(tick, 1000);
}
