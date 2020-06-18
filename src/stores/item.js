import { observable, action } from 'mobx'

const convertList = (list) => {
	let len = list.length
	let temp = [[], [], [], [], []]
	for (let i = 0; i < len; ++i) {
		temp[i % temp.length].push(list[i])
	}
	return temp
}

export class Item {
	@observable
	list = [[], [], [], [], []]

	@action
	setList = (list) => {
		this.list = convertList(list)
	}
}
export default new Item()
