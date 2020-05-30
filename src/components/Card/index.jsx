import React, { memo, useState, useEffect } from 'react'
import './index.styl'
import { Link } from 'react-router-dom'
import { EllipsisOutlined, ShoppingCartOutlined } from '@ant-design/icons'
import { Card } from 'antd'
import defaultUrl from '../../asserts/default.jpg'
import IconText from '../../utils/IconText'
import addGood from '../../apis/shopping/add.js'

const { Meta } = Card

const descriptionNode = (description, promoStatus) => {
	return (
		<>
			<div className="description">{description}</div>
			<div>
				{promoStatus === 1 ? (
					'the item will in buying activity'
				) : (
					<div className="buying-activity">in buying activity now</div>
				)}
			</div>
		</>
	)
}

const CardBox = memo((props) => {
	const [loading, setLoading] = useState(true)
	const {
		authorId,
		authorName,
		bookId,
		bookName,
		bookSubname,
		countryId,
		countryName,
		coverUrl,
		isbn,
		page,
		price,
		publishedPlace,
		publishedTime,
		publisher,
		rating,
	} = props

	const handleAddGood = () => {
		// setValue(value)
		const addFoo = async () => {
			const data = {
				bookId,
				count: 1
			}
			await addGood(data)
		}
		addFoo()
	}

	useEffect(() => {
		if (loading) {
			setTimeout(() => setLoading(false), 500)
		}
	}, [])

	return (
		<div className="card-box">
			<Link to={`/book/${bookId}`}>
				<Card
					loading={loading}
					hoverable
					cover={<img alt="cover" src={coverUrl ? coverUrl : defaultUrl} />}
				>
				<Meta title={bookName}/>	
				</Card>
			</Link>

			<Card
				actions={[
					<IconText
					icon={ShoppingCartOutlined}
					onClick={handleAddGood}
					/>
				]}
			>
				<Meta description={'￥' + price} />	
			</Card>

		</div>
	)
})

export default CardBox
