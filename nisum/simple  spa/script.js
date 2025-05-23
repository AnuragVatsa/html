// script.js
// Basic SPA navigation (optional interactivity)
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const targetId = link.getAttribute('href').substring(1);
    document.querySelectorAll('section').forEach(section => {
      section.style.display = section.id === targetId ? 'block' : 'none';
    });
  });
});