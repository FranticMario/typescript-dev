const artworks: string[] = [
    "Die Sternennacht - Vincent van Gogh",
    "Guernica - Pablo Picasso",
    "Die Geburt der Venus - Sandro Botticelli",
    "Die Nachtwache - Rembrandt",
    "Die Mona Lisa - Leonardo da Vinci",
    "Die Kartoffelesser - Vincent van Gogh",
    "Der Schrei - Edvard Munch",  
    "Das letzte Abendmahl - Leonardo da Vinci",
    "Die freudige Botschaft - James Tissot",
    "Der Garten der Lüste - Hieronymus Bosch"
];

const artworkDates: string[] = [
    "Die Sternennacht - 1889",
    "Guernica - 1937",
    "Die Geburt der Venus - 1486",
    "Die Nachtwache - 1642",
    "Die Mona Lisa - 1503",
    "Die Kartoffelesser - 1885",
    "Der Schrei - 1893",  
    "Das letzte Abendmahl - 1495",
    "Die freudige Botschaft - 1885",
    "Der Garten der Lüste - 1505"
];

console.log(artworkDates)

const artworkName = (name: string) => {
    let nameAutor: string = suchString(artworks, name);
    let jahrArt: string = suchString(artworkDates, name);

    return `${name} wurde von ${nameAutor} im jahre ${jahrArt} gemalt`
};

const suchString = (arr: string[], name: string): string => {
    const result = arr.find((item) => item.includes(name));
    return result ? result.split("-")[1].trim() : "nichts gefunden";
}

console.log(artworkName("Der Schrei"))


const futuramaQuote:string = "It's okay, Bender. I like cooking too. Oh, you're a dollar naughtier than most. My fellow Earthicans, as I have explained in my book 'Earth in the Balance', and the much more popular 'Harry Potter and the Balance of Earth', we need to defend our planet against pollution. Also dark wizards."

console.log(futuramaQuote.split(" "))

console.log(futuramaQuote.includes("Okay"))

const reverseFn = (str:string) => {
    return str.split("").reverse().join("")
}
console.log(reverseFn("Ella mag alle Bohnen"))
let strLänder = "France,Germany,Sweden,GreatBritain,Czech Republic,Switzerland"
let splitLänder = strLänder.split(",")

let languages: string[] = [
    "JavaScript",
    "Python",
    "Java",
    "Ruby",
    "PHP",
    "C++",
    "CSS",
    "C#",
    "Go",
    "C",
    "TypeScript",
    "Swift"
];

const sortAlphabetically = (a:string, b:string) => a > b ? 1 : -1
const sortDescending = (a:string, b:string) => b > a ? 1 : -1

console.log(languages.sort(sortAlphabetically))
console.log(splitLänder.sort(sortDescending))

let numArray1: number[] = [36, 24, 22, 3, 2, 98, 88, 99, 10, 54, 68, 70];

console.log(numArray1.sort((a,b) => a - b))

let numArray: number[] = [36, 324, 122, 62, 98, 88, 99, 1000];


console.log(numArray.sort((a,b) => a - b))

