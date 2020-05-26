import { get } from '../../utils/request'
import { success } from '../../utils/Message.jsx'
import Book from '../../stores/book'

export const getBookById = async (bookId, cb) => {
    if (Book.infoList[bookId]) return
    const res = await get({
        url: '/book',
        params: {
            bookId
        }
    })

    if (res.status) {
        cb && cb(res.data)
    }
}