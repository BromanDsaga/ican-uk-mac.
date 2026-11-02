// three/particles.js
export function initParticles(THREE, canvas, quality){
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(60, canvas.clientWidth / canvas.clientHeight, 0.1, 1000);
  camera.position.z = 5;

  const renderer = new THREE.WebGLRenderer({canvas, alpha:true, antialias:true});
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.6));
  renderer.setSize(canvas.clientWidth, canvas.clientHeight, false);
  renderer.setClearColor(0x000000, 0);

  const count = quality === 'high' ? 600 : 280;
  const geometry = new THREE.BufferGeometry();
  const positions = new Float32Array(count * 3);
  const opacities = new Float32Array(count);

  for(let i=0;i<count;i++){
    positions[i*3] = (Math.random()-0.5)*12;
    positions[i*3+1] = (Math.random()-0.5)*7;
    positions[i*3+2] = (Math.random()-0.5)*6 -1;
    opacities[i] = Math.random()*0.6+0.15;
  }
  geometry.setAttribute('position', new THREE.BufferAttribute(positions,3));
  geometry.setAttribute('alpha', new THREE.BufferAttribute(opacities,1));

  const material = new THREE.PointsMaterial({
    size: 0.02,
    color: 0xB09563,
    transparent:true,
    opacity:0.7,
    sizeAttenuation:true,
    depthWrite:false
  });

  const points = new THREE.Points(geometry, material);
  scene.add(points);

  let mouseX=0, mouseY=0;
  window.addEventListener('pointermove', e=>{
    mouseX = (e.clientX/window.innerWidth -0.5)*0.4;
    mouseY = (e.clientY/window.innerHeight -0.5)*0.25;
  }, {passive:true});

  function animate(){
    const t = Date.now()*0.0002;
    points.rotation.y = t*0.3 + mouseX;
    points.rotation.x = Math.sin(t*0.2)*0.15 + mouseY;
    const pos = geometry.attributes.position.array;
    for(let i=0;i<count;i++){
      pos[i*3+1] += Math.sin(t + i*0.1)*0.0005;
    }
    geometry.attributes.position.needsUpdate = true;
    renderer.render(scene, camera);
    requestAnimationFrame(animate);
  }
  animate();

  window.addEventListener('resize', ()=>{
    camera.aspect = canvas.clientWidth / canvas.clientHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(canvas.clientWidth, canvas.clientHeight, false);
  });
}
