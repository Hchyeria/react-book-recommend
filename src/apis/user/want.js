import { get } from '../../utils/request'
import { success } from '../../utils/Message.jsx'

export default async (params, cb) => {
    const res = await get({
        url: '/user/wantRead',
        params
    })

    if (res.status) {
        success(`标记成功！`)
        cb && cb(res.data)
    }
}