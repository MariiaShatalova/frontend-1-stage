const infoBox = document.getElementById("info-box");
let coordsText = "X: 0, Y: 0";
let langText = "Мова: " + navigator.language;
let geoText = "Ш: -, Д: -";

function updateBox() {
    infoBox.innerHTML = `${coordsText}<br>${langText}<br>${geoText}`;
}

document.addEventListener("mousemove", e => {
    coordsText = `X: ${e.clientX}, Y: ${e.clientY}`;
    updateBox();
});

if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(pos => {
        geoText = `Ш: ${pos.coords.latitude}, Д: ${pos.coords.longitude}`;
        updateBox();
    }, () => {
        geoText = "Ш: недоступно, Д: недоступно";
        updateBox();
    });
} else {
    geoText = "Геолокація не підтримується";
    updateBox();
}

updateBox();