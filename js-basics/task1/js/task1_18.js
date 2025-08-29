const uploadArea = document.getElementById("uploadArea");
const fileInput = document.getElementById("fileInput");
const fileInfo = document.getElementById("fileInfo");

fileInput.addEventListener("change", () => {
    if (fileInput.files.length > 0) {
        fileInfo.textContent = "Вибрано: " + fileInput.files[0].name;
    } else {
        fileInfo.textContent = "Файл не вибрано";
    }
});

uploadArea.addEventListener("dragover", (event) => {
    event.preventDefault();
    uploadArea.classList.add("dragover");
});

uploadArea.addEventListener("dragleave", () => {
    uploadArea.classList.remove("dragover");
});

uploadArea.addEventListener("drop", (event) => {
    event.preventDefault();
    uploadArea.classList.remove("dragover");

    if (event.dataTransfer.files.length > 0) {
        fileInput.files = event.dataTransfer.files;
        fileInfo.textContent = "Перетягнуто: " + event.dataTransfer.files[0].name;
    }
});