// script.js

// // Add a click event listener to the button
// downloadCVButton.addEventListener('click', function(event) {
//     // Check if Ctrl (or Cmd on Mac) is pressed
//     if (event.ctrlKey || event.metaKey) {
//         // Open the link in a new tab
//         window.open('https://nehalahmedshaikh.github.io/nehal_cv.pdf', '_blank');
//     } else {
//         // Redirect in the same tab
//         window.location.href = 'https://nehalahmedshaikh.github.io/nehal_cv.pdf';
//     }    
// });

// // Add a click event listener to the button
// githubButton.addEventListener('click', function(event) {
//     // Check if Ctrl (or Cmd on Mac) is pressed
//     if (event.ctrlKey || event.metaKey) {
//         // Open the link in a new tab
//         window.open('https://github.com/nehalahmedshaikh', '_blank');
//     } else {
//         // Redirect in the same tab
//         window.location.href = 'https://github.com/nehalahmedshaikh';
//     }
// });

const darkModeButton = document.getElementById("darkModeButton");
const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

let isDarkMode = mediaQuery.matches;

const applyTheme = () => {
    if (isDarkMode) {
        document.body.classList.remove("dark-mode");
    } else {
        document.body.classList.add("dark-mode");
    }
};

const updateButtonLabel = () => {
    darkModeButton.textContent = isDarkMode ? "LIGHT" : "DARK";
};

applyTheme();
updateButtonLabel();

mediaQuery.addEventListener("change", (event) => {
    isDarkMode = event.matches;
    applyTheme();
    updateButtonLabel();
});

darkModeButton.addEventListener("click", function() {
    isDarkMode = !isDarkMode;
    applyTheme();
    updateButtonLabel();
});
