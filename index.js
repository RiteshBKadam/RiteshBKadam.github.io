// Typed.js animation
var typed = new Typed(".auto-type", {
  strings: ["Learning, Innovating and Developing!"],
  typeSpeed: 90,
  startDelay: 450,
  backSpeed: 34,
  loop: false
});

// Smooth scroll on navigation clicks
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Custom animated cursor
const cursor = document.querySelector('.cursor');
document.addEventListener('mousemove', mouse => {
  cursor.style.top = (mouse.pageY - 15) + "px";
  cursor.style.left = (mouse.pageX - 15) + "px";
});
document.querySelectorAll('a, button, .navItems, .tech-pill, .project-card').forEach(element => {
  element.addEventListener('mouseenter', () => {
    cursor.style.transform = 'scale(1.45)';
    cursor.style.background = 'rgba(218, 157, 95, 1)';
  });
  element.addEventListener('mouseleave', () => {
    cursor.style.transform = 'scale(1)';
    cursor.style.background = 'rgba(218, 157, 95, 0.8)';
  });
});

// Reveal effects on scroll
function revealOnScroll() {
  document.querySelectorAll('.scroll-fade, .scroll-slide-up').forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 80) {
      el.classList.add('revealed');
    }
  });
}
window.addEventListener('scroll', revealOnScroll);
window.addEventListener('DOMContentLoaded', revealOnScroll);

// Contact form basic UX (prevent default submission)
document.querySelector('.contact-form').addEventListener('submit', function (e) {
  e.preventDefault();
  alert('Thank you for reaching out! I will get back to you soon.');
});
