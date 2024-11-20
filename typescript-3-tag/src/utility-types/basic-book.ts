import IBook from "./interfaces/IBook";

type TBasicBook = IBook

 const basicBook: TBasicBook = {
    author: "Farid",
    name: "Andrej",
    publishingYear: "1211",
    numberOfPages: 2,
 }

 interface IBasicBook extends Omit<IBook, "publishingYear" | "shortDescription"> {}

 const basicBook2: IBasicBook = {
    author: "Farid",
    name: "Andrej",
    numberOfPages: 2,
 }