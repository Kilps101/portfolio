document.addEventListener('DOMContentLoaded', () => {
  const menuButton = document.getElementById('menu-btn');
  const navMenu = document.getElementById('nav-menu');

  menuButton.addEventListener('click', () => {
    // Toggle menu visibility
    navMenu.classList.toggle('active');
    // Animate hamburger lines
    menuButton.classList.toggle('active');
  });

  /* Optional: Close menu when clicking outside of it */
  document.addEventListener('click', (event) => {
    if (!menuButton.contains(event.target) && !navMenu.contains(event.target)) {
      navMenu.classList.remove('active');
      menuButton.classList.remove('active');
    }
  });
});
