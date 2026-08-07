const darkModeButton = document.getElementById("darkModeButton");
const themeColorMeta = document.getElementById("themeColor");
const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
const getStoredTheme = () => {
    try {
        return localStorage.getItem("theme");
    } catch {
        return null;
    }
};

const storeTheme = (theme) => {
    try {
        localStorage.setItem("theme", theme);
    } catch {}
};

let isDarkMode = document.documentElement.dataset.theme
    ? document.documentElement.dataset.theme === "dark"
    : getStoredTheme() === "dark" || (getStoredTheme() === null && mediaQuery.matches);

const applyTheme = () => {
    document.documentElement.dataset.theme = isDarkMode ? "dark" : "light";
    themeColorMeta.setAttribute("content", isDarkMode ? "#000000" : "#ffffff");
};

const updateButton = () => {
    const targetTheme = isDarkMode ? "light" : "dark";

    darkModeButton.textContent = targetTheme.toUpperCase();
    darkModeButton.setAttribute("aria-label", "Dark theme");
    darkModeButton.setAttribute("aria-pressed", String(isDarkMode));
};

applyTheme();
updateButton();

mediaQuery.addEventListener("change", (event) => {
    if (getStoredTheme() === null) {
        isDarkMode = event.matches;
        applyTheme();
        updateButton();
    }
});

darkModeButton.addEventListener("click", () => {
    isDarkMode = !isDarkMode;
    storeTheme(isDarkMode ? "dark" : "light");
    applyTheme();
    updateButton();
});
