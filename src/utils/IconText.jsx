import React from 'react'
import {  Space } from 'antd';

const IconText = ({ icon, text }) => (
    <Space style={{margin: '0 5px'}} className='icon-text'>
      {React.createElement(icon)}
      {text}
    </Space>
)

export default IconText