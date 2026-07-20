// ================================================================
// NAVIGATION - Burger Menu
// ================================================================
const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');
const navLinksItems = document.querySelectorAll('.nav-link');

burger.addEventListener('click', () => {
  burger.classList.toggle('active');
  navLinks.classList.toggle('open');
});

// Fermer le menu au clic sur un lien
navLinksItems.forEach(link => {
  link.addEventListener('click', () => {
    burger.classList.remove('active');
    navLinks.classList.remove('open');
  });
});

// ================================================================
// NAVBAR - Scroll effect (ombre)
// ================================================================
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// ================================================================
// ACTIVE LINK - Suivi des sections au scroll
// ================================================================
const sections = document.querySelectorAll('section[id]');

function updateActiveLink() {
  let current = '';
  const scrollY = window.scrollY;

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 120; // offset pour la navbar
    const sectionHeight = section.offsetHeight;

    if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
      current = section.getAttribute('id');
    }
  });

  navLinksItems.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === '#' + current) {
      link.classList.add('active');
    }
  });
}

// Écouter l'événement scroll
window.addEventListener('scroll', updateActiveLink);

// Exécuter au chargement de la page pour initialiser
document.addEventListener('DOMContentLoaded', updateActiveLink);