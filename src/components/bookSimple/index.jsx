import React, { memo } from 'react'
import { List, Typography, Rate, Popover, Tooltip } from 'antd'

import { Link } from 'react-router-dom'
import './index.styl'
import BookInfo from '../bookInfo'
const { Paragraph, Text } = Typography

const BookSimple = memo(({ pageSize = 10, closePagination, data, props }) => {
	return (
		<List
			grid={{ gutter: 16, column: 5 }}
			pagination={closePagination ? false : {
				pageSize: pageSize,
			}}
			dataSource={data}
			renderItem={(item) => (
				<List.Item
					className="book-simple"
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
											width: '8vw',
											height: '10.667vw',
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
									<Text strong ellipsis style={{ width: '8.4vw' }}>
										{item.bookName}
									</Text>
								</Tooltip>
								
								<br />
								<Text>{item.author}</Text>
							</Link>
						}
					/>
				</List.Item>
			)}
		/>
	)
})

export default BookSimple
