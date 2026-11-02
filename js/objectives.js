// objectives.js - constellation interaction
export function initObjectives(){
  const nodes = document.querySelectorAll('.obj-node');
  if(!nodes.length) return;
  nodes.forEach(node=>{
    node.addEventListener('click', ()=>{
      const wasActive = node.classList.contains('is-active');
      nodes.forEach(n=>n.classList.remove('is-active'));
      if(!wasActive) node.classList.add('is-active');
    });
  });
  // auto-cycle
  let idx=0;
  setInterval(()=>{
    if(document.querySelector('.obj-node:hover')) return;
    nodes.forEach(n=>n.classList.remove('is-active'));
    nodes[idx % nodes.length].classList.add('is-active');
    idx++;
  }, 4000);
}
