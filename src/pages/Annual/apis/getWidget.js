import {
	hotAuthorAndBook,
	hotTagAndBook,
	hotBoardBook,
	hotRank,
	hotChineseBook,
} from '../../../apis/annual/hotRank'
import Summary from '../stores/summary'
import Widget from '../stores/widget'

const bg = [
	'p4640',
	'p4642',
	'p4644',
	'p4646',
	'p4648',
	'p4650',
	'p4653',
	'p4655',
	'p4661',
	'p4669',
	'p4674',
]

const getArrayData = [hotRank, hotBoardBook, hotChineseBook]

const colors = ["723f32", "4c2a22", "948aa5", "8d99a5", "a5695f", "a5852d", "7ea59a", "a5a19e", "a59b8a", "a54522"]


const generateRandomRate = () => {
    let sum
    let array = new Array(5).fill(0).map((ele, index) => {
        let tmp = Math.random()
        sum += tmp
        return tmp
    }).map(ele => ele / sum)
    return array
}

export default async (index) => {
	if (index == 0) {
		return {
			TYPE: 'ActivityPageWidget',
			comment_count: 0,
			id: 776,
			kind: 0,
			kind_cn: '\u5f00\u7bc7',
			kind_str: 'start_page',
			page_id: 15,
			payload: {
				description: '',
				mask_img: '/fakeApi/assets/images/logo.png',
				mobile_background_img: '/fakeApi/assets/images/p3534.jpg',
				mobile_mask_img: '/fakeApi/assets/images/p3473.jpg',
				mobile_title_img: '/fakeApi/assets/2333/logo.png',
				title_img: '/fakeApi/assets/images/logo.png',
				video: '/fakeApi/assets/video/book_annual_2017op.mp4',
			},
			status: 0,
			subjects: [],
		}
    }
	if (Widget.data[index]) return Widget.data[index]
	let item = {
		color_scheme: {
			is_dark: true,
			primary_color_dark: '4c2a22',
			primary_color_light: colors[(index - 1) % colors.length],
			secondary_color: 'f9f5f4',
		},
		cover: '',
		id: '',
		is_released: true,
		orig_title: '',
		playable: false,
		rating: 9,
		rating_count: 1048281 + ((Math.random() * 500000) >> 0),
		rating_stats: [
            0.0034981078546687384,
            0.0035066933389043585,
            0.04209462920724501,
            0.25801192619154595,
            0.6928886434076359
        ],
		title: '',
		type: 'book',
		url: '',
	}
	let tmp = {
		TYPE: 'ActivityPageWidget',
		comment_count: 335,
		id: Summary.widgetInfos[index].id,
		kind: 1,
		kind_cn: 'Top 10',
		kind_str: 'top10',
		payload: {
			background_img: `/fakeApi/assets/2333/${bg[(index - 1) % bg.length]}.jpg`,
			description: '',
			has_barrage: 'on',
			left: Math.random() > 0.5 ? 'on' : 'off',
			mobile_background_img: '/fakeApi/assets/2333/p3680.jpg',
			title: Summary.widgetInfos[index].title,
		},
		status: 0,
		subject: {},
		subject: [],
	}

	let hotRankData
	if (index > 0 && index <= 3) {
		let foo = getArrayData[index - 1]
		hotRankData = await foo()
	} else if (index >= 5 && index <= 10) {
		const hotAuthorAndBookData = await hotAuthorAndBook()
		let num = index
		if (index - 5 > 2) {
			num = index - 1
		}
		hotRankData = hotAuthorAndBookData[num - 5].hotBooks
	} else if (index >= 12 && index <= 17) {
		const hotTagRankData = await hotTagAndBook()
		let num = index
		if (index - 12 > 2) {
			num = index - 1
		}
		hotRankData = hotTagRankData[num - 12].hotBooks
    }
    
    if (!hotRankData) {
        console.log(index)
    }

	let res = hotRankData.map((top) => ({
		...item,
		id: top.bookId,
		cover: top.coverUrl,
		title: top.bookName,
		rating: top.rating,
		url: `/book/${top.bookId}`,
	}))

	const [subject, ...subjects] = res
	tmp.subject = subject
	tmp.subjects = subjects
	Widget.data[index] = tmp
	return Widget.data[index]
}
