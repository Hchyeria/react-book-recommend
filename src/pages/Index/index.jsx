import React from 'react'
import { useEffect, useState } from 'react'
import { observer } from 'mobx-react'
import './index.styl'

import BookTitleBox from '../../components/bookTitleBox'
import BookDetail from '../../components/bookDetail'
import BookSimple from '../../components/bookSimple'
import TagList from '../../components/tagList'
import BookSmall from '../../components/bookSmall'
import Carousel from '../../components/Carousel'

import Container from '../../utils/Container'
import appState from '../../stores/appState.js'
import Book from '../../stores/book'
import getUserRecommend from '../../apis/recommend/user.js'
import getHotRank from '../../apis/recommend/hotRank.js'
import getHotTag from '../../apis/recommend/hotTag.js'

const banners = ['/fakeApi/assets/2333/145039.jpg', '/fakeApi/assets/2333/00611145049.jpg', '/fakeApi/assets/2333/11145054.jpg']

const App = observer((props) => {
	const { isLoading } = appState

	const params = {
		page: 1,
		size: 10,
		userID: appState.user['userId'],
	}

	const params1 = {
		page: 1,
		size: 11,
	}

	useEffect(() => {
		appState.setLoading(true)
		const fetchData = async () => {
			Promise.all([
				getUserRecommend(params, Book.setLike),
				getHotRank(params1, Book.setTop),
				getHotTag(params1, Book.setTag)
			]).then(() => {
                appState.setLoading(false)
            })
			
		}
		fetchData()
	}, [])

	return (
		<>
		<Carousel 
			urls={banners} 
			style={{
				width: '100%'
			}} 
		/>
		<Container className="App" isLoading={isLoading}>
			<div className="container-left">
				<BookTitleBox title={'猜你可能感兴趣的图书'}>
					<BookDetail data={Book.like} />
				</BookTitleBox>
				<BookTitleBox title={'最受关注的图书'}>
					<BookSimple data={Book.top10} />
				</BookTitleBox>
			</div>
			<div className="container-right">
				<BookTitleBox title={'热门标签'}>
					<TagList data={Book.tags} />
				</BookTitleBox>
				<BookTitleBox title={'畅销图书榜'}>
					<BookSmall data={Book.top10} />
				</BookTitleBox>
			</div>
		</Container>
		</>
	)
})

export default App
