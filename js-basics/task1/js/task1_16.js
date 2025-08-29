const overlay = document.getElementById("overlay");
const button = document.getElementById("showOverlay");

button.addEventListener("click", () => {
    overlay.style.display = "block";
    document.body.style.overflow = "hidden";
});

overlay.addEventListener("click", () => {
    overlay.style.display = "none";
    document.body.style.overflow = "auto";
});