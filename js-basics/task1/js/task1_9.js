const textarea_task9 = document.getElementById("task9-img-links");
const button_task9 = document.getElementById("task9-show-btn");
const result_task9 = document.getElementById("task9-result");

button_task9.addEventListener("click", () => {
    const urls = textarea_task9.value.trim().split("\n");
    result_task9.innerHTML = "";

    urls.forEach(url => {
        const link = url.trim();
        if (link) {
            const img = document.createElement("img");
            img.src = link;
            img.alt = "Зображення";
            img.style.maxWidth = "200px";
            img.style.margin = "5px";

            result_task9.appendChild(img);
        }
    });
});