const yellow_square = document.getElementById("yellow-square-task5");

function sayHello() {
    alert("Привіт!");
    yellow_square.removeEventListener("click", sayHello);
    yellow_square.addEventListener("click", hideSquare);
}

function hideSquare() {
    yellow_square.style.display = "none";
}

yellow_square.addEventListener("click", sayHello);