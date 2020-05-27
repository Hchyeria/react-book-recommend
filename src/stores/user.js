import { observable, action } from 'mobx'

export class User {

	@observable
	wantRead = [
		{
			bookId: 8801,
			isbn: '9787205060411',
			bookName: '论高等教育与城市发展',
			bookSubname: '',
			authorId: 3240,
			author: '[韩]李沧东',
			countryId: 2,
			publisher: '辽宁人民出版社',
			publishedPlace: '沈阳',
			publishedTime: '2006-05',
			tagIds: ['小说', '传记'],
			page: 0,
			price: 0,
			sellerlist: [
				{
					place: 'bookschina',
					price: 0,
				},
			],
			coverUrl: 'http://api.jisuapi.com/isbn//upload/3916/3915549.jpg',
			rating: 0,
			description:
				'这是一部非常具有电影感的小说集，其电影感体现在两个方面，一是沉浸式的叙事，一是蒙太奇式的转场。',
		},
		{
			bookId: 8802,
			isbn: '9787205060428',
			bookName: '魏书生的民主教育',
			bookSubname: '',
			authorId: 5039,
			author: '[韩]李沧东',
			countryId: 2,
			publisher: '辽宁人民出版社',
			publishedPlace: '沈阳',
			publishedTime: '2006-06',
			tags: ['小说', '传记', '外国文学', '随笔'],
			page: 0,
			price: 0,
			sellerlist: [
				{
					place: 'bookschina',
					price: 0,
				},
			],
			coverUrl: 'http://api.jisuapi.com/isbn/upload/3904/3903968.jpg',
			rating: 0,
			description:
				'这是一部非常具有电影感的小说集，其电影感体现在两个方面，一是沉浸式的叙事，一是蒙太奇式的转场。',
		},
	]

	@observable
	hasRead = [
		{
			bookId: 8801,
			isbn: '9787205060411',
			bookName: '论高等教育与城市发展',
			bookSubname: '',
			authorId: 3240,
			author: '[韩]李沧东',
			countryId: 2,
			publisher: '辽宁人民出版社',
			publishedPlace: '沈阳',
			publishedTime: '2006-05',
			tagIds: ['小说', '传记'],
			page: 0,
			price: 0,
			sellerlist: [
				{
					place: 'bookschina',
					price: 0,
				},
			],
			coverUrl: 'http://api.jisuapi.com/isbn//upload/3916/3915549.jpg',
			rating: 0,
			description:
				'这是一部非常具有电影感的小说集，其电影感体现在两个方面，一是沉浸式的叙事，一是蒙太奇式的转场。',
		},
		{
			bookId: 8802,
			isbn: '9787205060428',
			bookName: '魏书生的民主教育',
			bookSubname: '',
			authorId: 5039,
			author: '[韩]李沧东',
			countryId: 2,
			publisher: '辽宁人民出版社',
			publishedPlace: '沈阳',
			publishedTime: '2006-06',
			tags: ['小说', '传记', '外国文学', '随笔'],
			page: 0,
			price: 0,
			sellerlist: [
				{
					place: 'bookschina',
					price: 0,
				},
			],
			coverUrl: 'http://api.jisuapi.com/isbn/upload/3904/3903968.jpg',
			rating: 0,
			description:
				'这是一部非常具有电影感的小说集，其电影感体现在两个方面，一是沉浸式的叙事，一是蒙太奇式的转场。',
		},
	]

	@observable
	reviews = [
		{
			bookId: 493,
			userId: 1,
			content: '这本书真好看啊',
			star: 4,
			buyTime: '2020-05-29T09:38:32.000+00:00',
			agreeNumber: 53,
			reviewTime: '2020-05-29T09:38:32.000+00:00',
			coverUrl: '',
			bookName: '汽车专业英语',
		},
	]

	@action
	setWantRead = (wantRead) => {
		this.wantRead = wantRead
	}

	@action
	setHasRead = (hasRead) => {
		this.hasRead = hasRead
	}

	@action
	setReviews = (reviews) => {
		this.reviews = reviews
  }
  
  @action
	setInfo = (info) => {
    const { wantRead, hasRead, reviews } = info
    this.setReviews(reviews)
    this.setWantRead(wantRead)
    this.setHasRead(hasRead)
  }
}

export default new User()
