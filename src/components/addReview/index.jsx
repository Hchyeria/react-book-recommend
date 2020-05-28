import React, { memo, useState, useCallback } from 'react'
import { success } from '../../utils/Message'
import { Input, Button } from 'antd'
import { Rate } from 'antd'
import './index.styl'
import addReview from '../../apis/reviews/add.js'

const { TextArea } = Input
const desc = ['很差', '较差', '还行', '推荐', '力荐']

const AddReview = memo((props) => {
	const [value, setValue] = useState('')

	const handleChange = ({ target: { value } }) => {
        setValue(value)
	}

	const [rateValue, setRateValue] = useState('')
    
    const handleRateChange = useCallback((rateValue) => {
        setRateValue(rateValue)
	}, [])

	const { bookId  } = props
	
	const handleClick = () => {
		// setValue(value)
		const addFoo = async () => {
			const data = {
				bookId,
				content: value,
				star: 1
			}
			await addReview(data)
		}
		addFoo()
	}

	return (
		<>
			<TextArea
				value={value}
				onChange={handleChange}
				placeholder="请写下您的书评"
				autoSize={{ minRows: 3, maxRows: 5 }}
			/>
			<span>
          		<Rate tooltips={desc} onChange={handleRateChange} value={rateValue} />
          			{rateValue ? <span className="ant-rate-text">{desc[value - 1]}</span> : ''}
        	</span>
			<Button onClick={handleClick}>提交</Button>
		</>
	)
})

export default AddReview
