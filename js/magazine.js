// magazine.js - fixed display, bright
export function initMagazine(){
  const gallery = document.getElementById('magazineGallery');
  if(!gallery) return;

  function attachTilt(el){
    if(window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    if(window.matchMedia('(pointer: coarse)').matches) return;
    el.addEventListener('pointermove', (e)=>{
      const r = el.getBoundingClientRect();
      const x = (e.clientX - r.left)/r.width - 0.5;
      const y = (e.clientY - r.top)/r.height - 0.5;
      el.style.transform = `perspective(1400px) rotateY(${-10 + x*12}deg) rotateX(${3 + y*-6}deg) translateY(-8px)`;
    });
    el.addEventListener('pointerleave', ()=>{ el.style.transform=''; });
  }
  
  gallery.querySelectorAll('.mag-3d').forEach(attachTilt);

  // Ensure images display correctly - no hang
  gallery.querySelectorAll('.mag-cover-img').forEach(img=>{
    const src = img.getAttribute('src');
    if(!src || src === '' || src.includes('assets/images/magazine')){
      // Check if file exists by trying to load, if fails hide
      img.addEventListener('error', ()=>{
        img.style.display='none';
        img.style.opacity='0';
      });
      img.addEventListener('load', ()=>{
        img.style.display='block';
        img.style.opacity='1';
      });
    }
    // Force display block for valid src
    if(src && src !== ''){
      img.style.display='block';
    }
  });

  // Ensure gallery is visible
  gallery.style.opacity='1';
  gallery.style.display='grid';
}
