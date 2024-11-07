


const number = new Promise<number[]>((resolve, reject) =>  {
    const num1 = Math.floor(Math.random() * 130)
    const num2 = Math.floor(Math.random() * 130)
    const num3 = Math.floor(Math.random() * 130)

    if(num1 < 100 && num2 < 100 && num3 < 100) {
        const arr = [num1, num2, num3]
        resolve(arr)
    } else {
        reject("Eine num Grosser 100")
    }

})


number.then(response => {
    console.log(response)
   return response.map(num => num + 7)
}).then(response => {
    console.log(response)
    return response.map(num => num * 2)
}).then(response => {
    console.log(response)
    return response.map(num => num - 1)
}).then(response => {
    console.log(response)
    return response.map(num => num % 2)
}).then(response => {
   console.log(response)
}).catch(err => console.error(err))
.finally( () => console.log("Finisched"))