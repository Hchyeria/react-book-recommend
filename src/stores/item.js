import { observable, action } from 'mobx'

export class Item {

    @observable
    list = [
        {
            authorId: 1,
            authorName: "",
            bookId: 3,
            bookName: "Java Developers ALMANAC中文版",
            bookSubname: "",
            countryId: 1,
            countryName: "",
            coverUrl: "",
            isbn: "9787111111139",
            page: 1007,
            price: 99,
            publishedPlace: "",
            publishedTime: "2003-1",
            publisher: "",
            rating: 1
        },
        {
            authorId: 1,
            authorName: "",
            bookId: 3,
            bookName: "Java Developers ALMANAC中文版",
            bookSubname: "",
            countryId: 1,
            countryName: "",
            coverUrl: "",
            isbn: "9787111111139",
            page: 1007,
            price: 99,
            publishedPlace: "",
            publishedTime: "2003-1",
            publisher: "",
            rating: 1
        },
        {
            authorId: 1,
            authorName: "",
            bookId: 3,
            bookName: "Java Developers ALMANAC中文版",
            bookSubname: "",
            countryId: 1,
            countryName: "",
            coverUrl: "",
            isbn: "9787111111139",
            page: 1007,
            price: 99,
            publishedPlace: "",
            publishedTime: "2003-1",
            publisher: "",
            rating: 1
        },
    ]

    @action
    setList = (list) => {
        this.list = list
    }
}
export default new Item()
