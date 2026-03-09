/* =============================================
   MAIN.JS — Shared scripts used on every page
============================================= */

// Scroll reveal animation
const reveals = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => entry.target.classList.add('visible'), i * 80);
    }
  });
}, { threshold: 0.1 });
reveals.forEach(el => observer.observe(el));

// Active nav highlight based on scroll position
const sections = document.querySelectorAll('section[id]');
const navPills = document.querySelectorAll('.nav-pill');
window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(s => {
    if (window.scrollY >= s.offsetTop - 100) current = s.id;
  });
  navPills.forEach(p => {
    p.classList.remove('active');
    if (p.getAttribute('href') === '#' + current) p.classList.add('active');
    // Also handle subpage links like "projects.html"
    if (p.getAttribute('href') && p.getAttribute('href').includes(current)) p.classList.add('active');
  });
});