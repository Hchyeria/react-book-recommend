import React, { useMemo, useState, memo } from 'react'
import { Tag, List, Typography } from 'antd'

import { Link } from 'react-router-dom'
import './index.styl'

const { Text } = Typography

const BookSmall = memo((props) => {
	return (
		<List
      split
			itemLayout='vertical'
			dataSource={props.data}
			renderItem={(item, index) => (
        <List.Item
          key={index}
          className='book-hot-list-container'
				>
          <Link to={`/book/${item.bookId}`}>
              <Text strong ellipsis style={{width: '90%'}} className='book-hot-list'>
                {(index + 1) + '. ' + item.bookName}
              </Text>
              <br />
              <Text>{item.author}</Text>
            </Link>
        </List.Item>
			)}
		/>
	)
})

export default BookSmall
