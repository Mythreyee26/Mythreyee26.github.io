// Mobile menu toggle
const menuBtn = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
if(menuBtn && mobileMenu) {
  menuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('show');
  });
  document.addEventListener('click', (e) => {
    if (!e.target.closest('nav') && mobileMenu.classList.contains('show')) {
      mobileMenu.classList.remove('show');
    }
  });
}

// Smooth scrolling for nav links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      if(mobileMenu) mobileMenu.classList.remove('show');
    }
  });
});

// Contact form handler
document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('contact-form');
  if(form) {
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      alert('Thank you for your message! I will get back to you soon.');
      form.reset();
    });
  }
}); 