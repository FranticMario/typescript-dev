class Song {
    private _title:string;
    protected _artist: string;
    public _durationInSeconds?: number;
    constructor(title: string, artist: string) {
        this._title = title;
        this._artist = artist
    }
}


export default Song