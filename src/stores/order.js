import { observable, action } from 'mobx'

export class Order {

    @observable
    list = [
        {
            orderId: 1,
            time: "2020-5-29",
            money: 99,
        },
        {
            orderId: 1,
            time: "2020-5-29",
            money: 99,
        },
        {
            orderId: 1,
            time: "2020-5-29",
            money: 99,
        },
    ]

    @action
    setList = (list) => {
        this.list = list
    }
}
export default new Order()