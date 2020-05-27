import React, { memo, useState, useCallback } from 'react'
import { Button } from 'antd'

const HasRead = memo((props) => {
	const { upLoadRead, defaultValue = false } = props

	const [value, setValue] = useState(defaultValue)

	const handleClick = () => {
    const foo = () => {
      setValue(!value)
    }
		upLoadRead && upLoadRead(value, foo)
	}

	return (
		<div>
			<Button type="primary" onClick={handleClick}>
				{value ? '在读' : '未读'}
			</Button>
		</div>
	)
})

export default HasRead