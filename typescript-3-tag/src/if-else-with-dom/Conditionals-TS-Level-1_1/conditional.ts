const btnAgeCheck = document.querySelector(".btn__wetter") as HTMLInputElement;
const inputAge = document.querySelector(".age") as HTMLInputElement;
const div = document.createElement("div");

const adult = () => {
    const inputAgeValue: number = +(inputAge.value)
    const inputAgeCheck:boolean =  inputAgeValue >= 18 ? true : false

    div.innerHTML = "";
    if(inputAgeCheck) {
        div.innerHTML = "Volljhärig"
    } else {
        div.innerHTML = "Minderjährig"
    }
    document.body.append(div)

}

btnAgeCheck.addEventListener("click", adult)