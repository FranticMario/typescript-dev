let text: string = `I didn't ask for a completely reasonable excuse! I asked you to get busy! But I know you in the future. I cleaned your poop. What are you hacking off? Is it my torso?! 'It is!' My precious torso! Please, Don-Bot… look into your hard drive, and open your mercy file! Shut up and get to the point! I barely knew Philip, but as a clergyman I have no problem telling his most intimate friends all about him. You know the worst thing about being a slave? They make you work, but they don't pay you or let you go. Moving along… Well, then good news! It's a suppository. I'll get my kit! And when we woke up, we had these bodies. Daddy Bender, we're hungry. You know the worst thing about being a slave? They make you work, but they don't pay you or let you go. Man, I'm sore all over. I feel like I just went ten rounds with mighty Thor. Alright, let's mafia things up a bit. Joey, burn down the ship. Clamps, burn down the crew. That could be 'my' beautiful soul sitting naked on a couch. If I could just learn to play this stupid thing. Well, thanks to the Internet, I'm now bored with sex. Is there a place on the web that panders to my lust for violence? I was all of history's great robot actors - Acting Unit 0.8; Thespomat; David Duchovny! Bender, I didn't know you liked cooking. That's so cute. Fatal. You don't know how to do any of those. Who are you, my warranty?! Shut up and get to the point! Fry, you can't just sit here in the dark listening to classical music. That's not soon enough! And why did 'I' have to take a cab? Bender?! You stole the atom. You know, I was God once. For the last time, I don't like lilacs! Your 'first' wife was the one who liked lilacs! And yet you haven't said what I told you to say! How can any of us trust you? Your best is an idiot! I found what I need. And it's not friends, it's things. No! The kind with looting and maybe starting a few fires! When will that be? Ugh, it's filthy! Why not create a National Endowment for Strip Clubs while we're at it? I'm just glad my fat, ugly mama isn't alive to see this day. Why did you bring us here? And until then, I can never die? I'm sure those windmills will keep them cool. You don't know how to do any of those. Fry, you can't just sit here in the dark listening to classical music. You know the worst thing about being a slave? They make you work, but they don't pay you or let you go. This opera's as lousy as it is brilliant! Your lyrics lack subtlety. You can't just have your characters announce how they feel. That makes me feel angry! Oh, but you can. But you may have to metaphorically make a deal with the devil. And by "devil", `;


const textTrennen = (text:string) => {
let counter:number = 0;
const textInBlocksOfHundred: string [] = [];
const anzahlZeile = Math.ceil(text.length / 100)
while (counter < anzahlZeile) {
    
    const startIndex = counter * 100;
    textInBlocksOfHundred.push(`${text.slice(startIndex, startIndex + 100)} -  ${counter + 1} of ${anzahlZeile}`)
    counter++;
}


}


console.log(textTrennen(text))

const outputText = document.querySelector(".output__text") as HTMLElement;
let numbers: number[] = [5, 22, 15, 100, 55];

const numDivide = (numArr: number[]) => {
  outputText.innerHTML = ""; // Очищаем HTML перед выводом новых данных
  numArr.forEach(item => {
    for (let i = 2; i <= Math.ceil(item / 2); i++) {

      if (item % i === 0 && item !== i) { 

        outputText.innerHTML += `${item} is devidable by ${i} the results is : ${item / i}<br>`; 
      }
    }
  });
};
console.log(numDivide(numbers))


const btnLoop = document.querySelector(".btn__loop") as HTMLElement;
const inputNum = document.querySelector("#loop") as HTMLInputElement;
const loopText = document.querySelector(".loop__text") as HTMLElement;

const addLoopToO = () => {
    const inputValue: number = +inputNum.value;
    let str: string = "";

    for (let i = 0; i < inputValue; i++) {
        str += inputValue % 2 === 0 || i % 2 === 0 ? "o" : "0";
    }

    loopText.innerHTML = `L${str}p`;
};


btnLoop.addEventListener("click", addLoopToO)

const results:number[] = [44, 11, 70, 80, 52, 88, 94, 3, 25, 46]


const noteAverage = (arr:number[]) => {
   const sum:number = arr.reduce((acc:number, currentValue:number):number => {
        return acc + currentValue
    },0)
    const averageNote = Math.floor(sum / arr.length)
    if (averageNote < 50) {
        console.log("Ungenügend");
    } else if (averageNote >= 50 && averageNote < 60) {
        console.log("Mangelhaft");
    } else if (averageNote >= 60 && averageNote < 70) {
        console.log("Ausreichend");
    } else if (averageNote >= 70 && averageNote < 80) {
        console.log("Befriedigend");
    } else if (averageNote >= 80 && averageNote < 90) {
        console.log("Gut");
    } else if (averageNote >= 90) {
        console.log("Sehr gut");
    }
}


console.log(noteAverage(results))