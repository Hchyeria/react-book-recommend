import React, { memo } from 'react'
import { Typography, Divider, Pagination } from 'antd'
import { Link } from 'react-router-dom'
import './index.styl'

const { Title, Text } = Typography

export default memo(({
	children,
	title,
	isMore = true
}) => {
	return (
		<div className="book-title-box">
			<div className="upper-box">
				<Title level={4} style={{ marginBottom: 0 }}>
					{title}
				</Title>
				{isMore ? (
					<Link to="/more">
						<Text className="blue-text">更多 >></Text>
					</Link>
				) : null}
			</div>
			<Divider className='divider-style' />
			{children}
		</div>
	)
})
