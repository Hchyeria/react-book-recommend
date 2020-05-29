import React, { memo } from 'react'
import { List, Typography, Rate } from 'antd'
import { Link } from 'react-router-dom'
import './index.styl'
import TagList from '../tagList'

const { Paragraph, Text } = Typography

const Description = memo(({
	goodsId,
    goodsCount,
    goodsName,
	sellingPrice,
	author
}) => {
	return (
		<>
			{goodsName ? (
				<>
					<Text type="secondary">{'书名：'}</Text>
					<Text>{goodsName}</Text>
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
			{goodsCount ? (
				<>
					<Text type="secondary">{'数量：'}</Text>
					<Text>{goodsCount}</Text>
					<br />
				</>
			) : null}
			{sellingPrice ? (
				<>
					<Text type="secondary">{'单价：'}</Text>
					<Text>{sellingPrice}</Text>
					<br />
				</>
			) : null}
		</>
	)
})

export default Description
