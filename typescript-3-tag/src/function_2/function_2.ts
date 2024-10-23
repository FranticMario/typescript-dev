const greeting = ():string => "Hello function"
console.log(greeting())

const sum = (num1:number, num2:number) => num1 + num2
console.log(sum(1,3))

const sumWinAlert = (num1:number, num2:number) => window.alert(num1 + num2)

// =======================================================================

type TObject = {
    name: string,
    age: number,
    adresse: string,
    nachname: string,
}
const objectToConsoleLog = (params:TObject) => {
    let key: keyof typeof params
    for(key in params) {
        console.log(params[key])
    }
}

objectToConsoleLog({name:"Andrej", age: 27, adresse: "Westerstede", nachname: "Dortmann"})

// =======================================================================



type TMonster = {
    name: string,
    type: string,
    health?: number,
    strength?: number,
    speed?: number,
}

const createMonster = (monsterParams:TMonster) => {
    const monster:TMonster = {
        name: monsterParams.name,
        type: monsterParams.type,
        health: monsterParams.health ?? 100,
        strength: monsterParams.strength ?? 50,
        speed: monsterParams.speed ?? 25,
    }

    return monster
}

console.log(createMonster({name: "Andrej", type: "Mensch"}))

// =======================================================================
// Functions-TS-Level-2_2
