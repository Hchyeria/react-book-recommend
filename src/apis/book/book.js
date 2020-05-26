import { get } from '../../utils/request'
import { success } from '../../utils/Message.jsx'
import Book from '../../stores/book'

export const getBookById = async (bookID, cb) => {
    if (Book.infoList[bookID]) return
    const res = await get({
        url: '/book',
        params: {
            bookID
        }
    })

    if (res.status) {
        cb && cb(res.data)
    }
}