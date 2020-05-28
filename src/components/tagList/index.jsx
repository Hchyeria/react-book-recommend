import React, { useMemo, useState, memo } from 'react'
import { Tag, List } from 'antd'

import { Link } from 'react-router-dom'
import './index.styl'
// import getHotTag from '../../apis/recommend/hotTag'

const TagList = memo(({ className, column = 4, ...props }) => {

	const { closePagination, data } = props

	return (
		<List
			className={className}
			grid={{ gutter: 2, column: column }}
			pagination={closePagination ? false : {
				pageSize: 20,
			}}
			dataSource={data}
			renderItem={(item) => (
				<List.Item
					className='tag-list'
					key={item.tagName}
					extra={
						<Tag key={item.tagName}>
							<Link to={`/tag/${item.tagId}`}>{item.tagName}</Link>
						</Tag>
					}
				>
				</List.Item>
			)}
		/>
	)
})

export default TagList
