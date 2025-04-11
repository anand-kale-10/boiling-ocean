// HAMBURGER MENU
function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
  }

  // SCROLLNAV
  /* window.addEventListener("scroll", function () {
    const desktopnav = document.getElementById("desktopnav");
    if (window.scrollY > 50) {
      desktopnav.classList.add("scrolled");
    } else {
      desktopnav.classList.remove("scrolled");
    }
  });*/

  const arrow = document.getElementById('downArrow');
  const targetSection = document.getElementById('nextSection');

  // Hide on scroll
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      arrow.classList.add('hide');
    } else {
      arrow.classList.remove('hide');
    }
  });

  // Scroll on click
  arrow.addEventListener('click', () => {
    targetSection.scrollIntoView({ behavior: 'smooth' });
  });
    
