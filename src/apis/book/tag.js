import { get } from '../../utils/request'
import { success } from '../../utils/Message.jsx'

export default async (params, cb) => {
    const res = await get({
        url: '/book/tag',
        params
    })

    if (res.status) {
        cb && cb(res.data)
    }
}