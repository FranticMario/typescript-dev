import IShape from "./IShape";

class Circle implements IShape {
    _name: string = "circle";
    _color: string;
    _radius: number;
    constructor(color: string, radius: number) {
        this._color = color;
        this._radius = radius
    }

    public getCircle():void {
        console.log("Drawing circle")
    }
}