import React, { memo, useState, useCallback } from 'react'
import { Button } from 'antd';

const WantRead = memo((props) => {

    const { upLoadWant, defaultValue = 0 } = props

    const [value, setValue] = useState(defaultValue)
    
    const handleChange = useCallback((value) => {
        setValue(value)
        upLoadWant && upLoadWant(value)
    }, [])
    

    return (
        <div>
            <Button type="primary" onClick={handleChange}>想读</Button>
        </div>
    )
})

export default WantRead