import "./style.css"

let counter:number = 0;
let num:number = 0;
const btnAddNum = document.querySelector(".btn__add-num") as HTMLElement;
const umwickeln = document.querySelector(".umwickeln") as HTMLElement;



const addNumToHtml = () => {
    console.log("hello")
    const div = document.createElement("div");

    if(counter === 10 || counter === 0) {
        div.textContent = `${num}`
        div.className = "weiss";
        umwickeln.appendChild(div);
        counter = 0;
    } else {
        div.textContent = `${num}`
        div.className = "rechteck";
        umwickeln.appendChild(div)
    }
    counter++
    num++
}


btnAddNum?.addEventListener("click", addNumToHtml)



const btnSmall = document.querySelector(".btn__small") as HTMLElement | null;
const btnMiddle = document.querySelector(".btn__middle") as HTMLElement | null;
const btnBig = document.querySelector(".btn__big") as HTMLElement;

const elementWrapper = document.querySelector("#element__wrapper") as HTMLElement;
const header = document.querySelector(".header") as HTMLElement;


const smallStyle = () => {
    header.style.transitionDuration = ""
    header.style.transitionProperty = ""
    header.style.textShadow = ""
    header.style.fontSize = "15px"
}

const middleStyle = () => {
    header.style.transitionDuration = "2s"
    header.style.transitionProperty = "background-color"
    header.style.textShadow = "#FC0 1px 0 10px"
    header.style.fontSize = "20px"

    
}

const bigStyle = () => {
    header.style.transitionDuration = "2s"
    header.style.transitionProperty = "background-color"
    header.style.textShadow = "#FC0 1px 0 10px"
    header.style.color = "green"
    header.style.fontSize = "50px"
}

btnSmall?.addEventListener("click", smallStyle)

btnMiddle?.addEventListener("click", middleStyle)

btnBig?.addEventListener("click", bigStyle)


const btnRandom = document.querySelector(".btn__random") as HTMLElement;


const changeBackgroundColor = () => {
    
    const red: number = Math.random() * 255;
    const green: number= Math.random() * 255;
    const blue: number= Math.random() * 255;
    document.body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`
}

btnRandom?.addEventListener("click", changeBackgroundColor)