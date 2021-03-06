import React, { memo } from 'react'
import { List, Typography, Rate, Tooltip } from 'antd'

import { Link } from 'react-router-dom'
import './index.styl'
import BookInfo from '../bookInfo'
import defaultUrl from '../../asserts/default.jpg'

const { Paragraph, Text } = Typography

const BookTop = memo(({ pageSize = 5, data, ...props }) => {
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
						key={item.bookId}
						extra={
							<div className="book-cover">
								<Link to={`/book/${item.bookId}`}>
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
								<Link to={`/book/${item.bookId}`}>
									<Tooltip title={item.bookName}>
										<Text strong ellipsis className="book-title">
											{item.bookName}
										</Text>
									</Tooltip>
								</Link>
							}
							description={
								<BookInfo
									author={item.author ? item.author : '未知'}
									country={item.countryName}
									tags={item.tags}
									rating={item.rating}
									description={item.description}
									//price={item.price}
								/>
							}
						/>
					</List.Item>
				</div>
			)}
		/>
	)
})

export default BookTop
