import { get } from '../../utils/request'
import { success } from '../../utils/Message.jsx'
import Item from '../../stores/item'


export const getBook = async (params, cb) => {
    if (!Item.list.length) return
    const res = await get({
        url: '/book/list',
        params
    })

    if (res.status) {
        cb && cb(res.data)
    }
}