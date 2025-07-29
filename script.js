//your JS code here. If required.
function getCookie(name) {
      const value = `; ${document.cookie}`;
      const parts = value.split(`; ${name}=`);
      if (parts.length === 2) return parts.pop().split(';').shift();
    }

    // Apply saved preferences on page load
    function applyPreferences() {
      const size = getCookie('fontsize');
      const color = getCookie('fontcolor');

      if (size) {
        document.documentElement.style.setProperty('--fontsize', size + 'px');
        document.getElementById('fontsize').value = size;
      }

      if (color) {
        document.documentElement.style.setProperty('--fontcolor', color);
        document.getElementById('fontcolor').value = color;
      }
    }

    // Save preferences to cookies
    document.getElementById('fontForm').addEventListener('submit', function (e) {
      e.preventDefault();

      const fontSize = document.getElementById('fontsize').value;
      const fontColor = document.getElementById('fontcolor').value;

      // Save cookies (expires in 30 days)
      document.cookie = `fontsize=${fontSize}; path=/; max-age=${60 * 60 * 24 * 30}`;
      document.cookie = `fontcolor=${fontColor}; path=/; max-age=${60 * 60 * 24 * 30}`;

      // Apply immediately
      document.documentElement.style.setProperty('--fontsize', fontSize + 'px');
      document.documentElement.style.setProperty('--fontcolor', fontColor);
    });

    // Initial setup
    applyPreferences();
