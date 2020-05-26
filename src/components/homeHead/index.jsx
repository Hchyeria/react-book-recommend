import React, { memo } from 'react'
import { Typography, Divider, Pagination } from 'antd'
import { Link } from 'react-router-dom'
import './index.styl'
import { Avatar } from 'antd'
import { UserOutlined } from '@ant-design/icons'

const { Title, Text } = Typography

export default memo(({ children, username }) => {
	return (
		<div className="home-title-box">
			<div className="home-upper-box">
				<div className="home-img">
					<Avatar shape="square" size={64} icon={<UserOutlined />} />
				</div>
				<div className="home-username">
					<Title level={4} style={{ marginBottom: 0 }}>
						{username}的主页
					</Title>
				</div>
			</div>
			<Divider className="divider-style" />
			{children}
		</div>
	)
})
