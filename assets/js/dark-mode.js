try {
  document.addEventListener('DOMContentLoaded', function() {
    const darkModeToggle = document.querySelector('.dark-mode-toggle');
    if (darkModeToggle) {
      const toggleDarkMode = () => {
        console.log('Toggling dark mode');
        document.body.classList.toggle('dark-mode');
        console.log('Body classes:', document.body.classList.toString());
        localStorage.setItem('darkMode', document.body.classList.contains('dark-mode') ? 'enabled' : 'disabled');
      };
      darkModeToggle.addEventListener('click', toggleDarkMode);
      darkModeToggle.addEventListener('touchstart', toggleDarkMode);
    }

    // Load dark mode preference on page load
    if (localStorage.getItem('darkMode') === 'enabled') {
      document.body.classList.add('dark-mode');
    }
  });
} catch (e) {
  console.error('Error in dark mode toggle script:', e);
}
