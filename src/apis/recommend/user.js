import { get } from '../../utils/request'
import Book from '../../stores/book'

export default async (params, cb) => {
    if (Book.like.length > 0) return
    const res = await get({
        url: '/recommend/user',
        params
    })

    if (res.status) {
        cb && cb(res.data)
    }
}