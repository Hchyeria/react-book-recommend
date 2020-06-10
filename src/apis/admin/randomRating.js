import { success } from '../../utils/Message.jsx'
import { get } from '../../utils/request'

export default async (params, cb) => {
    const res = await get({
        url: '/admin/randomRating',
        params
    })

    if (res.status) {
        success(`生成评分成功！`)
        cb && cb(res.data)
    }
}