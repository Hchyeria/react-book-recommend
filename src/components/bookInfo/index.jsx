import React, { memo } from 'react'
import { List, Typography, Rate } from 'antd'
import { Link } from 'react-router-dom'
import './index.styl'
import TagList from '../tagList'

const { Paragraph, Text } = Typography

const Description = memo(({
	bookId,
	isbn,
	bookName,
	bookSubname,
	author,
	country,
	publisher,
	publishedPlace,
	publishedTime,
	tags,
	page,
	sellerlist,
	coverUrl,
	rating,
	description,
	price
}) => {
	return (
		<>
			{bookName ? (
				<>
					<Text type="secondary">{'书名：'}</Text>
					<Text>{bookName}</Text>
					<br />
				</>
			) : null}
			{bookSubname ? (
				<>
					<Text type="secondary">{'副标题：'}</Text>
					<Text>{bookSubname}</Text>
					<br />
				</>
			) : null}
			{rating ? (
				<>
					<Rate
						style={{ fontSize: '1.2em' }}
						disabled
						allowHalf
						defaultValue={rating / 2}
					/>
					<Text className="rate-text">{rating}</Text>
					<br />
				</>
			) : null}
			{author ? (
				<>
					<Text type="secondary">{'作者：'}</Text>
					<Text>{author}</Text>
					<br />
				</>
			) : null}
			{country ? (
				<>
					<Text type="secondary">{'国家：'}</Text>
					<Text>{country}</Text>
					<br />
				</>
			) : null}
			{tags ? (
				<>
					<Text type="secondary">{'分类：'}</Text>
					<Text> {tags.join('/')} </Text>
					<br />
				</>
			) : null}
			{publisher ? (
				<>
					<Text type="secondary">{'出版社：'}</Text>
					<Text>{publisher}</Text>
					<br />
				</>
			) : null}
			{publishedTime ? (
				<>
					<Text type="secondary">{'出版时间：'}</Text>
					<Text>{publishedTime}</Text>
					<br />
				</>
			) : null}
			{isbn ? (
				<>
					<Text type="secondary">{'ISBN：'}</Text>
					<Text>{isbn}</Text>
					<br />
				</>
			) : null}
			{page ? (
				<>
					<Text type="secondary">{'页数：'}</Text>
					<Text>{page}</Text>
					<br />
				</>
			) : null}
			{description ? (
				<>
					<Text type="secondary">{'简介：'}</Text>
					<Text>{description}</Text>
					<br />
				</>
			) : null}
			{price ? (
				<>
					<Text type="secondary">{'价格：'}</Text>
					<Text>{price}</Text>
					<br />
				</>
			) : null}
		</>
	)
})

export default Description
