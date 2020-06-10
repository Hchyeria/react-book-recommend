import { observable, action } from 'mobx'

export class HotRank {
	@observable
	top10 = []

	@observable
	hotAuthor = [
	]

	@observable
	hotBoardBook = []

	@observable
	hotChineseBook = []

	@observable
	hotTagAndBook = [
  ]
  

	@action
	setTop10 = (data) => {
		this.top10 = data
	}

	@action
	setHotAuthor = (data) => {
		this.hotAuthor = data
	}

	@action
	setHotBoardBook = (data) => {
		this.hotBoardBook = data
	}

	@action
	setHotChineseBook = (data) => {
		this.hotChineseBook = data
	}

	@action
	setHotTagAndBook = (data) => {
		this.hotTagAndBook = data
	}
}

export default new HotRank()
