document.addEventListener("DOMContentLoaded", () => {
  const menuButton = document.getElementById("menu-btn");
  const navMenu = document.getElementById("nav-menu");
  const navItems = document.querySelectorAll(".nav-item");

  // Open and close menu when clicking menu button
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

document.querySelectorAll(".accordion-btn").forEach((button) => {
  button.addEventListener("click", () => {
    const targetId = button.getAttribute("aria-controls");
    const targetContent = document.getElementById(targetId);

    if (!targetContent) return;

    // Check if currently expanded
    const isExpanded = button.getAttribute("aria-expanded");

    // Toggle aria-expanded state
    button.setAttribute("aria-expanded", !isExpanded);

    // Toggle visibility
    targetContent.classList.toggle("active");
    button.classList.toggle("active");

    // // Optional: Close other open items (Single-expand behavior)
    // document.querySelectorAll(".accordion-item").forEach((otherItem) => {
    //   if (otherItem !== item) otherItem.classList.remove("active");
    // });

    // // Toggle the current item
    // item.classList.toggle("active");
  });
});
