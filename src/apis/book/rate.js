import { get } from '../../utils/request'
import { success } from '../../utils/Message.jsx'

export default async (params, cb) => {
    const res = await get({
        url: '/book/rating',
        params
    })

    if (res.status) {
        success(`评${params.rating}分成功！`)
        cb && cb(res.data)
    }
}