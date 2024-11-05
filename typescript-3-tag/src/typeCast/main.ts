import IStudent from "./interfaces/IStudent";


const student1 = {name: "Alexander", age: 24}

const studentWithI = student1 as IStudent;



const processStudent = (student:IStudent) => {
    console.log(`Processing [${student.name}]`)
}


processStudent(studentWithI)


const student2 = {age: 27} as IStudent


processStudent(student2)




type Result = "success" | "error" | "pending"


const variablResult: Result = "error"

const handeResult = (param: Result) => {
    console.log(param)
}

handeResult("variablResult")


type Alcohol = {
    name: string,
    percentage: number,
    type: string
}

type Mixer = {
    name: string,
    type: string,
    carbonated: boolean,
}


const cocktail: Alcohol | Mixer = {
    name: "Vodka",
    percentage: 40,
    type: "Alchokol",
    carbonated: true,
}

console.log(cocktail)