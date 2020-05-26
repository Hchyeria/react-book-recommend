import React, { memo } from 'react'
import { Typography, Divider, Pagination } from 'antd'
import { Link } from 'react-router-dom'
import './index.styl'

const { Title, Text } = Typography

const ListTitleBox =  memo(({
	// children,
    title1,
    title2,
}) => {
	return (
		<div className="list-title-box">
			<div className="list-upper-box">
                <div className="year">
                    <Title level={3} style={{ marginBottom: 0 }}>
					    {title1}
				    </Title>
                </div>
				<div className="list-name">
                    <Title level={1} style={{ marginBottom: 0 }}>
					    {title2}
				    </Title>
                </div>
            </div>
			<Divider className='divider-style' />
			{/* {children} */}
		</div>
	)
})

export default ListTitleBox