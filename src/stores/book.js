import { observable, action } from 'mobx'

export class Book {
	@observable
	like = []

	@observable
	list = []

	@observable
	tags = []



	@observable
	recommendTags = []

	@observable
	top10 = []

	@observable
	top = []

	@observable
	infoList = {}

	@action
	setLike = (like) => {
		this.like = like
	}

	@action
	setList = (list) => {
		this.list = list
	}

	@action
	setListByIndex = (value, index) => {
		this.list[index] = value
	}

	@action
	setBookById = (book) => {
		if (this.infoList[book.bookId]) return
		this.infoList[book.bookId] = book
	}

	@action
	setTop = ([top, ...books]) => {
		if (!books.length) return
		this.top[0] = top
		this.top10 = books
	}

	@action
	setTag = (tags) => {
		this.tags = tags
	}

	@action
	deleteBook = (key) => {
		this.list = this.list.filter(e => e.bookId !== key)
	}

}

export default new Book()
