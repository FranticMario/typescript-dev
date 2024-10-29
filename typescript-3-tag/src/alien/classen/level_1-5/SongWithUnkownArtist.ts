import Song from "./Song";

class SongWithUnkownArtist extends Song {
    constructor(title:string) {
        super(title, "Unkown")
        this.getElternClass()
    }


    getElternClass() {
        return this
    }


    setArtist(name:string) {
        this._artist = name
    }


}

export default SongWithUnkownArtist