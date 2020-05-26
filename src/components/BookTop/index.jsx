import React, { memo } from 'react'
import { List, Typography, Rate, Tooltip } from 'antd'

import { Link } from 'react-router-dom'
import './index.styl'
import BookInfo from '../bookInfo'
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
						style={{ marginBottom: '10px', height: '180px' }}
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
									<Tooltip title={item.bookName}>
										<Text strong ellipsis className='book-title'>
											{item.bookName}
										</Text>
									</Tooltip>
									
								</Link>
								
								
							}
							description={
								<BookInfo
									author={item.author}
									tags={item.tags}
									rating={item.rating}
									description={item.description}
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
