import { get } from '../../utils/request'

export default async (cb) => {
    const res = await get({
        url: '/shopping/my-cart',
        // params
    })

    if (res.status) {
        cb && cb(res.data)
    }
}