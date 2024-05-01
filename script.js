// script.js

// Add a click event listener to the button
downloadCVButton.addEventListener('click', function(event) {
    // Check if Ctrl (or Cmd on Mac) is pressed
    if (event.ctrlKey || event.metaKey) {
        // Open the link in a new tab
        window.open('nehalahmedshaikh.github.io/nehal_cv.pdf', '_blank');
    } else {
        // Redirect in the same tab
        window.location.href = 'nehalahmedshaikh.github.io/nehal_cv.pdf';
    }    
});

// Add a click event listener to the button
githubButton.addEventListener('click', function(event) {
    // Check if Ctrl (or Cmd on Mac) is pressed
    if (event.ctrlKey || event.metaKey) {
        // Open the link in a new tab
        window.open('https://github.com/nehalahmedshaikh', '_blank');
    } else {
        // Redirect in the same tab
        window.location.href = 'https://github.com/nehalahmedshaikh';
    }
});

document.addEventListener("DOMContentLoaded", function() {
    const darkModeButton = document.getElementById("darkModeButton");
    let isDarkMode = false; // Initial state (light mode)

    darkModeButton.addEventListener("click", function() {
        // Toggle dark mode state
        document.body.classList.toggle('dark-mode');
        isDarkMode = !isDarkMode;

        // Update the icon class based on the state
        const icon = darkModeButton.querySelector("i");
        icon.classList.toggle("fa-moon-o", !isDarkMode);
        icon.classList.toggle("fa-sun-o", isDarkMode);
    });
});

