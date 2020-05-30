import { success } from '../../utils/Message.jsx'
import { post } from '../../utils/request'

export default async (params, cb) => {
    const res = await post({
        url: '/shopping/add',
        data: params,
    })

    if (res.status) {
        success(`加入购物车成功！`)
        cb && cb(res.data)
    }
}