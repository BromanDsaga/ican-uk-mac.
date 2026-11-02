// scroll.js - native lerp scroll
export function initScroll(){
  let targetScroll = window.scrollY;
  let currentScroll = window.scrollY;
  const header = document.querySelector('.header');

  window.addEventListener('scroll', ()=>{
    targetScroll = window.scrollY;
  }, {passive:true});

  function render(){
    currentScroll += (targetScroll - currentScroll) * 0.08;
    const max = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
    const progress = Math.min(1, Math.max(0, window.scrollY / max));

    document.documentElement.style.setProperty('--page-scroll', String(currentScroll));
    document.documentElement.style.setProperty('--scroll-progress', String(progress));
    document.documentElement.style.setProperty('--scroll-offset', `${currentScroll * 0.15}px`);
    document.documentElement.style.setProperty('--core-depth', `${80 - progress*380}px`);
    document.documentElement.style.setProperty('--core-rotate-x', `${8 + progress*12}deg`);
    document.documentElement.style.setProperty('--core-rotate-y', `${-12 + progress*18}deg`);
    document.documentElement.style.setProperty('--network-scale', `${1 + progress*0.25}`);
    document.documentElement.style.setProperty('--hero-fade', `${1 - progress*1.2}`);

    if(header){
      if(window.scrollY > 20) header.classList.add('scrolled');
      else header.classList.remove('scrolled');
    }
    requestAnimationFrame(render);
  }
  render();
}
