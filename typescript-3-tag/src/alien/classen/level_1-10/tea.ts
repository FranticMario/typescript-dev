import Beverage from "./beverage";
import TeaArt from "./enums/TeaEnum";

class Tea extends Beverage {
    flavor: TeaArt
    constructor(flavor: TeaArt){
        super()
        this.flavor = flavor
    }


    getFlavor():string {
        return TeaArt[this.flavor]
    }
        

}

export default Tea;