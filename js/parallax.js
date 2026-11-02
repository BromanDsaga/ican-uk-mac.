// parallax.js - mouse parallax
export function initParallax(){
  if(window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  if(window.matchMedia('(pointer: coarse)').matches) return;
  let pointerX=0, pointerY=0, targetX=0, targetY=0;
  window.addEventListener('pointermove', (e)=>{
    targetX = (e.clientX / window.innerWidth - 0.5);
    targetY = (e.clientY / window.innerHeight - 0.5);
  }, {passive:true});

  function render(){
    pointerX += (targetX - pointerX) * 0.06;
    pointerY += (targetY - pointerY) * 0.06;
    document.documentElement.style.setProperty('--pointer-x', `${pointerX * 12}px`);
    document.documentElement.style.setProperty('--pointer-y', `${pointerY * 10}px`);
    requestAnimationFrame(render);
  }
  render();
}
