import Episode from "./Episode"

export default class Series {
    _title: string
    _description: string
    _startYear: number
    _endYear: number
    _episodes: Episode[]
    constructor(startYear: number, endYear: number, episodes: Episode[]) {
        this._title = episodes[0]._title;
        this._description = episodes[0]._description; 
        this._startYear = startYear
        this._endYear = endYear
        this._episodes = episodes
    }
}

// export default Series