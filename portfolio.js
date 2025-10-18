// Header glass on scroll
const header = document.getElementById('siteHeader');
const onScroll = () => {
  if (window.scrollY > 24) header.classList.add('scrolled');
  else header.classList.remove('scrolled');
};
window.addEventListener('scroll', onScroll, { passive: true });
onScroll();

// Smooth scroll for in-page links
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const id = a.getAttribute('href').slice(1);
    const el = document.getElementById(id);
    if (el) {
      e.preventDefault();
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// Staggered reveal in hero
window.addEventListener('DOMContentLoaded', () => {
  const items = document.querySelectorAll('.hero .reveal');
  items.forEach((el, i) => setTimeout(() => el.classList.add('visible'), 200 + i * 180));
});


