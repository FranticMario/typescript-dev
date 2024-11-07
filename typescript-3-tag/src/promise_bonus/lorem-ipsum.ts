const loremIpsumText = `Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt 
ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo 
duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. 
Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt 
ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo 
duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor 
sit amet.
`;

const generateLoremIpsum = (numberOfWords: number):Promise<string[]> => {
    return new Promise((resolve,reject) => {
        if(numberOfWords > 50) {
            reject("Number of words cannot exceed 50")
        } else {
            resolve([...loremIpsumText.slice(0, numberOfWords)])
        }
    })
}


generateLoremIpsum(40).then(response => {
    return response.map(char => char.toUpperCase())
}).then(response => {
    console.log(response)
   return response.filter((char) => {
    return !char.includes("L") && !char.includes("T") && !char.includes("U");
    })
}).then(response => {
    const responseWithWords = response.join("")
    return responseWithWords.split(" ").filter(word => word.length <= 8);
}).then(response => {
    console.log(response)
}).catch(error => {
    console.error("Fehler:", error);
});