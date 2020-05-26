import React, { useEffect, useState, useCallback, useMemo, memo } from 'react'
import { observer } from 'mobx-react'
import './index.styl'
import { Typography, Divider, List } from 'antd'
import { EditOutlined } from '@ant-design/icons'
import BookInfo from '../../components/bookInfo'
import Book from '../../stores/book'
import appState from '../../stores/appState.js'
import ReviewStore from '../../stores/reviewStore'
import BookSimple from '../../components/bookSimple'
import Rater from '../../components/rater'
import Review from '../../components/review'
import IconText from '../../utils/IconText'
import Container from '../../utils/Container'
import { getBookById } from '../../apis/book/book.js'

const { Title, Paragraph, Text } = Typography


const BookDetail = observer((props) => {
  const { isLoading } = appState

	const {
		match: {
			params: { id },
		},
	} = props

	useEffect(() => {
    appState.setLoading(true)
    const fetchData = async () => {
      await getBookById(id, Book.setBookById)
      appState.setLoading(false)
    }
    fetchData();
	}, [id])


	const RenderElement = memo(({ bookInfo = {} }) => {
		const {
			bookId = '',
			isbn = '',
			bookName = '加载中...',
			bookSubname,
			author = '',
			publisher = '',
			publishedPlace = '',
			publishedTime = '',
			tags = [],
			page = '',
			sellerlist = [],
			coverUrl = '',
			rating = 0,
			description = '',
		} = bookInfo

		return (
			<>
				<div className="book-detail-title">
					<Title level={3}>{bookName}</Title>
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
						<BookInfo {...bookInfo} />
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
							<List.Item key={item.rid}>
								<Review {...item} />
							</List.Item>
						)}
					/>
				</div>
				<IconText icon={EditOutlined} text={'写书评'} />
				<Divider className="divider-style" />
			</>
		)
	})

	const likeSame = Book.list

	return (
    <Container className="container" isLoading={isLoading}>
      <RenderElement bookInfo={Book.infoList[id] ? Book.infoList[id] : {}} />
  </Container>
  )
})

export default BookDetail
