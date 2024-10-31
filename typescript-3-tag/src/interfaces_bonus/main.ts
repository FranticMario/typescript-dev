import "./style.css"
import IceCreamParlor from "./classes/IceCreamService";
import IceArt from "./enums/IceArt";
import IcePrice from "./enums/IcePrice";
import listFlavor from "./daten/listFlavour";

const geschmakSelect = document.querySelector(".geschmack__select") as HTMLInputElement;
const newSorte = document.querySelector(".new__sorte") as HTMLInputElement;
const newSortePrice = document.querySelector(".new__sorte-price") as HTMLInputElement;
const btnNewSorteAnlegen = document.querySelector(".btn__new-sorte") as HTMLElement;

const IceCreamParlorShop = new IceCreamParlor()
const listFlavorFromClass = new IceCreamParlor().listFlavors()


IceCreamParlorShop.listFlavors().forEach(item => {
    const option = document.createElement("option");
    option.textContent = item.name
    geschmakSelect.append(option)
})

console.log(listFlavor)



btnNewSorteAnlegen?.addEventListener("click", () => {
    const newSorteValue = newSorte.value;
    const newSortePriceValue = newSortePrice.value;

    IceCreamParlorShop.addNewFlavor(newSorteValue, Number(newSortePriceValue))

})


geschmakSelect.addEventListener("change", () => {
    console.log("helo")
})