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
    // list = [
    //     {
    //         orderNo: 1,
    //         totalPrice: 158,
    //         orderStatus: '',
    //         userAddress: '',
    //         mallOrderItemVOS: [
    //             {
    //                 goodsId: 1,
    //                 goodsCount: 2,
    //                 goodsName: '单片机原理及应用',
    //                 sellingPrice: 78,
    //                 author: '[韩]李沧东',
    //                 coverUrl: '',
    //             },
    //             {
    //                 goodsId: 1,
    //                 goodsCount: 2,
    //                 goodsName: '单片机原理及应用',
    //                 sellingPrice: 78,
    //                 author: '[韩]李沧东',
    //                 coverUrl: '',
    //             },
    //         ],
    //     },
    //     {
    //         orderNo: 8801,
    //         totalPrice: 158,
    //         orderStatus: '',
    //         userAddress: '',
    //         mallOrderItemVOS: [
    //             {
    //                 goodsId: 1,
    //                 goodsCount: 2,
    //                 goodSName: '单片机原理及应用',
    //                 sellingPrice: 78
    //             },
    //             {
    //                 goodsId: 1,
    //                 goodsCount: 2,
    //                 goodSName: '单片机原理及应用',
    //                 sellingPrice: 78
    //             },
    //         ],
    //     },
    //     {
    //         orderNo: 8801,
    //         totalPrice: 158,
    //         orderStatus: '',
    //         userAddress: '',
    //         mallOrderItemVOS: [
    //             {
    //                 goodsId: 1,
    //                 goodsCount: 2,
    //                 goodSName: '单片机原理及应用',
    //                 sellingPrice: 78
    //             },
    //             {
    //                 goodsId: 1,
    //                 goodsCount: 2,
    //                 goodSName: '单片机原理及应用',
    //                 sellingPrice: 78
    //             },
    //         ],
    //     }
    // ]

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