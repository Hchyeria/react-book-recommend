import { get } from '../../utils/request'
import HotRank from '../../pages/Annual/stores/hotRank'

export const hotAuthorAndBook = async () => {
    if (HotRank.hotAuthor.length) return HotRank.hotAuthor
    const res = await get({
        url: '/rankList/hotAuthorAndBook',
        params: {
            page: 1,
            size: 10
        }
    })

    if (res.status) {
        HotRank.setHotAuthor(res.data)
        return res.data
    }
}

export const hotBoardBook = async () => {
    if (HotRank.hotBoardBook.length) return HotRank.hotBoardBook
    const res = await get({
        url: '/rankList/hotBoardBook'
    })

    if (res.status) {
        HotRank.setHotBoardBook(res.data)
        return res.data
    }
}

export const hotChineseBook = async () => {
    if (HotRank.hotChineseBook.length) return HotRank.hotChineseBook
    const res = await get({
        url: '/rankList/hotChineseBook'
    })

    if (res.status) {
        HotRank.setHotChineseBook(res.data)
        return res.data
    }
}

export const hotRank = async () => {
    if (HotRank.top10.length) return HotRank.top10
    const res = await get({
        url: '/rankList/hotRank',
        params: {
            page: 1,
            size: 10
        }
    })

    if (res.status) {
        HotRank.setTop10(res.data)
        return res.data
    }
}

export const hotTagAndBook = async () => {
    if (HotRank.hotTagAndBook.length) return HotRank.hotTagAndBook
    const res = await get({
        url: '/rankList/hotTagAndBook',
        params: {
            page: 1,
            size: 10
        }
    })

    if (res.status) {
        HotRank.setHotTagAndBook(res.data)
        return res.data
    }
}