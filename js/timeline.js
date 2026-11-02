// timeline.js - desktop drag scrollable + mobile
export function initTimeline(){
  const row = document.getElementById('timelineRow') || document.querySelector('.timeline-row');
  const nodes = document.querySelectorAll('.timeline-node');
  const prevBtn = document.getElementById('timelinePrev');
  const nextBtn = document.getElementById('timelineNext');
  if(!row || !nodes.length) return;

  // IntersectionObserver for active state
  if('IntersectionObserver' in window){
    const obs = new IntersectionObserver((entries)=>{
      entries.forEach(entry=>{
        if(entry.isIntersecting){
          nodes.forEach(n=>n.classList.remove('is-active'));
          entry.target.classList.add('is-active');
        }
      });
    },{threshold:0.6, root: row, rootMargin:'0px -20% 0px -20%'});
    nodes.forEach(n=>obs.observe(n));
  } else {
    nodes[0]?.classList.add('is-active');
  }

  // Drag to scroll - works on desktop
  let isDown = false;
  let startX, scrollLeft;

  row.addEventListener('mousedown', (e)=>{
    isDown = true;
    row.classList.add('is-dragging');
    startX = e.pageX - row.offsetLeft;
    scrollLeft = row.scrollLeft;
  });
  row.addEventListener('mouseleave', ()=>{
    isDown = false;
    row.classList.remove('is-dragging');
  });
  row.addEventListener('mouseup', ()=>{
    isDown = false;
    row.classList.remove('is-dragging');
  });
  row.addEventListener('mousemove', (e)=>{
    if(!isDown) return;
    e.preventDefault();
    const x = e.pageX - row.offsetLeft;
    const walk = (x - startX) * 1.6;
    row.scrollLeft = scrollLeft - walk;
  });

  // Touch handled natively by overflow, but ensure smooth
  // Wheel to horizontal scroll on desktop
  row.addEventListener('wheel', (e)=>{
    if(Math.abs(e.deltaY) > Math.abs(e.deltaX) && window.innerWidth > 900){
      // Convert vertical wheel to horizontal
      if(row.scrollWidth > row.clientWidth){
        e.preventDefault();
        row.scrollLeft += e.deltaY;
      }
    }
  }, {passive:false});

  // Arrow buttons
  const scrollAmount = 320;
  prevBtn?.addEventListener('click', ()=> row.scrollBy({left: -scrollAmount, behavior:'smooth'}));
  nextBtn?.addEventListener('click', ()=> row.scrollBy({left: scrollAmount, behavior:'smooth'}));

  // Keyboard
  row.setAttribute('tabindex','0');
  row.addEventListener('keydown', (e)=>{
    if(e.key === 'ArrowLeft') row.scrollBy({left: -scrollAmount, behavior:'smooth'});
    if(e.key === 'ArrowRight') row.scrollBy({left: scrollAmount, behavior:'smooth'});
  });
}
