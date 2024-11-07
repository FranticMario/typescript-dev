const paragraph = document.querySelector(".paragraph") as HTMLElement;


const homework1 = new Promise<string>((resolve, reject) => {
    setTimeout(() => resolve(" Exercise 1 done"), 1000);
})


const homework2 = new Promise<string>((resolve, reject) => {
    setTimeout(() => resolve(" Exercise 2 done"), 2000);
})


const homework3 = new Promise<string>((resolve, reject) => {
    setTimeout(() => resolve(" Exercise 3 done"), 3000);
})

homework1.then((response) => {
    paragraph.textContent +=response;
    return homework2
}).then((response) => {
    paragraph.textContent += response;
    return homework3
}).then((response) => {
    paragraph.textContent += response;
}).catch((err) => {
    console.error(err)
})




