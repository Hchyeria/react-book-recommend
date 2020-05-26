import { post } from '../../utils/request'
import { success } from '../../utils/Message.jsx'

export default async (data, cb) => {
    const res = await post({
        url: 'user/register',
        data
    })
    if (res.status) {
        success("Register successfully!")
        cb && cb()
    }
}