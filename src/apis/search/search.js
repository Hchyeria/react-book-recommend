import { get } from '../../utils/request'

export default async (params, cb) => {
    const res = await get({
        url: '/search',
        params
    })

    if (res.status) {
        cb && cb(res.data)
    }
}