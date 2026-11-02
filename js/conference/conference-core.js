
// conference-core.js - subtle idle motion
export function initConferenceCore(){
  const core = document.querySelector('.conference-core');
  if(!core) return;
  if(window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  let t = 0;
  function animate(){
    t += 0.003;
    const y = Math.sin(t)*4;
    const rx = Math.sin(t*0.6)*1.2;
    const ry = Math.cos(t*0.5)*1.4;
    core.style.setProperty('--idle-y', `${y}px`);
    core.style.setProperty('--idle-rx', `${rx}deg`);
    core.style.setProperty('--idle-ry', `${ry}deg`);
    // combine with scroll vars via transform in CSS
    requestAnimationFrame(animate);
  }
  animate();
}
