import Actor from "./Actor"

 export default class Episode {
    _title: string
    _length: number
    _description: string
    _actors : Actor[]
    constructor(title:string, length: number, description: string, actors: Actor[]) {
        this._title = title;
        this._length = length;
        this._description = description;
        this._actors = actors;
    }
}

// export default Episode