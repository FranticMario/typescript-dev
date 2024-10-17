import "./style.css"
const homeAnchor = document.querySelector("#navHome") as HTMLElement | null;
const navChange = document.querySelector("#navChange") as HTMLElement | null;

const changeHomeAnchor = () => {
  if (homeAnchor) { 
    const textContent = homeAnchor.textContent || ""; 
    homeAnchor.style.backgroundColor = "red"; 
    homeAnchor.textContent = textContent.split("").reverse().join(""); 
  }
}

navChange?.addEventListener("click", changeHomeAnchor);

// ================================================================
// Dom-Elements-TS-Level-2_2
// console.clear()

const formBtn = document.querySelector("#btn") as HTMLInputElement;

const selectLand = document.querySelector("#land") as HTMLSelectElement;
const inputVorname = document.querySelector("#vorname") as HTMLInputElement;
const inputNachname = document.querySelector("#nachname") as HTMLInputElement;

type SimplePerson = {
    vorname: string,
    nachname: string,
    land: string,
}

const setInfoFromForm = (event:Event) => {
    event.preventDefault();
    if(inputVorname.value && inputNachname.value ) {
        const person:SimplePerson = {
            vorname: inputVorname.value,
            nachname: inputNachname.value,
            land: selectLand.value
        };
        console.log(person)
    } else {
        console.log("gib alle daten")
    }

}

formBtn?.addEventListener("click", (e:Event) => setInfoFromForm(e)) 

// ================================================================
// Dom-Elements-TS-Level-2_2
// console.clear()
import data from "./main";

const content = document.querySelector("#content") as HTMLElement;
const clickMe = document.querySelector(".btn__add-img") as HTMLElement;
 

const renderImg = () => {
    content.firstElementChild?.remove()
    const randomNum = Math.trunc(Math.random() * data.length);
    const img = document.createElement("img")
    img.classList.add("content__img")
    img.setAttribute("src", `${data[randomNum].download_url}`)
    content.appendChild(img)
}



clickMe?.addEventListener("click", renderImg)