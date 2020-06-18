import React from 'react'
import { useEffect, useState } from 'react'
import { observer } from 'mobx-react'
import './index.styl'
import Card from '../../components/Card/index'
import Item from '../../stores/item'
import Container from '../../utils/Container'
import { get } from '../../utils/request'
import PageLoading from '../../components/loading/index'
import appState from '../../stores/appState.js'
import { getBook } from '../../apis/book/list'
import { Button } from 'antd'
import { Link } from 'react-router-dom'
import Carousel from '../../components/Carousel'
import { ShoppingCartOutlined } from '@ant-design/icons'

const banners = ['/fakeApi/assets/2333/145039.jpg', '/fakeApi/assets/2333/00611145049.jpg', '/fakeApi/assets/2333/11145054.jpg']

const mapArray = Array.apply(null, Array(5))

const Shop = observer((props) => {
	const { isLoading } = appState

	const params = {
		page: 1,
		size: 10,
	}

	useEffect(() => {
		appState.setLoading(true)
		const fetchData = async () => {
			await getBook(params, Item.setList)
			appState.setLoading(false)
		}
		fetchData()
	}, [])

	return (
		<>
			<Carousel
				urls={banners}
				style={{
					width: '100%',
				}}
			/>

			<Link to={`/cart`} className="shop-cart">
				<ShoppingCartOutlined />
		
			</Link>
			<Container className="Shop" isLoading={isLoading}>
				

				{mapArray.map((ele, index) => (
					<div className="card-one">
						{Item.list[index].length &&
							Item.list[index].map(({ id, ...rest }) => (
								<Card key={id} id={id} {...rest} />
							))}
					</div>
				))}
			</Container>
		</>
	)
})

export default Shop
