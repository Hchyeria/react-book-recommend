import { get } from '../../utils/request'

export default async (userID, cb) => {

    const res = await get({
        url: '/user/center',
        params: {
            userID
        }
    })

    if (res.status) {
        cb && cb(res.data)
    }
}