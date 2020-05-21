import React, { useEffect, useState } from 'react'
import { observer } from 'mobx-react'
import './index.styl'
import { Typography, Divider, List } from 'antd'
import { EditOutlined } from '@ant-design/icons'
import BookInfo from '../../components/bookInfo'
import Book from '../../stores/book'
import ReviewStore from '../../stores/reviewStore'
import BookSimple from '../../components/bookSimple'
import Rater from '../../components/rater'
import Review from '../../components/review'
import IconText from '../../utils/IconText'

const { Title, Paragraph, Text } = Typography

const BookDetail = (props) => {
	const {
		match: {
			params: { id },
		},
	} = props

	const data = {
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
		description:
			'这是一部非常具有电影感的小说集，其电影感体现在两个方面，一是沉浸式的叙事，一是蒙太奇式的转场。',
	}
	const {
		bookId,
		isbn,
		bookName,
		bookSubname,
		author,
		publisher,
		publishedPlace,
		publishedTime,
		tags,
		page,
		sellerlist,
		coverUrl,
		rating,
		description,
	} = data

	const likeSame = Book.list

	return (
		<div className="container">
			<div className="book-detail-title">
				<Title level={3}>{bookName}</Title>
				<Title level={4}>{bookSubname}</Title>
			</div>
			<div className="book-detail-header">
				<div className="left-align">
					<img
						style={{
							width: '9vw',
							height: '12vw',
							objectFit: 'cover',
						}}
						alt="cover"
						src={coverUrl}
					/>
				</div>
				<div className="right-align">
					<BookInfo {...data} />
				</div>
			</div>
			<div className="rater">
				<Text>我的评分：</Text>
				<Rater />
			</div>

			<Divider className="divider-style" />
			<div className="book-detail-title">
				<Title level={4}>内容简介</Title>
				<Paragraph ellipsis={{ rows: 2, expandable: true }}>
					收录《人间失格》《维庸之妻》《Good-bye》《灯笼》《满愿》《美男子与香烟》《皮肤与心》《蟋蟀》《樱桃》
				</Paragraph>
			</div>
			<Divider className="divider-style" />
			<div className="book-detail-title">
				<Title level={4}>作者简介</Title>
				<Paragraph ellipsis={{ rows: 2, expandable: true }}>
					太宰治，“私小说”领域的天才。宇川端康成、三岛由纪夫齐名，被视为日本战后文学的巅峰人物，后人称其为“无赖派大师”。
				</Paragraph>
			</div>
			<Divider className="divider-style" />
			<div className="book-detail-title">
				<Title level={4}>目录</Title>
				<Paragraph
					ellipsis={{ rows: 2, expandable: true }}
					style={{ whiteSpace: 'pre-line' }}
				>
					{`人间失格/001
          维庸之妻/101
          Good-bye/128
          灯笼/167
          满愿/174
          美男子与香烟/177
          皮肤与心/184
          蟋蟀/201
          樱桃/213`}
				</Paragraph>
			</div>
			<Divider className="divider-style" />
			<div className="book-detail-title">
				<Title level={4}>{`喜欢读"${bookName}"的人也喜欢`}</Title>
				<BookSimple closePagination={true} data={likeSame} />
			</div>
			<Divider className="divider-style" />
			<div className="book-detail-title">
				<Title level={4}>热评</Title>
				<List
					pagination={{
						pageSize: 10,
					}}
					dataSource={ReviewStore.list}
					renderItem={(item) => (
						<List.Item
							key={item.rid}
						>
							<Review {...item} />
						</List.Item>
					)}
				/>
			</div>
      <IconText icon={EditOutlined} text={'写书评'} />
			<Divider className="divider-style" />
		</div>
	)
}

export default BookDetail
