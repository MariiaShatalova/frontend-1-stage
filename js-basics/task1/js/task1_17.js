const form = document.getElementById("myForm");

form.addEventListener("submit", (event) => {
    event.preventDefault();
    alert("Натиснута кнопка GO, але сторінка не перезавантажилась!");
});