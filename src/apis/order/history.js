import { get } from '../../utils/request'
import Book from '../../stores/book'

export default async (cb) => {

    const res = await get({
        url: '/order/history',
        // params
    })

    if (res.status) {
        cb && cb(res.data)
    }
}