import React from 'react'
import { Space } from 'antd'

const IconText = ({ icon, text, onClick }) => (
	<Space style={{ margin: '0 5px' }} className="icon-text" onClick={onClick}>
		{React.createElement(icon)}
		{text}
	</Space>
)

export default IconText
