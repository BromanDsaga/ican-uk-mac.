// cards.js - bigger executive photos, bright theme
export function initCards(){
  const cards = document.querySelectorAll('.leader-card');
  
  cards.forEach(card=>{
    const img = card.querySelector('.avatar-img');
    const initials = card.querySelector('.avatar-initials');
    if(img){
      const handleLoad = ()=>{
        if(img.getAttribute('src') && img.src){
          img.style.display='block';
          if(initials) initials.style.display='none';
        }
      };
      const handleError = ()=>{
        img.style.display='none';
        if(initials) initials.style.display='grid';
      };
      img.addEventListener('load', handleLoad);
      img.addEventListener('error', handleError);
      if(img.complete){
        if(img.naturalWidth > 0) handleLoad();
        else if(!img.getAttribute('src') || img.getAttribute('src') === '') handleError();
      }
    }
  });

  if(window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  
  document.querySelectorAll('.leader-card').forEach(card=>{
    card.addEventListener('pointermove', (e)=>{
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const rotateY = ((x / rect.width) - 0.5) * 5;
      const rotateX = ((y / rect.height) - 0.5) * -5;
      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-6px)`;
    });
    card.addEventListener('pointerleave', ()=>{
      card.style.transform = '';
    });
  });
}
