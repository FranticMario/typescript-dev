import Song from "./Song";
import SongWithUnkownArtist from "./SongWithUnkownArtist";


const songManera = new Song("No Heart", "Pharaoh")
songManera._durationInSeconds = 3
console.log(songManera)

const SongWithUnkown = new SongWithUnkownArtist("HONOR")
console.log(SongWithUnkown)

SongWithUnkown.setArtist("xxxmanera")

console.log(SongWithUnkown)