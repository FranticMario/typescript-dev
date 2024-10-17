import "./style.css";
const inputField = document.querySelector("#inputText") as HTMLInputElement;
const inputBtn = document.querySelector("#btn__input") as HTMLElement;
const list = document.querySelector("#myList") as HTMLElement;

const renderToHtml = () => {
    const inputValue = inputField.value
    if(inputValue) {
        const li = document.createElement("li");
        li.textContent = inputValue.trim();
        list.appendChild(li);
        inputField.value = ""
    } else {
       alert("GIb text ein")
    }

}


inputBtn?.addEventListener("click", () => {
    renderToHtml()
})
// ===============================================================================
// Dom-Elements-TS-Level-1_2
console.clear()

const example = document.querySelectorAll(".example") as NodeListOf<HTMLElement>;
const btn = document.querySelector("#btn") as HTMLElement;

let bool: boolean =  true

const changeBackgroundColor = () => {
 
    if(bool) {
        example.forEach(el => {
            el.style.backgroundColor = "black"
        })
        btn.style.color = "#fff"
        bool = false;
    } else {
        example.forEach(el => {
            el.style.backgroundColor = ""
        })
        btn.style.color = ""
        bool = true; 
    }

    
}

btn?.addEventListener("click", changeBackgroundColor)

// ===============================================================================
// Dom-Elements-TS-Level-1_9

const btnFarbeDelete = document.querySelector("#btn__farbe-delete") as HTMLElement;
const farbeSelect = document.querySelector("#farbeAuswahlen") as HTMLSelectElement;




const deleteFromSelect = () => {
    const selectIndex = farbeSelect.selectedIndex
    farbeSelect[selectIndex].remove()
}



btnFarbeDelete?.addEventListener("click", deleteFromSelect)