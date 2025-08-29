const hoverBtn = document.getElementById("hoverBtn");
const red_square = document.getElementById("red-square-task6");

hoverBtn.addEventListener("mouseover", () => {
    red_square.style.display = "block";
});

hoverBtn.addEventListener("mouseout", () => {
    red_square.style.display = "none";
});