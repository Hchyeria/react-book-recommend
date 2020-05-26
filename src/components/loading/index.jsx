import React from 'react'
import { Spin } from 'antd';
import './index.styl'

const PageLoading = () => {
    return (
        <div className='page-loading'>
            <Spin />
        </div>
        
    )
}

export default PageLoading