import { observable, action } from 'mobx'


export class Cart {
	@observable
	list = [
		{
			key: 2,
			cartItemId: 2,
			goodsId: 23,
			goodsCount: 1,
			goodsName: "艾略特波浪理论",
			sellingPrice: 38
		},
		{
			key: 3,
			cartItemId: 3,
			goodsId: 23,
			goodsCount: 1,
			goodsName: "艾略特波浪理论",
			sellingPrice: 38
		},
		{
			key: 3,
			cartItemId: 3,
			goodsId: 23,
			goodsCount: 1,
			goodsName: "艾略特波浪理论",
			sellingPrice: 38
		},
	]
	@action
	setList = (list) => {
		this.list = list.map(ele => (
			{
				...ele,
				key: ele.cartItemId
			}
		))
	}

	@action
	deleteItem = (key) => {
		this.list = this.list.filter(e => e.cartItemId !== key)
	}
}

export default new Cart()

