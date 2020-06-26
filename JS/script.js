//Change background to a dark mode
let changeBackgroundButton = document.querySelector(".js-changeBackgroundButton")
let modeChange = document.querySelector("body");

changeBackgroundButton.addEventListener("click", () => {
    if (changeBackgroundButton.innerText === "Włącz ciemny motyw") {
        changeBackgroundButton.innerText = "Wyłącz ciemny motyw";
        modeChange.classList.toggle("darkMode");
    } else {
        changeBackgroundButton.innerText = "Włącz ciemny motyw";
        modeChange.classList.toggle("darkMode");
    }
});

//Hide the photo
let hideImgButton = document.querySelector(".js-removeImageButton");
let image = document.querySelector(".js-picture");

hideImgButton.addEventListener("click", () => {
    if (hideImgButton.innerText === "Ukryj zdjęcie") {
        image.style.visibility = "hidden";
        hideImgButton.innerText = "Pokaz zdjęcie";
    } else {
        image.style.visibility = "visible";
        hideImgButton.innerText = "Ukryj zdjęcie"
    }
});
