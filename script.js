// Basic interactive behaviors: nav toggle, music toggle, form validation, focus handling

document.addEventListener('DOMContentLoaded', function () {
  // Year in footer
  document.getElementById('year').textContent = new Date().getFullYear();

  // Nav toggle (mobile)
  const navToggle = document.getElementById('navToggle');
  const navList = document.getElementById('navList');
  navToggle && navToggle.addEventListener('click', () => {
    const expanded = navToggle.getAttribute('aria-expanded') === 'true';
    navToggle.setAttribute('aria-expanded', String(!expanded));
    navList.style.display = expanded ? 'none' : 'flex';
  });

  // Close mobile nav when clicking link
  document.querySelectorAll('.nav-link').forEach(l => {
    l.addEventListener('click', () => {
      if (window.innerWidth <= 820 && navList) {
        navList.style.display = 'none';
        navToggle.setAttribute('aria-expanded', 'false');
      }
    });
  });

  // Music toggle
  const musicBtn = document.getElementById('musicToggle');
  const bgMusic = document.getElementById('bgMusic');

  if (musicBtn && bgMusic) {
    musicBtn.addEventListener('click', () => {
      // toggle
      if (bgMusic.paused) {
        bgMusic.play().catch(()=>{ /* autoplay may be blocked */});
        musicBtn.textContent = 'Pause OST';
        musicBtn.setAttribute('aria-pressed','true');
      } else {
        bgMusic.pause();
        musicBtn.textContent = 'Play OST';
        musicBtn.setAttribute('aria-pressed','false');
      }
    });
  } else if (musicBtn) {
    // if audio file not present, disable button
    musicBtn.disabled = true;
    musicBtn.setAttribute('aria-disabled', 'true');
    musicBtn.textContent = 'No OST';
  }

  // Simple form validation
  window.validateForm = function (form){
    const name = form.name.value.trim();
    const message = form.message.value.trim();
    if(!name || !message){
      alert('Please enter your name and message.');
      return false;
    }
    // The form uses mailto: — modern browsers will open the mail client
    return true;
  };

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(a=>{
    a.addEventListener('click', function(e){
      const target = document.querySelector(this.getAttribute('href'));
      if (target){
        e.preventDefault();
        target.scrollIntoView({behavior: 'smooth', block:'start'});
        target.focus({preventScroll:true});
      }
    });
  });
});
