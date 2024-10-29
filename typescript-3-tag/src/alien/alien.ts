class Alien {
    public _name: string;
    private _color: string;
    public _planet: string = "moon";
    public _galaxy:string = "Uni";
    constructor(name:string, color: string,) {
        this._name = name;
        this._color = color;
    }
    getColor() {
        return this._color
    }
}

const alie1 = new Alien("456", "black")
console.log(alie1)
