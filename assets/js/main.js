document.addEventListener('DOMContentLoaded', function() {
  const menuToggle = document.querySelector('.menu-toggle');
  const navLinks = document.querySelector('.nav-links');
  if (menuToggle) {
    menuToggle.addEventListener('click', function() {
      navLinks.classList.toggle('active');
      menuToggle.classList.toggle('active');
    });
  }

  const darkModeToggle = document.querySelector('.dark-mode-toggle');
  if (darkModeToggle) {
    darkModeToggle.addEventListener('click', function() {
      const body = document.body;
      body.classList.toggle('dark-mode');
      const isDark = body.classList.contains('dark-mode');
      if (isDark) {
        body.classList.remove('light-mode');
        localStorage.setItem('darkMode', 'enabled');
        darkModeToggle.textContent = '☀';
      } else {
        body.classList.add('light-mode');
        localStorage.setItem('darkMode', 'disabled');
        darkModeToggle.textContent = '☾';
      }
    });

    const savedDarkMode = localStorage.getItem('darkMode');
    if (savedDarkMode === 'enabled') {
      document.body.classList.add('dark-mode');
      document.body.classList.remove('light-mode');
      darkModeToggle.textContent = '☀';
    } else {
      document.body.classList.add('light-mode');
      darkModeToggle.textContent = '☾';
    }
  }
});
