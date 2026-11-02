import { initConferenceHero } from './hero.js';
import { initConferenceCore } from './conference-core.js';
import { initAgenda } from './agenda.js';
import { initSpeakers } from './speakers.js';
import { initPricing } from './pricing.js';
import { initCountdown } from './countdown.js';
import { initVenue } from './venue.js';
import { initFAQ } from './faq.js';
import { initConferenceThree } from './three-init.js';

function initConferencePage(){
  try{ initConferenceHero(); }catch(e){ console.warn('hero failed', e); }
  try{ initConferenceCore(); }catch(e){ console.warn('core failed', e); }
  try{ initAgenda(); }catch(e){ console.warn('agenda failed', e); }
  try{ initSpeakers(); }catch(e){ console.warn('speakers failed', e); }
  try{ initPricing(); }catch(e){ console.warn('pricing failed', e); }
  try{ initCountdown(); }catch(e){ console.warn('countdown failed', e); }
  try{ initVenue(); }catch(e){ console.warn('venue failed', e); }
  try{ initFAQ(); }catch(e){ console.warn('faq failed', e); }
  try{ initConferenceThree(); }catch(e){ console.warn('three failed', e); }

  // Fallback for reveal
  setTimeout(() => {
    document.querySelectorAll('[data-reveal]').forEach(el=>el.classList.add('is-visible'));
  }, 1000);

  // Mobile register bar
  try{
    const bar = document.getElementById('mobileRegisterBar');
    const hero = document.querySelector('.conf-hero');
    if(bar && hero && 'IntersectionObserver' in window){
      const obs = new IntersectionObserver((entries)=>{
        entries.forEach(entry=>{
          if(!entry.isIntersecting){
            bar.classList.add('is-visible');
          } else {
            bar.classList.remove('is-visible');
          }
        });
      }, {threshold:0});
      obs.observe(hero);
    }
  }catch(e){ console.warn('mobile bar failed', e); }

  // Sticky nav active state
  try{
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.conf-nav a[href^="#"]');
    if('IntersectionObserver' in window && sections.length){
      const obs = new IntersectionObserver((entries)=>{
        entries.forEach(entry=>{
          if(entry.isIntersecting){
            navLinks.forEach(a=>a.classList.remove('is-active'));
            const active = document.querySelector(`.conf-nav a[href="#${entry.target.id}"]`);
            if(active) active.classList.add('is-active');
          }
        });
      }, {threshold:0.4});
      sections.forEach(s=>obs.observe(s));
    }
  }catch(e){ console.warn('nav active failed', e); }
}

function safeInit(){
  try{
    initConferencePage();
  }catch(e){
    console.error('Conference init critical fail, forcing visible', e);
    document.querySelectorAll('[data-reveal]').forEach(el=>el.classList.add('is-visible'));
  }
}

if(document.readyState === 'loading'){
  document.addEventListener('DOMContentLoaded', safeInit);
} else {
  safeInit();
}
