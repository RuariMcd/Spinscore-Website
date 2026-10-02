function applyContrastMode() {
    const isEnabled = localStorage.getItem("contrastMode") === "on";

    document.body.classList.toggle("contrast-mode", isEnabled);

    const btn = document.getElementById("contrastBtn");
    if (btn) {
        btn.innerText = isEnabled ? "Normal Mode" : "Contrast Mode";
    }
}

function toggleContrast() {
    
    const isEnabled = localStorage.getItem("contrastMode") === "on";

    const newState = !isEnabled;

    localStorage.setItem("contrastMode", newState ? "on" : "off");

    document.body.classList.toggle("contrast-mode", newState);

    const btn = document.getElementById("contrastBtn");
    if (btn) {
        btn.innerText = newState ? "Normal Mode" : "Contrast Mode";
    }
}

document.addEventListener("DOMContentLoaded", () => {
    const btn = document.getElementById("contrastBtn");
    if (btn) {
        btn.addEventListener("click", toggleContrast);
    }
});


window.addEventListener("load", applyContrastMode);