const block1 = document.getElementById("block1");
const block2 = document.getElementById("block2");
const block3 = document.getElementById("block3");

if (localStorage.getItem("block1")) {
    block1.innerText = localStorage.getItem("block1");
}
block1.addEventListener("input", () => {
    localStorage.setItem("block1", block1.innerText);
});

function setCookie(name, value, days = 7) {
    let expires = "";
    if (days) {
        const d = new Date();
        d.setTime(d.getTime() + days * 24 * 60 * 60 * 1000);
        expires = "; expires=" + d.toUTCString();
    }
    document.cookie = name + "=" + encodeURIComponent(value) + expires + "; path=/";
}

function getCookie(name) {
    const cookies = document.cookie.split("; ");
    for (let c of cookies) {
        const [key, val] = c.split("=");
        if (key === name) return decodeURIComponent(val);
    }
    return null;
}

if (getCookie("block2")) {
    block2.innerText = getCookie("block2");
}
block2.addEventListener("input", () => {
    setCookie("block2", block2.innerText);
});

// sessionStorage
if (sessionStorage.getItem("block3")) {
    block3.innerText = sessionStorage.getItem("block3");
}
block3.addEventListener("input", () => {
    sessionStorage.setItem("block3", block3.innerText);
});