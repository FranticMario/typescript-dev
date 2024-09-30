console.log("hello")

function differenz(num: number){
    const difference = num - 27;
    console.log(num > 27 ? difference * 2 : difference);
}

differenz(35);
differenz(74);
differenz(123);

function getRandomArbitrary(min:number, max:number) {
    const randomNum1 = (Math.random() * (max - min) + min).toFixed()
    const randomNum2 = (Math.random() * (max - min) + min).toFixed()
    if(randomNum1 === randomNum2) {
        console.log("Was für ein Zufall")
    } else if (randomNum1 > randomNum2) {
        console.log("die erste Zahl größer")
    } else {
        console.log("Zweite Zahl Größer")
    }
}

  getRandomArbitrary(1, 77)



  function showPersonInfo (name:string, city:string, age: number) {
    console.log(`Hallo, mein Name ist ${name}. ich bin ${age} Jahre alt. Ich komme aus ${city}`)
  }

  showPersonInfo("Andrej", "Westerstede", 27)


  function showHero(heroName: string, heroPower: string, heroEnemy:string)  {
    const nameOutpu0t:string = `Mein:e Lieblingsheld:in ist: ${heroName}`;
    const powerOutput : string = `Er/sie hat die Fähigkeit: ${heroPower}`;
    const enemyOutput: string = `Sein/ihr größte/r Gegner:in ist: ${heroEnemy}`;

    console.log(nameOutpu0t + powerOutput + enemyOutput)
  }

  showHero("Iron man", "Geld", "Tanos")


  function multiplyAndDivide(num1:number, num2:number) {

    console.log("Multiplikation:", num1 * num2);


    if (num2 === 0) {
        console.error("Fehler: Division durch 0 nicht erlaubt");
    } else {
 
        console.log("Division:", num1 / num2);
    }
}

multiplyAndDivide(10, 2);    
multiplyAndDivide(30, 20);   
multiplyAndDivide(100, 100); 
multiplyAndDivide(5, 0);     
multiplyAndDivide(45, 173);  
multiplyAndDivide(1, 1000); 
