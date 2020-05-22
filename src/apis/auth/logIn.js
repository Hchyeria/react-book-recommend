import { post } from '../../utils/request'
import { success } from '../../utils/Message.jsx'

export default async (data, cb) => {
    const res = await post({
        url: 'user/login',
        data
    })

    if (res.status) {
        success('Login successfully!')
        const { token, user } = res.data
        localStorage.setItem('token', token)
        localStorage.setItem('user', user)
        cb && cb(user)
    }
}