document.addEventListener('DOMContentLoaded', function() {
  // Mobile menu toggle
  const menuToggle = document.querySelector('.menu-toggle');
  const navLinks = document.querySelector('.nav-links');
  if (menuToggle) {
    menuToggle.addEventListener('click', function() {
      navLinks.classList.toggle('active'); // Show/hide nav links
      menuToggle.classList.toggle('active'); // Trigger hamburger to X animation
    });
  }

  // Dark mode toggle
  const darkModeToggle = document.querySelector('.dark-mode-toggle');
  if (darkModeToggle) {
    darkModeToggle.addEventListener('click', function() {
      document.body.classList.toggle('dark-mode');
      const isDark = document.body.classList.contains('dark-mode');
      localStorage.setItem('darkMode', isDark ? 'enabled' : 'disabled');
      darkModeToggle.textContent = isDark ? '☀' : '☾'; // Switch icon
    });

    // Load saved preference
    const savedDarkMode = localStorage.getItem('darkMode');
    if (savedDarkMode === 'enabled') {
      document.body.classList.add('dark-mode');
      darkModeToggle.textContent = '☀';
    } else {
      darkModeToggle.textContent = '☾';
    }
  }
});
