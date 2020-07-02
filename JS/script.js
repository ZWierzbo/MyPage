{
    const welcome = () => {
        console.log("Hello everyone! Hope you're having a wonderful day!")
    }

    welcome();

    //Hide the photo

    const onHideImageClick = () => {
        const image = document.querySelector(".js-picture")

        if (hideImgButton.innerText === "Ukryj zdjęcie") {
            image.style.visibility = "hidden";
            hideImgButton.innerText = "Pokaz zdjęcie";
        } else {
            image.style.visibility = "visible";
            hideImgButton.innerText = "Ukryj zdjęcie"
        }
    };

    const hideImgButton = document.querySelector(".js-removeImageButton")
    hideImgButton.addEventListener("click", onHideImageClick);


    //Change background to a dark mode
    
    const onChangeBackgroundClick = () => {
        const modeChange = document.querySelector("body");

        if (changeBackgroundButton.innerText === "Włącz ciemny motyw") {
            changeBackgroundButton.innerText = "Wyłącz ciemny motyw";
            modeChange.classList.toggle("darkMode");
        } else {
            changeBackgroundButton.innerText = "Włącz ciemny motyw";
            modeChange.classList.toggle("darkMode");
        }
    };

    const changeBackgroundButton = document.querySelector(".js-changeBackgroundButton")
    changeBackgroundButton.addEventListener("click", onChangeBackgroundClick);

}





