const input_task7 = document.getElementById("task7-input");
const square_task7 = document.getElementById("green-square-task7");

input_task7.addEventListener("focus", () => {
    square_task7.style.display = "block";
});

input_task7.addEventListener("input", () => {
    square_task7.style.display = "none";
});