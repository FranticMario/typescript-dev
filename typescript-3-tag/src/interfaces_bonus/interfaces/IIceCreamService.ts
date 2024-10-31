import { TListFlavors } from "../daten/listFlavour"
import IceArt from "../enums/IceArt"


interface IIceCreamService {
    // _flavor: IceArt | string
    // _scoops: number
//    _listFlavor: TListFlavors[]

    listFlavors: () => TListFlavors[]
    orderIceCream: (flavor:IceArt, scoops: number) => string
    addNewFlavor: (flavor:string, price:number) => void,
    removeFlavor: (flavor:string) => void,
    isFlavorAvailable: (flavor:string) => boolean,
    getFlavorPrice: (flavor:string) => number | null
}

export default IIceCreamService