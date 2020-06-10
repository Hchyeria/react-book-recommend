import { observable, action } from 'mobx'

export class ReviewStore {

    @observable
    time = [
        {
            agreeNumber: 1,
            bookId: 1,
            bookName: "虚拟机的设计与实现",
            content: "这本书我挺喜欢的噢",
            coverUrl: "",
            hasAgree: false,
            reviewId: 1004,
            reviewTime: "2020-05-29T08:33:27.000+00:00",
            star: 4,
            userId: 1004,
        },
        {
            agreeNumber: 1,
            bookId: 1,
            bookName: "虚拟机的设计与实现",
            content: "这本书我挺喜欢的噢",
            coverUrl: "",
            hasAgree: false,
            reviewId: 1004,
            reviewTime: "2020-05-29T08:33:27.000+00:00",
            star: 4,
            userId: 1004,
        },
        {
            agreeNumber: 1,
            bookId: 1,
            bookName: "虚拟机的设计与实现",
            content: "这本书我挺喜欢的噢",
            coverUrl: "",
            hasAgree: false,
            reviewId: 1004,
            reviewTime: "2020-05-29T08:33:27.000+00:00",
            star: 4,
            userId: 1004,
        },
    ]

    @observable
    hot = [
        {
            agreeNumber: 1543,
            bookId: 1,
            bookName: "虚拟机的设计与实现",
            content: "这本书我挺喜欢的噢",
            coverUrl: "",
            reviewId: 1003,
            reviewTime: "2020-05-28T08:33:25.000+00:00",
            star: 4,
            userId: 1004
        },
        {
            agreeNumber: 1543,
            bookId: 1,
            bookName: "虚拟机的设计与实现",
            content: "这本书我挺喜欢的噢",
            coverUrl: "",
            reviewId: 1003,
            reviewTime: "2020-05-28T08:33:25.000+00:00",
            star: 4,
            userId: 1004
        },
        {
            agreeNumber: 1543,
            bookId: 1,
            bookName: "虚拟机的设计与实现",
            content: "这本书我挺喜欢的噢",
            coverUrl: "",
            reviewId: 1003,
            reviewTime: "2020-05-28T08:33:25.000+00:00",
            star: 4,
            userId: 1004
        }
    ]

    @action
    setHot = (hot) => {
        this.hot = hot
    }

    @action
    setTime = (time) => {
        this.time = time
    }

    @action
	deleteReview= (key) => {
		this.time = this.time.filter(e => e.reviewId !== key)
	}
}

export default new ReviewStore()
