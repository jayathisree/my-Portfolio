// Mobile nav toggle
const burger = document.querySelector('.hamburger');
const nav = document.querySelector('.nav-links');
if(burger){
  burger.addEventListener('click',()=>{
    nav.style.display = nav.style.display === 'flex' ? 'none' : 'flex';
    nav.style.flexDirection = 'column';
    nav.style.position = 'absolute';
    nav.style.top = '64px';
    nav.style.right = '16px';
    nav.style.background = '#fff';
    nav.style.padding = '12px';
    nav.style.border = '1px solid #E5E7EB';
    nav.style.borderRadius = '12px';
    nav.style.boxShadow = '0 10px 30px rgba(0,0,0,.08)';
  });
}

// Reveal on scroll
const observer = new IntersectionObserver((entries)=>{
  entries.forEach(e=>{
    if(e.isIntersecting){ e.target.classList.add('show'); observer.unobserve(e.target); }
  });
},{threshold:0.15});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));

// Animated counters
function animateCounter(el, target){
  const duration = 1200;
  const start = 0;
  const startTime = performance.now();
  function tick(now){
    const p = Math.min((now-startTime)/duration,1);
    el.textContent = Math.floor(p*(target-start));
    if(p<1) requestAnimationFrame(tick);
  }
  requestAnimationFrame(tick);
}
const statObserver = new IntersectionObserver((entries)=>{
  entries.forEach(e=>{
    if(e.isIntersecting){
      e.target.querySelectorAll('[data-count]').forEach(h=>animateCounter(h, parseInt(h.dataset.count,10)));
      statObserver.unobserve(e.target);
    }
  });
},{threshold:0.3});
document.querySelectorAll('.stats').forEach(s=>statObserver.observe(s));
