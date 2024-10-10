
const returnArray:string[] = [];
const createImageNames = (name:string) => {
    for(let i = 0; i < 100; i++) {
        returnArray.push(`${name}_${i.toString().padStart(3,"0")}`)
    }
    return returnArray
}
console.log(createImageNames("image"))

const btnLoop = document.querySelector(".btn__loop") as HTMLElement;
const inputNum = document.querySelector("#loop") as HTMLInputElement;
const loopText = document.querySelector(".loop__text") as HTMLElement;

const addLoopToO = () => {
    const inputValue:number = +(inputNum.value);
    let str: string = "";
    for(let i = 0; i < inputValue; i++) {
        str += "o"
    }
    return loopText.innerHTML = `L${str}p`
}


btnLoop.addEventListener("click", addLoopToO)

const getNumberOfVowels = (str:string) => {
    const vokale:string = "aeiou"
    let counter:number = 0;

    for(let i:number = 0; i < str.length; i++){
        for(let j:number = 0; j < vokale.length; j++) {
            if(str[i].toLowerCase() === vokale[j]) {
                counter++
            }
        }
    }

    return counter;
}

console.log(getNumberOfVowels("Hallo i AM andrej"))

const addToFifty = (min:number = 1, max:number = 10) => {
    let counter: number = 0;

    for(let i = 0; counter < 50; i++ ) {
        counter += Math.floor((Math.random() * (max - min) + min));
 
    }
    console.log(`'${counter} > 50. Stopping right here.'`)

}

console.log(addToFifty())