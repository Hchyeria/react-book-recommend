import { success } from '../../utils/Message.jsx'
import { post } from '../../utils/request'

export default async (params, cb) => {
    const res = await post({
        url: '/order/create',
        data: params,
    })

    if (res.status) {
        success(`下单成功！`)
        cb && cb(res.data)
    }
}