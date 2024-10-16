console.log(Math.PI.toFixed(2))

let randomNumbers: number[] = [3.14, 193.4464, 0.8596433607, -2.940629089];
randomNumbers.forEach(item => console.log(Math.round(item)))

const randomNum  = Math.random()
const randomNum1 = Math.floor((Math.random() * 10))
const randomNumm100 = Math.floor((Math.random() * 100))

const text = "393,205,479,47,376,267,385,2,190,383,286,462,115,138,331,409,427,245,224,276,483,55,147,177,208,347,135,282,33,270,475,426,476,453,474,351,219,358,354,410,240,139,371,356,277,202,264,204,447,488"
const textArr = text.split(",")

const numArr = textArr.map(item => parseInt(item))
console.log(Math.max(...numArr))
console.log(Math.min(...numArr))
