// Ensure the script runs after the DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {

  // --- Mobile Menu Toggle ---
  const menuButton = document.getElementById('mobile-menu-button');
  const mobileMenu = document.getElementById('mobile-menu');
  const menuIcon = document.getElementById('menu-icon');
  const closeIcon = document.getElementById('close-icon');

  menuButton.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
    menuIcon.classList.toggle('hidden');
    closeIcon.classList.toggle('hidden');
  });

  // --- Smooth Scrolling for Navigation Links ---
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = this.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
        // Close mobile menu after clicking a link
        if (!mobileMenu.classList.contains('hidden')) {
          mobileMenu.classList.add('hidden');
          menuIcon.classList.remove('hidden');
          closeIcon.classList.add('hidden');
        }
      }
    });
  });

  // --- Back to Top Button Functionality ---
  const backToTopButton = document.getElementById('back-to-top');
  
  // Show or hide the button based on scroll position
  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
      backToTopButton.style.display = 'block';
    } else {
      backToTopButton.style.display = 'none';
    }
  });

  // Smooth scroll to top when clicked
  backToTopButton.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  // --- "Show more/less" Button Functionality for Work History ---
  document.querySelectorAll('.toggle-button').forEach(button => {
    const targetId = button.getAttribute('data-target');
    const targetElement = document.getElementById(targetId);

    // Initial state: hide details and set button text
    targetElement.classList.remove('expanded');
    button.textContent = 'Show more';

    button.addEventListener('click', () => {
      const isExpanded = targetElement.classList.toggle('expanded');
      button.textContent = isExpanded ? 'Show less' : 'Show more';
    });
  });
});
