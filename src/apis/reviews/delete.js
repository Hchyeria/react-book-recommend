
import { success } from '../../utils/Message.jsx'
import { post } from '../../utils/request'

export default async (params, cb) => {
    const res = await post({
        url: '/review/delete',
        data: params,
    })

    if (res.status) {
        success(`删除评论成功！`)
        cb && cb(res.data)
    }
}