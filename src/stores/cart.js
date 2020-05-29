import { observable, action } from 'mobx'


export class Cart {
	@observable
	list = [
		{
			cartItemId: 2,
			goodsId: 23,
			goodsCount: 1,
			goodsName: "艾略特波浪理论",
			sellingPrice: 38
		},
		{
			cartItemId: 2,
			goodsId: 23,
			goodsCount: 1,
			goodsName: "艾略特波浪理论",
			sellingPrice: 38
		},
	]
	@action
	setList = (list) => {
		this.list = list
	}
}

export default new Cart()

