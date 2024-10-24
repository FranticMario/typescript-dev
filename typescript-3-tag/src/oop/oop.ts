import Car from "./classen/Car";
import Driver from "./classen/Driver";
import IceCreamFlavor from "./classen/IceCreamFlavor";
import Person from "./classen/Person";
import SchoolClass from "./classen/SchoolClass";

console.log("hellos")

const eis_1 = new IceCreamFlavor("Erdeebere", 2.30, true)
const eis_2 = new IceCreamFlavor("Banane", 2.50, false)
const eis_3 = new IceCreamFlavor("Karamel", 3.30, false)
const eis_4 = new IceCreamFlavor("Schokolade", 4.60, false)


const  arrEis:IceCreamFlavor[] = [eis_1, eis_2, eis_3, eis_4]

const popularEis = arrEis.filter(eis => {
    return eis._isPopular === true
})
console.log(popularEis)


// ===================================================================================
// OOP-Class-TS-Level-1_2 und OOP-Class-TS-Level-2_1
const person1 = new Person(1, "Andrej", "Dortmann", "25-01-1997")
const person2 = new Person(1, "Bruce", "Wayne", "5-02-1995")
const person3 = new Person(1, "Tony", "Stark", "15-05-1993")


const class1 = new SchoolClass("Mathematik", 1, [person1, person2, person3]);
const class2 = new SchoolClass("Physik", 2);
const class3 = new SchoolClass("Chemie", 3);

console.log(class1)

// ===================================================================================
// OOP-Class-TS-Level-2_2

const myAuto = new Car("mercedes", 2004, 150)

const me = new Driver("Andrej", "Dortmann", 27, myAuto)

console.log(me)

