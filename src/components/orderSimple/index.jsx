import React, { memo } from 'react'
import { List, Typography, Rate, Tooltip } from 'antd'

import { Link } from 'react-router-dom'
import './index.styl'
import GoodInfo from '../goodInfo'
import defaultUrl from '../../asserts/default.jpg'

const { Paragraph, Text } = Typography

const OrderSimple = memo(({ pageSize = 5, data, ...props }) => {
	return (
		<List
			grid={{ gutter: 16, column: 2 }}
			size="large"
			dataSource={data}
			renderItem={(item) => (
				<div style={{ width: '80%', marginBottom: '20px' }}>
					<List.Item
						className="book-card"
						style={{
							marginBottom: '10px',
							height: '180px',
							width: '74%',
							margin: '0 auto',
						}}
						key={item.goodsId}
						extra={
							<div className="book-cover">
								<Link to={`/book/${item.goodsId}`}>
									<img
										style={{
											width: '9vw',
											height: '12vw',
											objectFit: 'cover',
										}}
										alt="cover"
										src={item.coverUrl ? item.coverUrl : defaultUrl}
									/>
								</Link>
							</div>
						}
					>
						<List.Item.Meta
							className="book-meta"
							title={
								<Link to={`/book/${item.goodsId}`}>
									<Tooltip title={item.goodsName}>
										<Text strong ellipsis className="book-title">
											{item.goodsName}
										</Text>
									</Tooltip>
								</Link>
							}
							description={
								<GoodInfo
									goodsId={item.goodsId}
									goodsCount={item.goodsCount}
									goodsName={item.goodsName}
									sellingPrice={item.sellingPrice}
									author={item.author}
								/>
							}
						/>
					</List.Item>
				</div>
			)}
		/>
	)
})

export default OrderSimple
