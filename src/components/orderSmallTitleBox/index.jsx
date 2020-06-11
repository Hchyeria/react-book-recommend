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
        <div className="order-small-title-box">
            <div className="order-upper-box">
                <Title level={4} style={{ marginBottom: 0 }}>
                    {title}
                </Title>
            </div>
            <Divider className='divider-style' />
            {children}
        </div>
    )
})
