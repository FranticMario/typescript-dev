export const levelOne = () => {

    const bucketList:string[] = ["Spanien", "Berlin", "Russland"]
    const luckyNUmbers:number[] = [7,9,3];
    const favoritePeople:string[] = ["Mama", "Papa", "Meine Frau"]

    console.log(bucketList)
    console.log(luckyNUmbers)
    console.log(favoritePeople)

    console.log(bucketList[0])
    console.log(luckyNUmbers[1])
    console.log(favoritePeople[2])
    
    console.log(bucketList.length)
    console.log(luckyNUmbers.length)


    bucketList.push("Kasachstan", "Bolgarien")
    console.log(bucketList);

    bucketList.pop()
    console.log(bucketList)

    bucketList.shift()
    console.log(bucketList)

    bucketList.unshift("Paris", "Kanada")
    console.log(bucketList)

    const lieblingsreiseziele: string[] = ["Berlin", "Spanien", "Pawlodar", "Russland", "Kasachstan", "Ukraine"];
    lieblingsreiseziele.slice(2, 4)
    console.log(lieblingsreiseziele)
    console.log(lieblingsreiseziele.slice(2, 4))

    const numArray : number[] = [23, 54, 75]
    numArray.push(5)
    numArray.unshift(5)
    numArray.pop()
    numArray.pop()
    console.log(numArray)


    const oldHollywoodActors: string[] = ["Marlon Brando", "Audrey Hepburn", "Elizabeth Taylor", "Cary Grant", "Paul Newman", "Doris Day"];
    const actorsReference : string[] = oldHollywoodActors;
    const actorsReferenceWithConcat:string[] = [].concat(oldHollywoodActors);
    const actorsReferenceWithSlice:string[] = oldHollywoodActors.slice(0,7);
    const actorsReferenceWithSpread:string[] = [...oldHollywoodActors];

    actorsReference.push("Marilyn Monroe")
    console.log(oldHollywoodActors)
    console.log(actorsReferenceWithConcat)
    console.log(actorsReferenceWithSlice)
    console.log(actorsReferenceWithSpread)

}