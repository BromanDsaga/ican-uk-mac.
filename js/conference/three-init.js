
// three-init.js for conference - ambient particles only 0-10% visual
export async function initConferenceThree(){
  const canvas = document.getElementById('conf-three-canvas');
  if(!canvas) return;
  if(window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  if(!('WebGLRenderingContext' in window)) return;

  const quality = getDeviceQuality();
  if(quality === 'low') return;

  try{
    const THREE = await import('three');
    const count = quality === 'high' ? 500 : quality === 'medium' ? 250 : 120;
    
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(60, canvas.clientWidth / canvas.clientHeight, 0.1, 1000);
    camera.position.z = 5;

    const renderer = new THREE.WebGLRenderer({canvas, alpha:true, antialias:true});
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    renderer.setSize(canvas.clientWidth, canvas.clientHeight, false);
    renderer.setClearColor(0x000000, 0);

    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(count * 3);
    const opacities = new Float32Array(count);
    for(let i=0;i<count;i++){
      positions[i*3] = (Math.random()-0.5)*14;
      positions[i*3+1] = (Math.random()-0.5)*8;
      positions[i*3+2] = (Math.random()-0.5)*8 -1;
      opacities[i] = Math.random()*0.5+0.12;
    }
    geometry.setAttribute('position', new THREE.BufferAttribute(positions,3));
    geometry.setAttribute('alpha', new THREE.BufferAttribute(opacities,1));

    const material = new THREE.PointsMaterial({
      size: 0.022,
      color: 0xB09563,
      transparent:true,
      opacity:0.62,
      sizeAttenuation:true,
      depthWrite:false
    });

    const points = new THREE.Points(geometry, material);
    scene.add(points);

    function animate(){
      const t = Date.now()*0.00018;
      points.rotation.y = t*0.22;
      points.rotation.x = Math.sin(t*0.18)*0.12;
      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    }
    animate();

    window.addEventListener('resize', ()=>{
      camera.aspect = canvas.clientWidth / canvas.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(canvas.clientWidth, canvas.clientHeight, false);
    });
  }catch(e){
    console.warn('Conference Three.js optional layer failed', e);
  }
}

function getDeviceQuality(){
  const mem = navigator.deviceMemory || 4;
  const cores = navigator.hardwareConcurrency || 4;
  const isMobile = /Mobi|Android/i.test(navigator.userAgent);
  if(mem <= 2 || cores <= 2) return 'low';
  if(isMobile) return 'medium';
  if(mem <= 4) return 'medium';
  return 'high';
}
