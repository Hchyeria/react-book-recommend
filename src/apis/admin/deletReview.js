import { success } from '../../utils/Message.jsx'
import { get } from '../../utils/request'

export default async (params, cb) => {
    const res = await get({
        url: '/admin/deleteReview',
        params
    })

    if (res.status) {
        success(`删除评论成功！`)
        cb && cb(res.data)
    }
}