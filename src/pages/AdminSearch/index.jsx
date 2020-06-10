import React, { useEffect, useState, useCallback, useMemo, memo, lazy, Suspense } from 'react'
import { observer } from 'mobx-react'
import './index.styl'
import { Typography, Divider, List } from 'antd'

import Book from '../../stores/book'
import appState from '../../stores/appState.js'
import Container from '../../utils/Container'
import getBookBySearch from '../../apis/search/search.js'


import { actionUpload } from '../../utils/utils'

import { Popconfirm, Table, Button, Space, Popover, Input } from 'antd'
import { Link } from 'react-router-dom'
import Cart from '../../stores/cart'
import deleteBook from '../../apis/admin/delete.js'
import { values } from 'mobx'

const { Title, Paragraph, Text } = Typography

const AddReview = lazy(() => import('../../components/addReview'))


const AdminSearch = observer((props) => {

    const {
		location: {
			search
		},
    } = props

    const keyMatch = search.match(/\=([^]*)$/)
    const key = keyMatch.length > 1 ? keyMatch[1] : ''

	useEffect(() => {
		appState.setLoading(true)
		const fetchData = async () => {
            const data = {
                key: key,
                page: 1,
                size: 20
            }
			await getBookBySearch(data, Book.setList)
			appState.setLoading(false)
		}
		fetchData()
	}, [])

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

	const handleDelete = (bookId) => {
		const deleteBar = () => {
			Book.deleteBook(bookId)
		}

		const deleteFoo = async () => {
			const param = {
				bookID: bookId,
			}
			await deleteBook(param, deleteBar)
		}

		deleteFoo()
	}

    const [visible, setVisible] = useState(false)
    // const handleVisibleChange = (visible) => {
    //     setVisible(!visible)
    // }

    const handleClick = () => {
        setVisible(!visible)
    }

    
    // const hide = () => {
    //     setVisible(false)
    // };
    
    
    const rowSelection = {
		selectedRowKeys,
		onChange: onSelectChange,
	}
	const hasSelected = selectedRowKeys.length > 0

	const columns = [
		{   
			title: '名称',
            dataIndex: 'bookName',
            render: (text, record) => (
                <Link to={`/book/${record.bookId}`}>
                    {record.bookName}
                </Link>
            )
		},
		{
			title: '作者',
			dataIndex: 'authorName',
		},
		{
			title: '评分',
			dataIndex: 'rating',
		},
		{
			title: '操作',
			dataIndex: 'operation',
			render: (text, record) =>
				Book.list.length >= 1 ? (
                    <Space size="middle">
                        <Popconfirm
                            title="Sure to delete?"
                            onConfirm={() => handleDelete(record.bookId)}
                        >
                            <Button
                                type="primary" danger
                                size="small"
                                onClick={handleClick}
                            >
                            删除
                        </Button>
                        </Popconfirm>
                        <Link to={`/addrate/${record.bookId}`}>
							<Button
                                type="primary" ghost
                                size="small"
                                onClick={handleClick}
                            >
                            生成评分
                        </Button>
						</Link>
                        <Link to={`/mreview/${record.bookId}`}>
							<Button
                                type="primary"
                                size="small"
                                onClick={handleClick}
                            >
                            评论管理
                        </Button>
						</Link>
                    </Space>
                ) : null,
                
        },
        
    ]
    
    const { Search } = Input;
    // const handleOnSearch = (value) = useMemo(
	// 	() => () => {
	// 		history.push(`/search?query=${value}`)
	// 	},
	// 	[value]
    // )
    // const { query: { query = '' } = {} } = history
    // const [thesearch, settheSearch] = useState(query)
    // const handleSearchChange = useMemo(
	// 	() => (e) => {
	// 		settheSearch(e.target.value)
	// 	},
	// 	[]
	// )

	// const handleOnSearch = useMemo(
	// 	() => () => {
	// 		history.push(`/search?query=${thesearch}`)
	// 	},
	// 	[search]
	// )

	return (
		<Container className="Search">
			{/* <div style={{ marginBottom: 16 }}>
				<Button
					type="primary"
					onClick={start}
					disabled={!hasSelected}
                    loading={loading}
				>
					Reload
				</Button>
			</div> */}
            <div>
            {/* <div>
                <Search
                    placeholder="input search text"
                    enterButton="Search"
                    size="large"
                    //value={search}
                    //onSearch={()=>handleOnSearch(value)}
                    onChange={handleSearchChange}
					onSearch={handleOnSearch}
				    value={search}
                />
            </div> */}
            
			<Table
				//rowSelection={rowSelection}
				columns={columns}
                dataSource={Book.list}
                style={{width: '100%'}}
			/>
            </div>
		</Container>
	)
})

export default AdminSearch
