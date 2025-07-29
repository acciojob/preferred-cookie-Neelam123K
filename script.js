//your JS code here. If required.
document.addEventListener('DOMContentLoaded', () => {
    // Function to get a cookie by name
    function getCookie(name) {
        let cookieArr = document.cookie.split(";");
        for (let i = 0; i < cookieArr.length; i++) {
            let cookiePair = cookieArr[i].split("=");
            if (name == cookiePair[0].trim()) {
                return decodeURIComponent(cookiePair[1]);
            }
        }
        return null;
    }

    // Apply saved preferences on page load
    const savedFontSize = getCookie('fontsize');
    const savedFontColor = getCookie('fontcolor');

    if (savedFontSize) {
        document.documentElement.style.setProperty('--fontsize', savedFontSize + 'px');
        document.getElementById('fontsize').value = savedFontSize;
    }
    if (savedFontColor) {
        document.documentElement.style.setProperty('--fontcolor', savedFontColor);
        document.getElementById('fontcolor').value = savedFontColor;
    }

    // Handle form submission
    document.getElementById('fontForm').addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent the default form submission

        const fontSize = document.getElementById('fontsize').value;
        const fontColor = document.getElementById('fontcolor').value;

        // Set cookies
        document.cookie = `fontsize=${fontSize}; path=/;`;
        document.cookie = `fontcolor=${fontColor}; path=/;`;

        // Apply the new preferences
        document.documentElement.style.setProperty('--fontsize', fontSize + 'px');
        document.documentElement.style.setProperty('--fontcolor', fontColor);
    });
});