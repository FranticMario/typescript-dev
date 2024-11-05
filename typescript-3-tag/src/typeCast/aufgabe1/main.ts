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

type Cocktail = Alcohol & Mixer;

const vodka: Alcohol = { name: 'Wodka', percentage: 40, type: "Stark alco" };
const cola: Mixer = { name: 'Cola', type: "Saft", carbonated: true };

const mixCocntail = (alco: Alcohol, mixer: Mixer):Cocktail => {
    return {
        name: `${alco.name} ${mixer.name}`,
        percentage: alco.percentage,
        type: `${alco.type} ${mixer.type}`,
        carbonated: mixer.carbonated
      };
}

console.log(mixCocntail(vodka, cola))


const generateLottoNumber: number = Math.random() * 100
const result = (generateLottoNumber > 49) ? generateLottoNumber :  new Error("zahl grösser als 49")


try {
    console.log(result)
} catch (err) {
    console.log(err)
}
