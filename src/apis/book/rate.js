import { get } from '../../utils/request'
import { success } from '../../utils/Message.jsx'
import { post } from '../../utils/request'

export default async (params, cb) => {
    const res = await post({
        url: '/book/rating',
        data: params,
    })

    if (res.status) {
        success(`评${params.rating}分成功！`)
        cb && cb(res.data)
    }
}