import React, { memo, useState, useCallback } from 'react'

import { Rate } from 'antd'

const desc = ['很差', '较差', '还行', '推荐', '力荐']


const Rater = memo((props) => {

    const { upLoadRate, defaultValue = 0 } = props

    const [value, setValue] = useState(defaultValue)
    
    const handleChange = useCallback((value) => {
        setValue(value)
        upLoadRate && upLoadRate(value)
    }, [])

    return (
        <span>
          <Rate tooltips={desc} onChange={handleChange} value={value} />
          {value ? <span className="ant-rate-text">{desc[value - 1]}</span> : ''}
        </span>
    )
})

export default Rater