import React, { memo, useState, useEffect } from 'react'
import './index.styl'
import { Link } from 'react-router-dom'
import { EllipsisOutlined, ShoppingCartOutlined } from '@ant-design/icons';
import { Card } from 'antd';
import defaultUrl from '../../asserts/default.jpg'
const { Meta } = Card;

const descriptionNode = (description, promoStatus) => {
    return (
        <>
            <div className='description'>
                {description}
            </div>
            <div>
                {
                    promoStatus === 1
                        ? 'the item will in buying activity'
                        : <div className='buying-activity'>
                            in buying activity now
                    </div>

                }
            </div>
        </>

    )
}

const CardBox = memo((props) => {
    const [loading, setLoading] = useState(true);
    const {
        authorId,
        authorName,
        bookId,
        bookName,
        bookSubname,
        countryId,
        countryName,
        coverUrl,
        isbn,
        page,
        price,
        publishedPlace,
        publishedTime,
        publisher,
        rating
    } = props

    useEffect(() => {
        if (loading) {
            setTimeout(() => setLoading(false), 500)
        }
    }, []);

    return (
        <div className='card-box'>
            <Link to={`/book/${bookId}`} >
                <Card
                    loading={loading}
                    hoverable
                    cover={
                        <img
                            alt="cover"
                            src={coverUrl ? coverUrl : defaultUrl}
                        />
                    }
                    actions={[
                        <ShoppingCartOutlined key='shop' />,
                        <EllipsisOutlined key="ellipsis" />
                    ]}
                >
                    <Meta
                        title={bookName}
                        description={
                            '￥' + price
                        }
                    />
                </Card>
            </Link>

        </div>

    )
})

export default CardBox;