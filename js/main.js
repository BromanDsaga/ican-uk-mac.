// main.js - FIXED FOR MAC SAFARI - Resilient loader
import { initScroll } from './scroll.js';
import { initReveal } from './reveal.js';
import { initParallax } from './parallax.js';
import { initCards } from './cards.js';
import { initTimeline } from './timeline.js';
import { initObjectives } from './objectives.js';
import { initMagazine } from './magazine.js';
import { initCountdown } from './countdown.js';
import { initThree } from './three/init.js';

async function init(){
  // Each init wrapped in try/catch so one failure doesn't blank the page on Mac
  try{ initScroll(); }catch(e){ console.warn('initScroll failed', e); }
  try{ initReveal(); }catch(e){ 
    console.warn('initReveal failed, forcing visible', e);
    document.querySelectorAll('[data-reveal]').forEach(el=>el.classList.add('is-visible'));
  }
  try{ initParallax(); }catch(e){ console.warn('initParallax failed', e); }
  try{ initCards(); }catch(e){ console.warn('initCards failed', e); }
  try{ initTimeline(); }catch(e){ console.warn('initTimeline failed', e); }
  try{ initObjectives(); }catch(e){ console.warn('initObjectives failed', e); }
  try{ initMagazine(); }catch(e){ console.warn('initMagazine failed', e); }
  try{ initCountdown(); }catch(e){ console.warn('initCountdown failed', e); }
  try{ await initThree(); }catch(e){ console.warn('initThree failed', e); }

  // Final safety: ensure content visible after all inits
  setTimeout(() => {
    document.querySelectorAll('[data-reveal]:not(.is-visible)').forEach(el => {
      el.classList.add('is-visible');
    });
  }, 500);
}

function safeInit(){
  try{
    init();
  }catch(e){
    console.error('Critical init failed, forcing content visible for Mac Safari', e);
    document.querySelectorAll('[data-reveal]').forEach(el=>el.classList.add('is-visible'));
  }
}

if(document.readyState === 'loading'){
  document.addEventListener('DOMContentLoaded', safeInit);
} else {
  safeInit();
}

// Global error handler for Mac Safari module errors
window.addEventListener('error', (e) => {
  if(e.message && e.message.includes('is not defined')){
    document.querySelectorAll('[data-reveal]').forEach(el=>el.classList.add('is-visible'));
  }
});
