try {
  setTimeout(function() {
    const darkModeToggle = document.querySelector('.dark-mode-toggle');
    console.log('Dark mode toggle element:', darkModeToggle);
    if (darkModeToggle) {
      const toggleDarkMode = () => {
        console.log('Before toggling - Body classes:', document.body.classList.toString());
        // Check the current state and set the opposite
        if (document.body.classList.contains('dark-mode')) {
          document.body.classList.remove('dark-mode');
          document.body.classList.add('light-mode');
          localStorage.setItem('darkMode', 'disabled');
        } else {
          document.body.classList.remove('light-mode');
          document.body.classList.add('dark-mode');
          localStorage.setItem('darkMode', 'enabled');
        }
        console.log('After toggling - Body classes:', document.body.classList.toString());
      };
      // Remove any existing listeners to prevent duplicates
      darkModeToggle.removeEventListener('click', toggleDarkMode);
      darkModeToggle.removeEventListener('touchstart', toggleDarkMode);
      // Add the listeners
      darkModeToggle.addEventListener('click', toggleDarkMode);
      darkModeToggle.addEventListener('touchstart', toggleDarkMode);
    } else {
      console.error('Dark mode toggle button not found');
    }

    // Initialize the mode
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
    console.log('Initial body classes:', document.body.classList.toString());
  }, 100);
} catch (e) {
  console.error('Error in dark mode toggle script:', e);
}
