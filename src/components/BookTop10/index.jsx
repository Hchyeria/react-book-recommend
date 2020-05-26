import React, { memo } from 'react'
import { List, Typography, Rate, Popover, Tooltip } from 'antd'

import { Link } from 'react-router-dom'
import './index.styl'
import BookInfo from '../bookInfo'
import BookTop from '../BookTop'
const { Paragraph, Text } = Typography

const BookTop10 = memo(({ pageSize = 10, closePagination, data, props }) => {
	return (
		<List
			grid={{ gutter: 8, column: 9}}
			dataSource={data}
			renderItem={(item) => (
				<List.Item
					className="top-book-simple"
					key={item.bookId}
					extra={
						<div className="book-cover">
							<Popover
								content={
									<BookInfo
										rating={item.rating}
										author={item.author}
										tags={item.tags}
										publisher={item.publisher}
										description={item.description}
									/>
								}
								title={item.bookName}
								overlayStyle={{ width: '20vw' }}
								placement="right"
							>
								<Link to={`/book/${item.bookId}`}>
									<img
										style={{
											width: '6vw',
											height: '8.667vw',
											objectFit: 'cover',
										}}
										alt="cover"
										src={item.coverUrl}
									/>
								</Link>
							</Popover>
						</div>
					}
				>
					<List.Item.Meta
						className="book-meta"
						title={
							<Link to={`/book/${item.bookId}`}>
								<Tooltip title={item.bookName}>
									<Text strong ellipsis style={{ width: '6.4vw' }}>
										{item.bookName}
									</Text>
								</Tooltip>
								
								
							</Link>
						}
					/>
				</List.Item>
			)}
		/>
	)
})

export default BookTop10
