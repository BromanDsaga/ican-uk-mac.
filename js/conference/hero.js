
// hero.js - Conference Hero scroll + reveal
export function initConferenceHero(){
  const hero = document.querySelector('.conf-hero');
  if(!hero) return;

  // Entrance sequence
  const els = [
    document.querySelector('.conf-hero__eyebrow'),
    document.querySelector('.conf-hero__title'),
    document.querySelector('.conf-hero__meta'),
    document.querySelector('.conf-hero__actions'),
    document.querySelector('.conference-core')
  ].filter(Boolean);

  els.forEach((el, i)=>{
    el.style.opacity = '0';
    el.style.transform = 'translateY(18px)';
    setTimeout(()=>{
      el.animate(
        [{opacity:0, transform:'translateY(18px)'},{opacity:1, transform:'translateY(0)'}],
        {duration:700, delay:i*90, easing:'cubic-bezier(.22,1,.36,1)', fill:'forwards'}
      );
    }, 120 + i*120);
  });

  // Scroll behavior
  let targetScroll = window.scrollY;
  let current = window.scrollY;
  const maxScroll = () => document.documentElement.scrollHeight - window.innerHeight;

  window.addEventListener('scroll', ()=>{ targetScroll = window.scrollY; }, {passive:true});

  function lerp(a,b,t){ return a + (b-a)*t; }

  function render(){
    current = lerp(current, targetScroll, 0.08);
    const progress = Math.min(1, Math.max(0, window.scrollY / Math.max(1, maxScroll())));
    
    document.documentElement.style.setProperty('--scroll-progress', String(progress));
    document.documentElement.style.setProperty('--conference-depth', `${60 - progress*220}px`);
    document.documentElement.style.setProperty('--conference-rotate-x', `${10 + progress*14}deg`);
    document.documentElement.style.setProperty('--conference-rotate-y', `${-14 + progress*22}deg`);
    document.documentElement.style.setProperty('--conference-opacity', `${1 - progress*0.9}`);
    document.documentElement.style.setProperty('--scroll-offset', `${current*0.12}px`);

    const header = document.querySelector('.conf-header');
    if(header){
      if(window.scrollY > 20) header.classList.add('scrolled');
      else header.classList.remove('scrolled');
    }

    requestAnimationFrame(render);
  }
  render();

  // Parallax pointer
  if(!window.matchMedia('(prefers-reduced-motion: reduce)').matches){
    let tx=0, ty=0, cx=0, cy=0;
    window.addEventListener('pointermove', e=>{
      tx = (e.clientX / window.innerWidth - 0.5);
      ty = (e.clientY / window.innerHeight - 0.5);
    }, {passive:true});
    function pointerLoop(){
      cx += (tx - cx)*0.06;
      cy += (ty - cy)*0.06;
      document.documentElement.style.setProperty('--pointer-x', `${cx*14}px`);
      document.documentElement.style.setProperty('--pointer-y', `${cy*10}px`);
      requestAnimationFrame(pointerLoop);
    }
    pointerLoop();
  }
}
