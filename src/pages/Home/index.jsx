import React from 'react'
import { useEffect, useState } from 'react'
import { observer } from 'mobx-react'
import './index.styl'

import BookRead from '../../components/bookRead'
import BookTitleBox from '../../components/bookTitleBox'
import BookDetail from '../../components/bookDetail'
import BookSimple from '../../components/bookSimple'
import TagList from '../../components/tagList'
import BookSmall from '../../components/bookSmall'
import Container from '../../utils/Container'
import appState from '../../stores/appState.js'
import Book from '../../stores/book'
import HomeHead from '../../components/homeHead'
import BookComment from '../../components/bookComment'
import getUserById from '../../apis/user/center.js'
import User from '../../stores/user'
import Order from '../../stores/order'
import OrderSmall from '../../components/orderSmall'
import getOrder from '../../apis/order/history.js'
import orderSmallTitleBox from '../../components/orderSmallTitleBox'

const Home = observer((props) => {
	const { isLoading } = appState

	const userId = appState.user['userId']
	// const params = {}
	// const {
	// 	match: {
	// 		params: { id },
	// 	},
	// } = props

	useEffect(() => {
		appState.setLoading(true)
		const fetchData = async () => {
			Promise.all([
				getUserById(userId, User.setInfo),
				getOrder(Order.setInfo)
			]).then(() => {
				appState.setLoading(false)
			})
		}
		fetchData()
	}, [userId])

	return (
		<Container className="Home" isLoading={isLoading}>
			<div className="home-container">
				<HomeHead username="test">
					<BookTitleBox title={'读过'}>
						<BookRead data={User.hasRead} />
					</BookTitleBox>
					<BookTitleBox title={'想读'}>
						<BookRead data={User.wantRead} />
					</BookTitleBox>
					<BookTitleBox title={'我的评论'}>
						{User.reviews.length &&
							User.reviews.map((ele, index) => (
								<BookComment
									key={ele.bookId}
									{...ele}
								/>
							))}
					</BookTitleBox>
					{/* <BookTitleBox title={'我的订单'}>
						<OrderSmall data={Order.list} />
					</BookTitleBox> */}
				</HomeHead>
			</div>
		</Container>
	)
})

export default Home
