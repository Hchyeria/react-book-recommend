import React, { memo, useState } from 'react'
import { success } from '../../utils/Message'
import { Input, Button } from 'antd'
import './index.styl'

const { TextArea } = Input

const AddReview = memo((props) => {
	const [value, setValue] = useState('')

	const handleChange = ({ target: { value } }) => {
        setValue(value)
	}
	return (
		<>
			<TextArea
				value={value}
				onChange={handleChange}
				placeholder="请写下您的书评"
				autoSize={{ minRows: 3, maxRows: 5 }}
			/>
			<Button>提交</Button>
		</>
	)
})

export default AddReview
