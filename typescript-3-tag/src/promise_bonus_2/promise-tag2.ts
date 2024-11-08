
const sayHello = (name:string, callback: (message:string) => void) => {
    console.log(name)
    callback("Hello man")
}


const greetingCallback = (message:string) => {
    console.log(message)
}


sayHello("Andrej", greetingCallback)

const sortAbst = (arr:number[]) => {
    return arr.sort((a:number, b:number) => a - b)
}


const arrVerdoppeln = (arr:number[]) => {
    return arr.map((num:number) => num *2)
}


const processData = (arrNums:number[], callbackSortAbst:(arr: number[]) => number[], callbackArrVerdoppeln: (arr: number[]) => number[] ) => {


    return callbackArrVerdoppeln(callbackSortAbst(arrNums))
}




console.log(processData([2,5,2,3,6,5,4,2], sortAbst, arrVerdoppeln))

