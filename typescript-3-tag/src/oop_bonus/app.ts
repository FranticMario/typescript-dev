import Actor from "./classen/Actor";
import Episode from "./classen/Episode";
import Series from "./classen/Series";

const actor_1 = new Actor("Bryan", "Cranston", "1956-03-07", "male")
const actor_2 = new Actor("Aaron", "Paul", "1979-08-27", "male")
const actor_3 = new Actor("Anna", "Gunn", "1968-04-11", "female")


const episoped = new Episode("Breaking Bad", 2, "A high school chemistry teacher turned methamphetamine manufacturer", [actor_1, actor_2, actor_3])

const serie = new Series(2008, 2013, [episoped])

console.log(serie)


const printSeriesInfo = (series: Series) => {
    return `Title: ${series._title}
            Description: ${series._description}
            Start Year: ${series._startYear}
            End Year: ${series._endYear}
            Number of Episodes: ${series._episodes[0]._length}
            Actors: ${series._episodes[0]._actors[0]._firstName} ${series._episodes[0]._actors[0]._firstName}
            Birthday: ${series._episodes[0]._actors[0]._birthday}
            Gender: ${series._episodes[0]._actors[0]._gender}`
}


console.log(printSeriesInfo(serie))