import { compareAsc, format } from "date-fns";
import { differenceInYears, differenceInHours,  differenceInSeconds} from "date-fns";
const app = document.querySelector(".app") as HTMLElement;


console.log(app)
app.innerHTML +=  `${new Date()} <br /> `
app.innerHTML += `${new Date("September 2, 2019 09:00:00")} <br /> `
app.innerHTML += `${new Date(31556908800)} <br /> `
app.innerHTML += `${new Date(86400000)} <br /> `
app.innerHTML += `${format(new Date(), "MM/dd/yyyy")} <br /> `
app.innerHTML += `${format(new Date(), "MM-dd-yyyy")} <br /> `
app.innerHTML += `${format(new Date(31556908800), 'HH:mm:ss')} <br /> `





const aktuelUhrZeit = new Date()
const startDatum = new Date(0)

console.log(aktuelUhrZeit)
console.log(startDatum)


const resultInYears = differenceInYears(aktuelUhrZeit, startDatum)
const resultInHours = differenceInHours(aktuelUhrZeit, startDatum)
const resultInSeconds= differenceInSeconds(aktuelUhrZeit, startDatum)

console.log(resultInYears, resultInHours , resultInSeconds)



const myBirthd = new Date("1997-04-25")
const yearEmo = new Date("2007-04-07")

console.log(myBirthd)
console.log(yearEmo)

const results = differenceInYears(myBirthd, yearEmo)

console.log(results)