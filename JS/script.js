//Motyw
let button = document.querySelector(".button")
let mode = document.querySelector("body");

button.addEventListener("click", () => {
    if (button.innerText === "Włącz ciemny motyw") {
        button.innerText = "Wyłącz ciemny motyw";
        mode.classList.toggle("kolor");
    } else {
        button.innerText = "Włącz ciemny motyw";
        mode.classList.toggle("kolor");
    }
});

//Usuniecie zdjecia
let button1 = document.querySelector(".przycisk");
let zdjecie = document.querySelector(".js-picture");

button1.addEventListener("click", () => {
    if (button1.innerText === "Ukryj zdjęcie") {
        zdjecie.style.visibility = "hidden";
        button1.innerText = "Pokaz zdjecie";
    } else {
        zdjecie.style.visibility = "visible";
        button1.innerText = "Ukryj zdjęcie"
    }
});
