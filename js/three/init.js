// three/init.js - FIXED FOR MAC SAFARI
export async function initThree(){
  const canvas = document.getElementById('three-canvas');
  if(!canvas) return;
  if(window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  if(!('WebGLRenderingContext' in window)) return;

  const quality = getDeviceQuality();
  if(quality === 'low') return; // respect low-end

  try{
    // FIX: Use importmap 'three' instead of hardcoded URL for Safari compatibility
    // The importmap is shimmed by es-module-shims for Mac Safari
    const THREE = await import('three');
    // FIX: particles.js is now in same folder (js/three/particles.js) for case-sensitive Mac FS
    const { initParticles } = await import('./particles.js');
    initParticles(THREE, canvas, quality);
  }catch(e){
    console.warn('Three.js optional layer failed, CSS 3D continues (expected on Mac file://)', e);
    // Ensure canvas is hidden if Three fails
    if(canvas) canvas.style.display = 'none';
  }
}

function getDeviceQuality(){
  const mem = navigator.deviceMemory || 4;
  const cores = navigator.hardwareConcurrency || 4;
  const isMobile = /Mobi|Android/i.test(navigator.userAgent);
  if(mem <= 2 || cores <= 2 || isMobile) return 'medium';
  if(mem <= 4) return 'medium';
  return 'high';
}
