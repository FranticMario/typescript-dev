import IBook from "./interfaces/IBook";

type BookDescription = IBook;

const bookDescription:BookDescription = {
    author: "Farid",
    name: "Andrej",
    publishingYear: "1211",
    numberOfPages: 2,
}

interface IBookDescription extends Pick<IBook, "name" | "shortDescription"> {}


const bookDescription2:IBookDescription = {
    name: "Andrej",
    shortDescription:"sadad"

}
