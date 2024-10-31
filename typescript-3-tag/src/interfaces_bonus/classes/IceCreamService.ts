
import listFlavor, { TListFlavors } from "../daten/listFlavour";
import IceArt from "../enums/IceArt";
import IIceCreamService from "../interfaces/IIceCreamService";

class IceCreamParlor implements IIceCreamService {
    // private _flavor: IceArt | string;
    // private _scoops: number;
    private _listFlavor: TListFlavors[]


    constructor() {
        this._listFlavor = listFlavor
    }


    listFlavors():TListFlavors[] {
        return this._listFlavor
    }

    orderIceCream(flavor: IceArt, scoops: number):string  {
        return `Wir haben eure Bestellung angennomen. Sie haben ${this._listFlavor[flavor].name} mit ${scoops} scoops`
    }

    addNewFlavor(flavor: string, price:number): void {
        this._listFlavor.push( {
            name: flavor,
            price: price,
        })
    }

    removeFlavor(flavor: string):void {
        this._listFlavor.forEach((ice, index) => ice.name === flavor ? this._listFlavor.splice(index, 1) : "Diese Eis Exestiert nicht")
    };

    isFlavorAvailable(flavor:string): boolean {
        return this._listFlavor.some(ice => ice.name === flavor)
    };

    getFlavorPrice(flavor: string): number | null {
        const foundIce = this._listFlavor.find(ice => ice.name === flavor);
        return foundIce ? foundIce.price : null; 
    }

}

export default IceCreamParlor