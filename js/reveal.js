// reveal.js - FIXED FOR MAC SAFARI BLANK PAGE ISSUE
export function initReveal(){
  const els = document.querySelectorAll('[data-reveal]');
  if(!els.length) return;

  // FALLBACK: Force visible after 2s if IntersectionObserver doesn't fire (Mac Safari file:// safety)
  const fallbackTimer = setTimeout(() => {
    els.forEach(el => el.classList.add('is-visible'));
  }, 2000);

  if(!('IntersectionObserver' in window)){
    els.forEach(el=>el.classList.add('is-visible'));
    clearTimeout(fallbackTimer);
    return;
  }

  const observer = new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
      if(entry.isIntersecting){
        entry.target.classList.add('is-visible');
        // Web Animations API for extra polish - Safari compatible check
        try{
          if(!window.matchMedia('(prefers-reduced-motion: reduce)').matches && entry.target.animate){
            entry.target.animate(
              [{opacity:0, transform:'translateY(30px)'},{opacity:1, transform:'translateY(0)'}],
              {duration:700, easing:'cubic-bezier(.22,1,.36,1)', fill:'both'}
            );
          }
        }catch(e){
          // Safari may throw on animate, ignore
        }
        observer.unobserve(entry.target);
      }
    });
  },{threshold:0.15, rootMargin:'0px 0px -40px 0px'});

  els.forEach(el=>observer.observe(el));

  // Clear fallback if observer works quickly
  setTimeout(() => clearTimeout(fallbackTimer), 2500);
}
