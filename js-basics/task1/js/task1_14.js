const btn_task14 = document.getElementById("scrollTopBtn");

window.addEventListener("scroll", () => {
    if (document.documentElement.scrollTop > 200) {
        btn_task14.style.display = "block";
    } else {
        btn_task14.style.display = "none";
    }
});

btn_task14.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});