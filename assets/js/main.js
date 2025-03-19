// Your JavaScript code here
document.addEventListener('DOMContentLoaded', function() {
  // Mobile menu toggle
  const menuToggle = document.querySelector('.menu-toggle');
  if (menuToggle) {
    menuToggle.addEventListener('click', function() {
      document.querySelector('.nav-links').classList.toggle('active');
    });
  }
  
  // Any other JavaScript functionality
  // Dark mode toggle functionality
const darkModeToggle = document.querySelector('.dark-mode-toggle');
if (darkModeToggle) {
  darkModeToggle.addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
    // Optionally save preference in localStorage
    if (document.body.classList.contains('dark-mode')) {
      localStorage.setItem('darkMode', 'enabled');
    } else {
      localStorage.setItem('darkMode', 'disabled');
    }
  });
  
  // Check for saved user preference
  if (localStorage.getItem('darkMode') === 'enabled') {
    document.body.classList.add('dark-mode');
  }
}
});
