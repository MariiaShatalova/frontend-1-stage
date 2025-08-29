const outer = document.getElementById("outer");
const inner = document.getElementById("inner");

outer.addEventListener("click", () => {
    alert("Клік на великому блоці!");
});

inner.addEventListener("click", (event) => {
    alert("Клік на маленькому блоці!");
    event.stopPropagation();
});