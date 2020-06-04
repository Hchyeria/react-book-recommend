import React, { memo } from 'react'
import { List, Typography, Rate, Tooltip } from 'antd'

import { Link } from 'react-router-dom'
import './index.styl'
import BookInfo from '../bookInfo'
import defaultUrl from '../../asserts/default.jpg'
import { actionUpload } from '../../utils/utils'
const { Paragraph, Text } = Typography


const BookDetail = memo(({ pageSize = 5, data, ...props }) => {

	const pathName = window.location.pathname.slice(1) || 'home'

	return (
		<List
			grid={{ gutter: 16, column: 2 }}
			size="large"
			pagination={{
				pageSize: pageSize,
			}}
			dataSource={data}
			renderItem={(item) => (
				<div 
					style={{ width: '46%', marginBottom: '20px' }}
					onClick={actionUpload(item)}
				>
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
									author={item.authorName}
									country={item.countryName}
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
