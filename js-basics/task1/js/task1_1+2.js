const square = document.getElementById("main-square");

document.getElementById("css-type").onclick = function () {
    square.style.display = "none";
};
document.getElementById("js-type-remove").onclick = function () {
    square.remove();
};
document.getElementById("css+js-type").onclick = function () {
    square.classList.add("hidden");
};
document.getElementById("toggle-type").onclick = function () {
    square.classList.toggle("hidden");
};