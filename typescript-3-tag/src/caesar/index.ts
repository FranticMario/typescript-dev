import Component from "./create-view";


const inputText = new Component({tag: "input", classNames: ["input__text"], textContent: "", type: "text", attributes: {placeholder: "Write text..."} });
const inputKey = new Component({tag: "input", classNames: ["input__text"], textContent: "", type: "number", attributes: {placeholder: "key..."}});
const buttonEncoder = new Component({
    tag: "button",
    classNames: ["btn__encoder"],
    textContent: "Encode",
    callback: () => encoderFunc((inputText.element as HTMLInputElement).value, Number((inputKey.element as HTMLInputElement).value)) 
});

const buttonDecoder = new Component({
    tag: "button",
    classNames: ["btn__decoder"],
    textContent: "Decode",
    callback: () => decoderFunc((inputText.element as HTMLInputElement).value, Number((inputKey.element as HTMLInputElement).value)) 
});


const h1 = new Component({tag: "h1", classNames: ["header"], textContent: ""})



const decoderFunc = (inputText:string, inputKey:number) => {
    const textArr = inputText.split("");
    const result = textArr.map(char => {
        const charCode = char.codePointAt(0)!;

        if (charCode >= 97 && charCode <= 122) {
            const encodedCharCode = charCode - inputKey;

            return String.fromCodePoint(encodedCharCode > 122 ? encodedCharCode + 26 : encodedCharCode);
        } else if (charCode >= 65 && charCode <= 90) {
            const encodedCharCode = charCode - inputKey;

            return String.fromCodePoint(encodedCharCode > 90 ? encodedCharCode + 26 : encodedCharCode);
        }

        return char;
    });

    h1.setTextContent(`${result.join("")}`)

    
}

const encoderFunc = (inputText:string, inputKey:number) => {
    const textArr = inputText.split(""); 
    const result = textArr.map(char => {
        const charCode = char.codePointAt(0)!; 


        if (charCode >= 97 && charCode <= 122) {
            const encodedCharCode = charCode + inputKey;

            return String.fromCodePoint(encodedCharCode > 122 ? encodedCharCode - 26 : encodedCharCode);
        } else if (charCode >= 65 && charCode <= 90) {
            const encodedCharCode = charCode + inputKey;

            return String.fromCodePoint(encodedCharCode > 90 ? encodedCharCode - 26 : encodedCharCode);
        }

        return char; 
    });

        h1.setTextContent(`${result.join("")}`)

 
}


document.body.append(inputText.getElement(), inputKey.getElement(), buttonDecoder.getElement(), buttonEncoder.getElement(), h1.getElement());











