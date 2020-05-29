import { observable, action } from 'mobx'


export class Cart {
    @observable
    list = [
        // {
		// 	bookId: 8801,
		// 	isbn: '9787205060411',
		// 	bookName: '论高等教育与城市发展',
		// 	bookSubname: '',
		// 	authorId: 3240,
		// 	author: '[韩]李沧东',
		// 	countryId: 2,
		// 	publisher: '辽宁人民出版社',
		// 	publishedPlace: '沈阳',
		// 	publishedTime: '2006-05',
		// 	tagIds: ['小说', '传记'],
		// 	page: 0,
		// 	price: 0,
		// 	sellerlist: [
		// 		{
		// 			place: 'bookschina',
		// 			price: 0,
		// 		},
		// 	],
		// 	coverUrl: 'http://api.jisuapi.com/isbn//upload/3916/3915549.jpg',
		// 	rating: 0,
		// 	description: '这是一部非常具有电影感的小说集，其电影感体现在两个方面，一是沉浸式的叙事，一是蒙太奇式的转场。'
		// }
    ]
}

export default new Cart()

