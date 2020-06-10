import { success } from '../../utils/Message.jsx'
import { get } from '../../utils/request'

export default async (params, cb) => {
    const res = await get({
        url: '/admin/deleteBook',
        params
    })

    if (res.status) {
        success(`删除书籍成功！`)
        cb && cb(res.data)
    }
}