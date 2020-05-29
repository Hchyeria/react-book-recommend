import React from 'react'
import { useEffect, useState } from 'react'
import {
    observer
} from 'mobx-react'
import './index.styl'
import { Tag, List, Typography } from 'antd'

import BookTitleBox from '../../components/bookTitleBox'
import Container from '../../utils/Container'
import appState from '../../stores/appState.js'
import Book from '../../stores/book'
import Good from '../../stores/good'
import OrderSimple from '../../components/orderSimple'
import getOrderByNo from '../../apis/order/detail.js'

const { Text } = Typography

const OrderDetail = observer((props) => {


    const { isLoading } = appState

    const {
        location: {
            search
        },
    } = props

    const keyMatch = search.match(/\=([\w]*)$/)
    const key = keyMatch.length > 1 ? keyMatch[1] : ''

    useEffect(() => {
        appState.setLoading(true)
        const fetchData = async () => {
            const data = {
                orderNo: key
            }
            await getOrderByNo(data, Good.setList)
            appState.setLoading(false)
        }
        fetchData()
        appState.setLoading(false)
    }, [key])

    return (
        <Container className="Search" isLoading={isLoading}>
            <div className='container-left'>
                <BookTitleBox title={'订单包含以下内容'}>
                    <OrderSimple data={Good.list.mallOrderItemVOS} />
                </BookTitleBox>

                <Text strong ellipsis style={{ width: '90%' }} className='book-hot-list'>
                    {'订单金额： ' + Good.list.totalPrice}</Text>
            </div>

        </Container>
    );
})

export default OrderDetail;
