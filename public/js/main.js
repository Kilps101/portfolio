document.addEventListener("DOMContentLoaded", () => {
  const menuButton = document.getElementById("menu-btn");
  const navMenu = document.getElementById("nav-menu");
  const navItems = document.querySelectorAll(".nav-item");

  // Close menu when clicking menu button
  menuButton.addEventListener("click", () => {
    // Toggle menu visibility
    navMenu.classList.toggle("active");
    // Animate hamburger lines
    menuButton.classList.toggle("active");
  });

  // Close menu when clicking outside of it
  document.addEventListener("click", (event) => {
    if (!menuButton.contains(event.target) && !navMenu.contains(event.target)) {
      navMenu.classList.remove("active");
      menuButton.classList.remove("active");
    }
  });

  // Close menu when a nav item is selected
  navItems.forEach((item) => {
    item.addEventListener("click", () => {
      navMenu.classList.remove("active");
      menuButton.classList.remove("active");
    });
  });
});
