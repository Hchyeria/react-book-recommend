import { post } from '../../utils/request'

export default async (params, cb) => {
    const res = await post({
        url: '/review/book/reviewTime',
        data: params,
    })

    if (res.status) {
        cb && cb(res.data)
    }
}