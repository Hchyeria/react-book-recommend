import { observable, action } from 'mobx'

export class Order {

    @observable
    list = [
        {
            orderNo: "1",
            orderStatus: "-1",
            totalPrice: 122,
            userAddress: "重庆",
        },
        {
            orderNo: "1",
            orderStatus: "-1",
            totalPrice: 122,
            userAddress: "重庆",
        },
        {
            orderNo: "1",
            orderStatus: "-1",
            totalPrice: 122,
            userAddress: "重庆",
        },

    ]

    @action
    setList = (list) => {
        this.list = list
    }

    @action
	setInfo = (info) => {
    const { list } = info
    this.setList(list)
  }
}
export default new Order()