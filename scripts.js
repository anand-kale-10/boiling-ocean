// HAMBURGER MENU
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

hamburger.addEventListener('click', () => {
  const isOpen = navLinks.style.display === 'block';

  // Toggle menu visibility
  navLinks.style.display = isOpen ? 'none' : 'block';

  // Toggle text
  hamburger.textContent = isOpen ? '☰' : '✖';
});


