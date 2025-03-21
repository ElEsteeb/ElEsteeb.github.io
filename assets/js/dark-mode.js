try {
  setTimeout(function() {
    const darkModeToggle = document.querySelector('.dark-mode-toggle');
    console.log('Dark mode toggle element:', darkModeToggle);
    if (darkModeToggle) {
      const toggleDarkMode = () => {
        console.log('Before toggling - Body classes:', document.body.classList.toString());
        document.body.classList.toggle('dark-mode');
        document.body.classList.toggle('light-mode');
        console.log('After toggling - Body classes:', document.body.classList.toString());
        localStorage.setItem('darkMode', document.body.classList.contains('dark-mode') ? 'enabled' : 'disabled');
      };
      darkModeToggle.addEventListener('click', toggleDarkMode);
      darkModeToggle.addEventListener('touchstart', toggleDarkMode);
    } else {
      console.error('Dark mode toggle button not found');
    }

    const storedDarkMode = localStorage.getItem('darkMode');
    const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (storedDarkMode) {
      if (storedDarkMode === 'enabled') {
        document.body.classList.add('dark-mode');
        document.body.classList.remove('light-mode');
      } else {
        document.body.classList.add('light-mode');
        document.body.classList.remove('dark-mode');
      }
    } else {
      if (prefersDarkMode) {
        document.body.classList.add('dark-mode');
        document.body.classList.remove('light-mode');
        localStorage.setItem('darkMode', 'enabled');
      } else {
        document.body.classList.add('light-mode');
        document.body.classList.remove('dark-mode');
        localStorage.setItem('darkMode', 'disabled');
      }
    }
  }, 100);
} catch (e) {
  console.error('Error in dark mode toggle script:', e);
}
