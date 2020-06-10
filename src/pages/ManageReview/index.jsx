import React, { useEffect, useState, useCallback, useMemo, memo, lazy, Suspense } from 'react'
import { observer } from 'mobx-react'
import './index.styl'
import { Typography, Divider, List } from 'antd'
import { EditOutlined } from '@ant-design/icons'
import BookInfo from '../../components/bookInfo'
import Book from '../../stores/book'
import appState from '../../stores/appState.js'
import ReviewStore from '../../stores/reviewStore'
import BookSimple from '../../components/bookSimple'
import Rater from '../../components/rater'
import Review from '../../components/review'
import IconText from '../../utils/IconText'
import Container from '../../utils/Container'
import getReview from '../../apis/reviews/reviewTime'


import { actionUpload } from '../../utils/utils'

import { Popconfirm, Table, Button, Space, Popover } from 'antd'
import { Link } from 'react-router-dom'
import deleteReview from '../../apis/admin/deletReview.js'

const { Title, Paragraph, Text } = Typography

const AddReview = lazy(() => import('../../components/addReview'))


const ManageReview = observer((props) => {

    const {
		match: {
			params: { id },
		},
	} = props
    
    const params = {
		page: 1,
		size: 10,
	}

	useEffect(() => {
		appState.setLoading(true)
		const fetchData = async () => {
            const data = {
                bookId: id,
                page: 1,
                size: 10,
            }
			await getReview(data, ReviewStore.setTime)
			appState.setLoading(false)
		}
		fetchData()
	}, [id])

	const [selectedRowKeys, setSelectedRowKeys] = useState([])
	const [loading, setLoading] = useState(false)

	const start = () => {
		setLoading(true)
		setTimeout(() => {
			setSelectedRowKeys([])
			setLoading(false)
		}, 1000)
	}

	const onSelectChange = (selectedRowKeys) => {
		console.log('selectedRowKeys changed: ', selectedRowKeys)
		setSelectedRowKeys(selectedRowKeys)
	}

	const handleDelete = (reviewId) => {
		const deleteBar = () => {
			ReviewStore.deleteReview(reviewId)
		}

		const deleteFoo = async () => {
			const param = {
				reviewID: reviewId,
			}
			await deleteReview(param, deleteBar)
		}

		deleteFoo()
	}

    
    
    const rowSelection = {
		selectedRowKeys,
		onChange: onSelectChange,
	}
	const hasSelected = selectedRowKeys.length > 0

	const columns = [
		{   
			title: '内容',
            dataIndex: 'content',
            // render: (text, record) => (
            //     <Link to={`/addrate/${record.bookId}`}>
            //         {record.bookName}
            //     </Link>
            // )
		},
		{
			title: '评分',
			dataIndex: 'star',
		},
		{
			title: '用户ID',
			dataIndex: 'userId',
		},
		{
			title: '操作',
			dataIndex: 'operation',
			render: (text, record) =>
				 (
                    <Space size="middle">
                        <Popconfirm
                            title="Sure to delete?"
                            onConfirm={() => handleDelete(record.reviewId)}
                        >
                            <a>Delete</a>
                        </Popconfirm>
                        {/* <Link to={`/addrate/${record.bookId}`}>
							<Button
                                type="primary"
                                size="small"
                                onClick={handleClick}
                            >
                            生成评分
                        </Button>
						</Link> */}
                        {/* <Popover
                            content={<a onClick={hide}>Close</a>}
                            title="Title"
                            trigger="click"
                            visible={visible}
                            onVisibleChange={handleVisibleChange}
                        >
                            <Button type="primary">Click me</Button>
                        </Popover> */}
                    </Space>
                ) ,
                
        },
        
	]

	return (
		<Container className="Search">
			<div style={{ marginBottom: 16 }}>
				<Button
					type="primary"
					onClick={start}
					disabled={!hasSelected}
					loading={loading}
				>
					Reload
				</Button>
			</div>
			<Table
				rowSelection={rowSelection}
				columns={columns}
                dataSource={ReviewStore.time}
                style={{width: '100%'}}
			/>
		</Container>
	)
})

export default ManageReview
