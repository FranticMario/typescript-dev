import Beverage from "./beverage"
import CoffeeArt from "./enums/CoffeEnum"

export default class Coffee extends Beverage {
    type: CoffeeArt
    constructor(type: CoffeeArt) {
        super()
        this.type = type
    }
}