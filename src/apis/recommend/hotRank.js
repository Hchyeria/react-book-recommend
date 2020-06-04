import { get } from '../../utils/request'
import Book from '../../stores/book'

export default async (params, cb) => {
    if (Book.top.length && Book.top10.length) return
    const res = await get({
        url: '/recommend/hotRank',
        params
    })

    if (res.status) {
        cb && cb(res.data)
    }
}