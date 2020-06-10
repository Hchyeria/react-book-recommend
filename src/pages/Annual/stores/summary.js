import { observable, action } from 'mobx'

export class Summary {
	@observable
	widgetInfos = [
		{
			id: 776,
			show_divider: false,
			show_divider_txt: '',
			title: '开篇',
		},
		{
			id: 835,
			show_divider: true,
			show_divider_txt: '图书',
			title: '2019年最热门图书榜',
		},
		{
			id: 834,
			show_divider: false,
			show_divider_txt: '',
			title: '2019年最热门国外图书榜',
		},
		{
			id: 878,
			show_divider: false,
			show_divider_txt: '',
			title: '2019年最热门国内图书榜',
		},
		{
			id: 902,
			show_divider: false,
			show_divider_txt: '',
			title: '摘录 —— 百年孤独',
		},
		{
			id: 836,
			show_divider: true,
			show_divider_txt: '作者',
			title: '曹文轩',
		},
		{
			id: 777,
			show_divider: false,
			show_divider_txt: '',
			title: '曹文轩',
		},
		{
			id: 924,
			show_divider: false,
			show_divider_txt: '',
			title: '曹文轩',
		},
		{
			id: 906,
			show_divider: false,
			show_divider_txt: '',
			title: '摘录 —— 那不勒斯四部曲',
		},
		{
			id: 879,
			show_divider: false,
			show_divider_txt: '',
			title: '曹文轩',
		},
		{
			id: 837,
			show_divider: false,
			show_divider_txt: '',
			title: '曹文轩',
		},
		{
			id: 904,
			show_divider: false,
			show_divider_txt: '',
			title: '摘录 —— 人间失格',
		},
		{
			id: 838,
			show_divider: true,
			show_divider_txt: '标签',
			title: '注释',
		},
		{
			id: 912,
			show_divider: false,
			show_divider_txt: '',
			title: '注释',
		},
		{
			id: 839,
			show_divider: false,
			show_divider_txt: '',
			title: '注释',
		},
		{
			id: 910,
			show_divider: false,
			show_divider_txt: '',
			title: '摘录 —— 麦田里的守望者',
		},
		{
			id: 840,
			show_divider: false,
			show_divider_txt: '',
			title: '注释',
		},
		{
			id: 907,
			show_divider: false,
			show_divider_txt: '',
			title: '注释',
		},
		{
			id: 917,
			show_divider: false,
			show_divider_txt: '',
			title: '摘录 —— 且听风吟',
		},
	]
}

export default new Summary()
