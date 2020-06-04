import { get } from '../../utils/request'
import Book from '../../stores/book'

export default async (params, cb) => {
    if (Book.tags.length) return
    const res = await get({
        url: '/recommend/hotTag',
        params
    })

    if (res.status) {
        cb && cb(res.data)
    }
}