import "./style.css"

const btnAdd = document.querySelector(".btn__add") as HTMLElement
const inputItem = document.querySelector("#input__item") as HTMLInputElement;

const wrapper = document.querySelector(".wrapper") as HTMLElement;

const domItem:HTMLElement[] = []

const renderItemToHtml = () => {
    const valueInput:string = inputItem.value;

    if(valueInput) {
        createElement(valueInput)
        inputItem.value = ""
    }
}

const createElement = (value:string) => {
    const div = document.createElement("div");
    div.className = "checkbox__container";
    div.innerHTML =
    `
    <input type="checkbox" id="${value}" name="${value}" />
    <label for="${value}">${value}</label>
    `
    const btnP = document.createElement("p")
    btnP.className = "delete-btn";
    btnP.textContent = "X"
    div.appendChild(btnP);
    domItem.push(div)
    btnP.addEventListener("click", () => deleteElement(div, value))
    wrapper.appendChild(div)
}

const deleteElement = (element:HTMLElement, value:string) => {
    const inputCheckbox = document.querySelector(`#${value}`) as HTMLInputElement;
    if(inputCheckbox.checked) {
        element.remove()
    }
}


btnAdd?.addEventListener("click", () => { renderItemToHtml() })