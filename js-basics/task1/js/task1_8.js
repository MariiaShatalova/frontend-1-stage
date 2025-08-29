const input_task8 = document.getElementById("task8-img-link");
const button_task8 = document.getElementById("task8-show-btn");
const result_task8 = document.getElementById("task8-result");

button_task8.addEventListener("click", () => {
    const url = input_task8.value.trim();
    result_task8.innerHTML = "";

    if (url) {
        const img = document.createElement("img");
        img.src = url;
        img.alt = "Завантажене зображення";
        img.style.maxWidth = "300px";

        result_task8.appendChild(img);
    }
});