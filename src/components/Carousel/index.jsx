import React, { memo } from 'react'
import { Carousel } from 'antd'

const CarouselComponent = memo((props) => {
    const { urls, className } = props
	return (
        <div style={{margin: '10% 0 0 0'}}>
            <Carousel autoplay className={className}>
                {
                    urls.length && urls.map((ele, index) => (
                        <div className="banner" key={`banner-${index}`}>
                            <img 
                                src={ele}
                            />
                        </div>
                    ))
                }
            </Carousel>
        </div>
	)
})

export default CarouselComponent
