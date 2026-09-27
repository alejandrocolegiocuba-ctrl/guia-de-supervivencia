(()=>{
  const core=document.createElement('script');
  core.src='madrid-ahora-core.js?v=20260928';
  core.defer=false;
  document.head.appendChild(core);

  function addParksAccess(){
    const nav=document.querySelector('.main-nav');
    if(nav&&!nav.querySelector('a[href="parques.html"]')){
      const link=document.createElement('a');
      link.href='parques.html';
      link.textContent='¿Necesitas respirar?';
      nav.appendChild(link);
    }

    const grid=document.querySelector('#secciones .clean-grid');
    if(grid&&!grid.querySelector('a[href="parques.html"]')){
      const card=document.createElement('a');
      card.className='clean-card parks-home-card';
      card.href='parques.html';
      card.innerHTML='<div class="icon-box">♧</div><small>PARQUES · JARDINES · NATURALEZA</small><h3>¿Necesitas respirar?</h3><p>Parques, jardines, flores y rincones para desconectar.</p><span class="arrow">→</span>';
      grid.appendChild(card);
    }

    if(!document.getElementById('parks-home-style')){
      const style=document.createElement('style');
      style.id='parks-home-style';
      style.textContent='.parks-home-card{background:linear-gradient(135deg,#e6efe5,#f7f0df);border:1px solid #d9e4d6}.parks-home-card .icon-box{background:#fffdf6;color:#45634d}';
      document.head.appendChild(style);
    }
  }

  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',addParksAccess);
  else addParksAccess();
})();