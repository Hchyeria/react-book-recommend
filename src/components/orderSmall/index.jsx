import React, { useMemo, useState, memo } from 'react'
import { Tag, List, Typography } from 'antd'
import { ShopTwoTone } from '@ant-design/icons';

import { Link } from 'react-router-dom'
import './index.styl'
import OrderSimple from '../../components/orderSimple'
import BookTitleBox from '../../components/bookTitleBox'
import Good from '../../stores/good'

import orderSmallTitleBox from '../../components/orderSmallTitleBox'
import OrderSmallSimple from '../../components/orderSmallSimple'

const { Text } = Typography

const OrderSmall = memo((props) => {
  return (
    <List
      split
      itemLayout='vertical'
      dataSource={props.data}
      renderItem={(item) => (

        <List.Item
          key={item.orderNo}
          className='book-order-list-container'
        >
          <ShopTwoTone className='order-icon' />
          <Link to={`/order/detail?orderNo=${item.orderNo}`}>
            <Text strong ellipsis style={{ width: '90%' }} className='book-hot-list'>
              {'订单编号： ' + item.orderNo}
            </Text>
            <br />
            <Text strong ellipsis style={{ width: '90%' }} className='book-hot-list'>
              {'订单金额： ' + item.totalPrice}</Text>
            <br />
            <Text>{'用户地址： ' + item.userAddress}</Text>
            <br />
            <Text>{'订单包含以下商品： ' + item.userAddress}</Text>
            <br />
            <orderSmallTitleBox >
              <OrderSmallSimple data={item.mallOrderItemVOS} />
            </orderSmallTitleBox>

          </Link>
        </List.Item>
      )}
    />
  )
})

export default OrderSmall