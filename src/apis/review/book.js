import { get } from '../../utils/request'
import { success } from '../../utils/Message.jsx'
import { post } from '../../utils/request'

export default async (params, cb) => {
    const res = await post({
        url: '/review/add',
        data: params,
    })

    if (res.status) {
        success(`评论成功！`)
        cb && cb(res.data)
    }
}