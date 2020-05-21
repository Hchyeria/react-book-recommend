import React, { memo } from 'react'
import { List, Typography, Rate } from 'antd'

import { Link } from 'react-router-dom'
import './index.styl'
import BookInfo from '../bookInfo'
const { Paragraph, Text } = Typography


const BookDetail = memo((props) => {
	return (
		<List
			grid={{ gutter: 16, column: 2 }}
			size="large"
			pagination={{
				pageSize: 10,
			}}
			dataSource={props.data}
			renderItem={(item) => (
				<div style={{ width: '46%', marginBottom: '20px' }}>
					<List.Item
						className="book-card"
						style={{ marginBottom: '10px', height: '130px' }}
						key={item.bookId}
						extra={
							<div className="book-cover">
								<Link to={`/book/${item.bookId}`}>
									<img
										style={{
											width: '6vw',
											height: '8vw',
											objectFit: 'cover',
										}}
										alt="cover"
										src={item.coverUrl}
									/>
								</Link>
							</div>
						}
					>
						<List.Item.Meta
							className="book-meta"
							title={
								<Link to={`/book/${item.bookId}`}>
									<Text strong>{item.bookName}</Text>
								</Link>
							}
							description={
								<BookInfo
									author={item.author}
									tags={item.tags}
									rating={item.rating}
									publisher={item.publisher}
								/>
							}
						/>
					</List.Item>

					<List.Item style={{ marginTop: 0, paddingLeft: 0 }}>
						<Paragraph
							ellipsis={{ rows: 2, expandable: true }}
							type="secondary"
						>
							{item.description}
						</Paragraph>
					</List.Item>
				</div>
			)}
		/>
	)
})

export default BookDetail
