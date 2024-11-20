import IBook from "./interfaces/IBook";

type TPartialBook = IBook

const partialBook:TPartialBook = {
    author: "Farid",
    name: "Andrej",
    publishingYear: "1211",
    numberOfPages: 2,
}


interface IPartialBook extends Partial<IBook> {}

const partialBook2: IPartialBook = {
    name: "Farid"
}