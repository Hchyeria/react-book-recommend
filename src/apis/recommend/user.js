import { get } from '../../utils/request'
import Book from '../../stores/book'

export default async (params, cb) => {

    const res = await get({
        url: '/recommend/user',
        params
    })

    if (res.status) {
        cb && cb(res.data)
    }
}