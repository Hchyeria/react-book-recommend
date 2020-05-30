import { success } from '../../utils/Message.jsx'
import { post } from '../../utils/request'

export default async (params, cb) => {
    const res = await post({
        url: '/shopping/delete',
        data: params,
    })

    if (res.status) {
        success(`从购物车删除成功！`)
        cb && cb(res.data)
    }
}