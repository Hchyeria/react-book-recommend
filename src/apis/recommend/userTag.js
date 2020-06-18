import { get } from '../../utils/request'
import Book from '../../stores/book'

export default async (params, cb) => {
    if (Book.recommendTags.length) return
    const res = await get({
        url: '/recommend/userTag',
        params
    })

    if (res.status) {
        cb && cb(res.data)
    }
}