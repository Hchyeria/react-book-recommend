import { observable, action } from 'mobx'

export class Widget {
	@observable
	data = {
		4: {
			TYPE: 'ActivityPageWidget',
			comment_count: 1,
			id: 902,
			kind: 2,
			kind_cn: '台词',
			kind_str: 'dialogue',
			page_id: 15,
			payload: {
				background_img: '/fakeApi/assets/2333/1983620.jpg',
				has_barrage: 'off',
				mobile_background_img: '/fakeApi/assets/2333/1983620.jpg',
				subject_id: '4920389',
				text: '生命中所有的灿烂，原来终究，都需要寂寞来偿还。',
			},
			subject: {
				title: '百年孤独',
            },
        },
        8: {
            TYPE: 'ActivityPageWidget',
            comment_count: 1,
            id: 902,
            kind: 2,
            kind_cn: '台词',
            kind_str: 'dialogue',
            page_id: 15,
            payload: {
                background_img: '/fakeApi/assets/2333/p3634.jpg',
                has_barrage: 'off',
                mobile_background_img: '/fakeApi/assets/2333/p3634.jpg',
                subject_id: '4920389',
                text: '但你不一样，你是我的天才朋友，你应该比任何人都要厉害，无论是男生还是女生。',
            },
            subject: {
                title: '那不勒斯四部曲',
            },
        },
        11: {
            TYPE: 'ActivityPageWidget',
            comment_count: 1,
            id: 902,
            kind: 2,
            kind_cn: '台词',
            kind_str: 'dialogue',
            page_id: 15,
            payload: {
                background_img: '/fakeApi/assets/2333/ce70f6d.jpg',
                has_barrage: 'off',
                mobile_background_img: '/fakeApi/assets/2333/ce70f6d.jpg',
                subject_id: '4920389',
                text: '生而为人，我很抱歉。',
            },
            subject: {
                title: '人间失格',
            },
        },
        15: {
            TYPE: 'ActivityPageWidget',
            comment_count: 1,
            id: 902,
            kind: 2,
            kind_cn: '台词',
            kind_str: 'dialogue',
            page_id: 15,
            payload: {
                background_img: '/fakeApi/assets/2333/001619.jpg',
                has_barrage: 'off',
                mobile_background_img: '/fakeApi/assets/2333/001619.jpg',
                subject_id: '4920389',
                text: '我只想当个麦田里的守望者。',
            },
            subject: {
                title: '麦田里的守望者',
            },
        },
        18: {
            TYPE: 'ActivityPageWidget',
            comment_count: 1,
            id: 902,
            kind: 2,
            kind_cn: '台词',
            kind_str: 'dialogue',
            page_id: 15,
            payload: {
                background_img: '/fakeApi/assets/2333/5748.jpg',
                has_barrage: 'off',
                mobile_background_img: '/fakeApi/assets/2333/5748.jpg',
                subject_id: '4920389',
                text: '不存在十全十美的文章，如同不存在彻头彻尾的绝望。',
            },
            subject: {
                title: '且听风吟',
            },
        },
	}
}

export default new Widget()
