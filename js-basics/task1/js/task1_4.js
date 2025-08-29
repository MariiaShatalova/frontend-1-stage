const input = document.getElementById("selectorInput");
const btn = document.getElementById("toggleBtn");

btn.onclick = function () {
    const selector = input.value.trim();
    if (!selector) return;
    try {
        const elements = document.querySelectorAll(selector);
        elements.forEach(el => {
            el.classList.toggle("hidden");
        });
    } catch (e) {
        alert("Некоректний CSS-селектор!");
    }
};