import React, { useMemo, useState, memo } from 'react'
import { Tag, List } from 'antd'

import { Link } from 'react-router-dom'
import './index.styl'

const TagList = memo(({ className, column = 5, ...props }) => {

  const { closePagination, data } = props

	return (
		<List
      className={className}
			grid={{ gutter: 2, column: column }}
			pagination={closePagination ? false : {
				pageSize: 20,
			}}
			dataSource={data}
			renderItem={(item, index) => (
        <List.Item
          className='tag-list'
					key={index}
					extra={
						<Tag key={index}>
              <Link to={`/book/tag/${index}`}>{item}</Link>
            </Tag>
					}
				>
        </List.Item>
			)}
		/>
	)
})

export default TagList
