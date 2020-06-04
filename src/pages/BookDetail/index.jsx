import React, { useEffect, useState, useCallback, useMemo, memo, lazy, Suspense } from 'react'
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
import getBookRecommend from '../../apis/recommend/book.js'

import WantRead from '../../components/wantRead'
import HasRead from '../../components/hasRead'
import defaultUrl from '../../asserts/default.jpg'

import getReviewByHot from '../../apis/reviews/agreeNum.js'
import getReviewByTime from '../../apis/reviews/reviewTime.js'

import { actionUpload } from '../../utils/utils'

const { Title, Paragraph, Text } = Typography

const AddReview = lazy(() => import('../../components/addReview'))


const BookDetail = observer((props) => {
	const { isLoading } = appState

	const {
		match: {
			params: { id },
		},
	} = props

	const params1 = {
		bookID: id,
		page: 1,
		size: 10,
	}

	const params2 = {
		bookId: id,
		page: 1,
		size: 10,
	}

	useEffect(() => {
		appState.setLoading(true)
		const fetchData = async () => {
			Promise.all([
				getBookById(id, Book.setBookById),
				getBookRecommend(params1, Book.setList),
				getReviewByTime(params2, ReviewStore.setTime),
				getReviewByHot(params2, ReviewStore.setHot)
			]).then(() => {
				appState.setLoading(false)
			})
		}
		fetchData()
	}, [id])

	

	const upLoadRate = useCallback((rating) => {
		const rateFoo = async () => {
			const rateBookById = (await import('../../apis/book/rate.js')).default
			const data = {
				bookID: id,
				rating
			}
			await rateBookById(data)
		}
		rateFoo()
	}, [id])

	const upLoadWant = useCallback((_, cb) => {
		const wantFoo = async () => {
			const wantBookById = (await import('../../apis/user/want.js')).default
			const data = {
				bookID: id
			}
			await wantBookById(data, cb)
		}
		wantFoo()
	}, [id])

	const upLoadRead = useCallback((_, cb) => {
		const readFoo = async () => {
			const readBookById = (await import('../../apis/user/read.js')).default
			const data = {
				bookID: id
			}
			await readBookById(data, cb)
		}
		readFoo()
	}, [id])

	
	const [isShowReviewFrom, setIsShowReviewFrom] = useState(false)

	const handleClickWriteIcon = () => {
		// console.log(isShowReviewFrom)
		setIsShowReviewFrom(!isShowReviewFrom)
	}


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
			hasRead,
			wantRead
		} = bookInfo

		useEffect(() => {
			let bar = actionUpload(bookInfo, 'pv')
			typeof bar === 'function' && bar()
			let out = setTimeout(() => {
				let foo = actionUpload(bookInfo, 'pv-5')
				typeof foo === 'function' && foo()
			}, 1000 * 60 * 5)
			return () => clearTimeout(out)
		}, [id])

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
							src={coverUrl ? coverUrl : defaultUrl}
						/>
					</div>
					<div className="right-align">
						<BookInfo {...bookInfo} />
					</div>
				</div>
				<div className="rater">
					<Text>我的评分：</Text>
					<Rater upLoadRate={upLoadRate} defaultValue={4} />
				</div>

				<div className="want-read">
					<div className="want">
						<WantRead upLoadWant={upLoadWant} defaultValue={wantRead} book={bookInfo} />
					</div>

					<div className="read">
						<HasRead upLoadRead={upLoadRead} defaultValue={hasRead} />
					</div>
				</div>


				<Divider className="divider-style" />
				<div className="book-detail-title">
					<Title level={4}>内容简介</Title>
					<Paragraph ellipsis={{ rows: 2, expandable: true }}>
						{/* 收录《人间失格》《维庸之妻》《Good-bye》《灯笼》《满愿》《美男子与香烟》《皮肤与心》《蟋蟀》《樱桃》 */}
						{description}
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
						dataSource={ReviewStore.hot}
						renderItem={(item) => (
							<List.Item key={item.rid}>
								<Review {...item} />
							</List.Item>
						)}
					/>
				</div>
				<div className="book-detail-title">
					<Title level={4}>最新评论</Title>
					<List
						pagination={{
							pageSize: 10,
						}}
						dataSource={ReviewStore.time}
						renderItem={(item) => (
							<List.Item key={item.rid}>
								<Review {...item} />
							</List.Item>
						)}
					/>
				</div>
				<IconText icon={EditOutlined} text={'写书评'} onClick={handleClickWriteIcon} />
				<Divider className="divider-style" />
				{
					isShowReviewFrom
						? (
							<Suspense fallback={<div />}>
								<AddReview bookId={id} />
							</Suspense>
						)
						: null
				}
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
