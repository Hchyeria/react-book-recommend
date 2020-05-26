import { observable, action } from 'mobx'

export class Book {
	@observable
	like = [
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
			description: '这是一部非常具有电影感的小说集，其电影感体现在两个方面，一是沉浸式的叙事，一是蒙太奇式的转场。'
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
			description: '这是一部非常具有电影感的小说集，其电影感体现在两个方面，一是沉浸式的叙事，一是蒙太奇式的转场。'
		},
		{
			bookId: 8803,
			isbn: '9787205060435',
			bookName: '意大利声乐作品集',
			bookSubname: '胡明健声乐专家组外国歌曲系列丛书',
			authorId: 1162,
			author: '[韩]李沧东',
			countryId: 2,
			publisher: '辽宁人民出版社',
			publishedPlace: '沈阳',
			publishedTime: '2006-05',
			tags: ['小说', '传记'],
			page: 0,
			price: 19,
			sellerlist: [
				{
					place: 'bookschina',
					price: 0,
				},
			],
			coverUrl: 'http://api.jisuapi.com/isbn//upload/3916/3915550.jpg',
			rating: 0,
			description: '这是一部非常具有电影感的小说集，其电影感体现在两个方面，一是沉浸式的叙事，一是蒙太奇式的转场。这是一部非常具有电影感的小说集，其电影感体现在两个方面，一是沉浸式的叙事，一是蒙太奇式的转场。这是一部非常具有电影感的小说集，其电影感体现在两个方面，一是沉浸式的叙事，一是蒙太奇式的转场。'
		},
		{
			bookId: 8804,
			isbn: '9787205060442',
			bookName: '红军不怕远征难红军不怕远征难红军不怕远征难红军不怕远征难红军不怕远征难',
			bookSubname: '',
			authorId: 6963,
			author: '[韩]李沧东',
			countryId: 9,
			publisher: '辽宁人民出版社',
			publishedPlace: '沈阳',
			publishedTime: '2006-06',
			tags: ['小说', '传记'],
			page: 0,
			price: 4.8,
			sellerlist: [
				{
					place: 'bookschina',
					price: 0,
				},
			],
			coverUrl: 'http://api.jisuapi.com/isbn//upload/3916/3915551.jpg',
			rating: 0,
		},
		{
			bookId: 8805,
			isbn: '9787205060459',
			bookName: '红军不怕远征难',
			bookSubname: '',
			authorId: 6963,
			author: '[韩]李沧东',
			countryId: 9,
			publisher: '辽宁人民出版社',
			publishedPlace: '沈阳',
			publishedTime: '2006-06',
			tags: ['小说', '传记', '外国文学', '随笔'],
			page: 0,
			price: 4.8,
			sellerlist: [
				{
					place: 'bookschina',
					price: 0,
				},
			],
			coverUrl: 'http://api.jisuapi.com/isbn//upload/3916/3915549.jpg',
			rating: 0,
		},
		{
			bookId: 8806,
			isbn: '9787205060466',
			bookName: '红军不怕远征难',
			bookSubname: '',
			authorId: 6963,
			author: '[韩]李沧东',
			countryId: 9,
			publisher: '辽宁人民出版社',
			publishedPlace: '沈阳',
			publishedTime: '2006-06',
			tags: ['小说', '传记'],
			page: 0,
			price: 4.8,
			sellerlist: [
				{
					place: 'bookschina',
					price: 0,
				},
			],
			coverUrl: 'http://api.jisuapi.com/isbn//upload/3916/3915549.jpg',
			rating: 0,
		},
		{
			bookId: 8807,
			isbn: '9787205060473',
			bookName: '本溪林业谈',
			bookSubname: '',
			authorId: 1315,
			author: '[韩]李沧东',
			countryId: 2,
			publisher: '辽宁人民出版社',
			publishedPlace: '沈阳',
			publishedTime: '2006-02',
			tags: ['小说', '传记', '外国文学', '随笔'],
			page: 0,
			price: 25,
			sellerlist: [
				{
					place: 'bookschina',
					price: 0,
				},
				{
					place: '当当',
					price: 116,
				},
			],
			coverUrl: 'http://api.jisuapi.com/isbn//upload/3916/3915549.jpg',
			rating: 0,
		},
		{
			bookId: 8808,
			isbn: '9787205060480',
			bookName: '中国经济大讲堂（第2辑）',
			bookSubname: '',
			authorId: 7734,
			author: '[韩]李沧东',
			countryId: 9,
			publisher: '',
			publishedPlace: '',
			publishedTime: '2006-5',
			page: 243,
			price: 30,
			sellerlist: [
				{
					place: 'douban',
					price: 30,
				},
			],
			coverUrl: 'http://api.jisuapi.com/isbn//upload/3916/3915549.jpg',
			rating: 0,
		},
		{
			bookId: 8809,
			isbn: '9787205060497',
			bookName: '医疗纠纷与损害赔偿研究',
			bookSubname: '',
			authorId: 3495,
			author: '[韩]李沧东',
			countryId: 2,
			publisher: '辽宁人民出版社',
			publishedPlace: '沈阳',
			publishedTime: '2006-05',
			tags: ['小说', '传记'],
			page: 0,
			price: 20,
			sellerlist: [
				{
					place: 'bookschina',
					price: 0,
				},
			],
			coverUrl: 'http://api.jisuapi.com/isbn//upload/3916/3915549.jpg',
			rating: 4.5,
		},
		{
			bookId: 8810,
			isbn: '9787205060404',
			bookName: '健康教育',
			bookSubname: '',
			authorId: 1149,
			author: '[韩]李沧东',
			countryId: 2,
			publisher: '辽宁人民出版社',
			publishedPlace: '沈阳',
			publishedTime: '2006-07',
			tags: ['小说', '传记', '外国文学', '随笔'],
			page: 0,
			price: 4.5,
			sellerlist: [
				{
					place: 'bookschina',
					price: 0,
				},
			],
			coverUrl: 'http://api.jisuapi.com/isbn//upload/3916/3915549.jpg',
			rating: 10,
		},
	]

	@observable
	list = [
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
			description: '这是一部非常具有电影感的小说集，其电影感体现在两个方面，一是沉浸式的叙事，一是蒙太奇式的转场。'
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
			description: '这是一部非常具有电影感的小说集，其电影感体现在两个方面，一是沉浸式的叙事，一是蒙太奇式的转场。'
		},
		{
			bookId: 8803,
			isbn: '9787205060435',
			bookName: '意大利声乐作品集',
			bookSubname: '胡明健声乐专家组外国歌曲系列丛书',
			authorId: 1162,
			author: '[韩]李沧东',
			countryId: 2,
			publisher: '辽宁人民出版社',
			publishedPlace: '沈阳',
			publishedTime: '2006-05',
			tags: ['小说', '传记'],
			page: 0,
			price: 19,
			sellerlist: [
				{
					place: 'bookschina',
					price: 0,
				},
			],
			coverUrl: 'http://api.jisuapi.com/isbn//upload/3916/3915550.jpg',
			rating: 0,
			description: '这是一部非常具有电影感的小说集，其电影感体现在两个方面，一是沉浸式的叙事，一是蒙太奇式的转场。这是一部非常具有电影感的小说集，其电影感体现在两个方面，一是沉浸式的叙事，一是蒙太奇式的转场。这是一部非常具有电影感的小说集，其电影感体现在两个方面，一是沉浸式的叙事，一是蒙太奇式的转场。'
		},
		{
			bookId: 8804,
			isbn: '9787205060442',
			bookName: '红军不怕远征难',
			bookSubname: '',
			authorId: 6963,
			author: '[韩]李沧东',
			countryId: 9,
			publisher: '辽宁人民出版社',
			publishedPlace: '沈阳',
			publishedTime: '2006-06',
			tags: ['小说', '传记'],
			page: 0,
			price: 4.8,
			sellerlist: [
				{
					place: 'bookschina',
					price: 0,
				},
			],
			coverUrl: 'http://api.jisuapi.com/isbn//upload/3916/3915551.jpg',
			rating: 0,
		},
		{
			bookId: 8805,
			isbn: '9787205060459',
			bookName: '红军不怕远征难',
			bookSubname: '',
			authorId: 6963,
			author: '[韩]李沧东',
			countryId: 9,
			publisher: '辽宁人民出版社',
			publishedPlace: '沈阳',
			publishedTime: '2006-06',
			tags: ['小说', '传记', '外国文学', '随笔'],
			page: 0,
			price: 4.8,
			sellerlist: [
				{
					place: 'bookschina',
					price: 0,
				},
			],
			coverUrl: 'http://api.jisuapi.com/isbn//upload/3916/3915549.jpg',
			rating: 0,
		},
		{
			bookId: 8806,
			isbn: '9787205060466',
			bookName: '红军不怕远征难',
			bookSubname: '',
			authorId: 6963,
			author: '[韩]李沧东',
			countryId: 9,
			publisher: '辽宁人民出版社',
			publishedPlace: '沈阳',
			publishedTime: '2006-06',
			tags: ['小说', '传记'],
			page: 0,
			price: 4.8,
			sellerlist: [
				{
					place: 'bookschina',
					price: 0,
				},
			],
			coverUrl: 'http://api.jisuapi.com/isbn//upload/3916/3915549.jpg',
			rating: 0,
		},
		{
			bookId: 8807,
			isbn: '9787205060473',
			bookName: '本溪林业谈',
			bookSubname: '',
			authorId: 1315,
			author: '[韩]李沧东',
			countryId: 2,
			publisher: '辽宁人民出版社',
			publishedPlace: '沈阳',
			publishedTime: '2006-02',
			tags: ['小说', '传记', '外国文学', '随笔'],
			page: 0,
			price: 25,
			sellerlist: [
				{
					place: 'bookschina',
					price: 0,
				},
				{
					place: '当当',
					price: 116,
				},
			],
			coverUrl: 'http://api.jisuapi.com/isbn//upload/3916/3915549.jpg',
			rating: 0,
		},
		{
			bookId: 8808,
			isbn: '9787205060480',
			bookName: '中国经济大讲堂（第2辑）',
			bookSubname: '',
			authorId: 7734,
			author: '[韩]李沧东',
			countryId: 9,
			publisher: '',
			publishedPlace: '',
			publishedTime: '2006-5',
			page: 243,
			price: 30,
			sellerlist: [
				{
					place: 'douban',
					price: 30,
				},
			],
			coverUrl: 'http://api.jisuapi.com/isbn//upload/3916/3915549.jpg',
			rating: 0,
		},
		{
			bookId: 8809,
			isbn: '9787205060497',
			bookName: '医疗纠纷与损害赔偿研究',
			bookSubname: '',
			authorId: 3495,
			author: '[韩]李沧东',
			countryId: 2,
			publisher: '辽宁人民出版社',
			publishedPlace: '沈阳',
			publishedTime: '2006-05',
			tags: ['小说', '传记'],
			page: 0,
			price: 20,
			sellerlist: [
				{
					place: 'bookschina',
					price: 0,
				},
			],
			coverUrl: 'http://api.jisuapi.com/isbn//upload/3916/3915549.jpg',
			rating: 4.5,
		},
		{
			bookId: 8810,
			isbn: '9787205060404',
			bookName: '健康教育',
			bookSubname: '',
			authorId: 1149,
			author: '[韩]李沧东',
			countryId: 2,
			publisher: '辽宁人民出版社',
			publishedPlace: '沈阳',
			publishedTime: '2006-07',
			tags: ['小说', '传记', '外国文学', '随笔'],
			page: 0,
			price: 4.5,
			sellerlist: [
				{
					place: 'bookschina',
					price: 0,
				},
			],
			coverUrl: 'http://api.jisuapi.com/isbn//upload/3916/3915549.jpg',
			rating: 10,
		},
	]

	@observable
	tags = [
		'文学',
		'小说',
		'随笔',
		'日本文学',
		'散文',
		'诗歌',
		'童话',
		'名著',
		'港台',
		'流行',
		'漫画',
		'推理',
		'绘本',
		'青春',
		'科幻',
		'言情',
		'奇幻',
		'武侠',
		'文化',
		'历史',
		'哲学',
		'传记',
		'设计',
		'建筑',
		'电影',
		'回忆录',
		'音乐',
		'生活',
		'旅行',
		'励志',
		'教育',
		'职场',
		'美食',
		'灵修',
		'健康',
		'家居',
		'经管',
		'经济学',
		'管理',
		'商业',
		'金融',
		'营销',
		'理财',
		'股票',
		'企业史',
		'科技'
	]



	@observable
	recommendTags = [
		'文学',
		'小说',
		'随笔',
		'日本文学',
		'散文',
		'诗歌',
		'童话',
		'名著',
		'港台',
		'流行',
		'漫画',
		'推理',
		'绘本',
		'青春'
	]

	@observable
	top10 = [
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
			description: '这是一部非常具有电影感的小说集，其电影感体现在两个方面，一是沉浸式的叙事，一是蒙太奇式的转场。'
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
			description: '这是一部非常具有电影感的小说集，其电影感体现在两个方面，一是沉浸式的叙事，一是蒙太奇式的转场。'
		},
		{
			bookId: 8803,
			isbn: '9787205060435',
			bookName: '意大利声乐作品集',
			bookSubname: '胡明健声乐专家组外国歌曲系列丛书',
			authorId: 1162,
			author: '[韩]李沧东',
			countryId: 2,
			publisher: '辽宁人民出版社',
			publishedPlace: '沈阳',
			publishedTime: '2006-05',
			tags: ['小说', '传记'],
			page: 0,
			price: 19,
			sellerlist: [
				{
					place: 'bookschina',
					price: 0,
				},
			],
			coverUrl: 'http://api.jisuapi.com/isbn//upload/3916/3915550.jpg',
			rating: 0,
			description: '这是一部非常具有电影感的小说集，其电影感体现在两个方面，一是沉浸式的叙事，一是蒙太奇式的转场。这是一部非常具有电影感的小说集，其电影感体现在两个方面，一是沉浸式的叙事，一是蒙太奇式的转场。这是一部非常具有电影感的小说集，其电影感体现在两个方面，一是沉浸式的叙事，一是蒙太奇式的转场。'
		},
		{
			bookId: 8804,
			isbn: '9787205060442',
			bookName: '红军不怕远征难',
			bookSubname: '',
			authorId: 6963,
			author: '[韩]李沧东',
			countryId: 9,
			publisher: '辽宁人民出版社',
			publishedPlace: '沈阳',
			publishedTime: '2006-06',
			tags: ['小说', '传记'],
			page: 0,
			price: 4.8,
			sellerlist: [
				{
					place: 'bookschina',
					price: 0,
				},
			],
			coverUrl: 'http://api.jisuapi.com/isbn//upload/3916/3915551.jpg',
			rating: 0,
		},
		{
			bookId: 8805,
			isbn: '9787205060459',
			bookName: '红军不怕远征难',
			bookSubname: '',
			authorId: 6963,
			author: '[韩]李沧东',
			countryId: 9,
			publisher: '辽宁人民出版社',
			publishedPlace: '沈阳',
			publishedTime: '2006-06',
			tags: ['小说', '传记', '外国文学', '随笔'],
			page: 0,
			price: 4.8,
			sellerlist: [
				{
					place: 'bookschina',
					price: 0,
				},
			],
			coverUrl: 'http://api.jisuapi.com/isbn//upload/3916/3915549.jpg',
			rating: 0,
		},
		{
			bookId: 8806,
			isbn: '9787205060466',
			bookName: '红军不怕远征难',
			bookSubname: '',
			authorId: 6963,
			author: '[韩]李沧东',
			countryId: 9,
			publisher: '辽宁人民出版社',
			publishedPlace: '沈阳',
			publishedTime: '2006-06',
			tags: ['小说', '传记'],
			page: 0,
			price: 4.8,
			sellerlist: [
				{
					place: 'bookschina',
					price: 0,
				},
			],
			coverUrl: 'http://api.jisuapi.com/isbn//upload/3916/3915549.jpg',
			rating: 0,
		},
		{
			bookId: 8807,
			isbn: '9787205060473',
			bookName: '本溪林业谈',
			bookSubname: '',
			authorId: 1315,
			author: '[韩]李沧东',
			countryId: 2,
			publisher: '辽宁人民出版社',
			publishedPlace: '沈阳',
			publishedTime: '2006-02',
			tags: ['小说', '传记', '外国文学', '随笔'],
			page: 0,
			price: 25,
			sellerlist: [
				{
					place: 'bookschina',
					price: 0,
				},
				{
					place: '当当',
					price: 116,
				},
			],
			coverUrl: 'http://api.jisuapi.com/isbn//upload/3916/3915549.jpg',
			rating: 0,
		},
		{
			bookId: 8808,
			isbn: '9787205060480',
			bookName: '中国经济大讲堂（第2辑）',
			bookSubname: '',
			authorId: 7734,
			author: '[韩]李沧东',
			countryId: 9,
			publisher: '',
			publishedPlace: '',
			publishedTime: '2006-5',
			page: 243,
			price: 30,
			sellerlist: [
				{
					place: 'douban',
					price: 30,
				},
			],
			coverUrl: 'http://api.jisuapi.com/isbn//upload/3916/3915549.jpg',
			rating: 0,
		},
		{
			bookId: 8809,
			isbn: '9787205060497',
			bookName: '医疗纠纷与损害赔偿研究',
			bookSubname: '',
			authorId: 3495,
			author: '[韩]李沧东',
			countryId: 2,
			publisher: '辽宁人民出版社',
			publishedPlace: '沈阳',
			publishedTime: '2006-05',
			tags: ['小说', '传记'],
			page: 0,
			price: 20,
			sellerlist: [
				{
					place: 'bookschina',
					price: 0,
				},
			],
			coverUrl: 'http://api.jisuapi.com/isbn//upload/3916/3915549.jpg',
			rating: 4.5,
		},
	]

	@observable
	top = [
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
			description: '这是一部非常具有电影感的小说集，其电影感体现在两个方面，一是沉浸式的叙事，一是蒙太奇式的转场。'
		},
	]



	@observable
	infoList = {}

	@action
	setLike = (like) => {
		this.like = like
	}

	@action
	setList = (list) => {
		this.list = list
	}

	@action
	setListByIndex = (value, index) => {
		this.list[index] = value
	}

	@action
	setBookById = (book) => {
		if (this.infoList[book.bookId]) return
		this.infoList[book.bookId] = book
	}

	@action
	setTop = (top) => {
		this.top = top
	}

	@action
	setTop10 = (top10) => {
		this.top10 = top10
	}


}

export default new Book()
