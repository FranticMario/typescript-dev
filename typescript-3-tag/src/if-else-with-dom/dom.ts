const btnWetter = document.querySelector(".btn__wetter") as HTMLInputElement;
const inputWetter = document.querySelector(".wetter") as HTMLInputElement;
const divContainer = document.createElement("div");

const checkWetter = () => {
    const inputWert:number = +(inputWetter.value)


    divContainer.innerHTML = " ";

    if(inputWert >= 8 && inputWert <= 10 ) {
        divContainer.innerHTML = "Super"
    } else if (inputWert === 6 || inputWert === 7) {
        divContainer.innerHTML = "Gut"
    } else if (inputWert >= 3 && inputWert <=5) {
        divContainer.innerHTML = "okay"
    } else {
        divContainer.innerHTML = "schlecht"
    }

    document.body.append(divContainer)
}


btnWetter.addEventListener("click", checkWetter)

