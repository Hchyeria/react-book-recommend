import React, { memo, useState, useCallback } from 'react'
import { Button } from 'antd'
import { actionUpload } from '../../utils/utils'

const WantRead = memo((props) => {

	const { book } = props

	const { upLoadWant, defaultValue = false } = props

	const [value, setValue] = useState(defaultValue)

	const handleClick = () => {
		const foo = () => {
			if (!value) {
				actionUpload(book, 'want')()
			}
			setValue(!value)
		}
		upLoadWant && upLoadWant(value, foo)
	}

	return (
		<div>
			<Button type="primary" onClick={handleClick}>
				{value ? '已想读' : '想读'}
			</Button>
		</div>
	)
})

export default WantRead
