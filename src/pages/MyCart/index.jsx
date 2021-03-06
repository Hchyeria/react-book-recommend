import React from 'react'
import { useEffect, useState } from 'react'
import { observer } from 'mobx-react'
import './index.styl'

import BookDetail from '../../components/bookDetail'
import Container from '../../utils/Container'
import appState from '../../stores/appState.js'
import Book from '../../stores/book'
import CartTitleBox from '../../components/CartTitleBox'
import { Popconfirm, Table, Button } from 'antd'
import Cart from '../../stores/cart'
import getGoods from '../../apis/shopping/my-cart.js'
import deleteGoods from '../../apis/shopping/delete.js'
import createOrder from '../../apis/order/create.js'
import update from '../../apis/shopping/update.js'
import { Link } from 'react-router-dom'

const MyCart = observer((props) => {
	useEffect(() => {
		appState.setLoading(true)
		const fetchData = async () => {
			await getGoods(Cart.setList)
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

	const handleDelete = (cartItemId) => {
		const deleteBar = () => {
			Cart.deleteItem(cartItemId)
		}

		const deleteFoo = async () => {
			const data = {
				mallShoppingCartItemId: cartItemId,
			}
			await deleteGoods(data, deleteBar)
		}

		deleteFoo()
	}

	const handleClick = () => {
		// var arr = []
		// for(var i = 0; i < selectedRowKeys.length; i++){
		//     arr.push(selectedRowKeys[i])
		// }
		// arr.push(selectedRowKeys[0])
		// console.log(arr)
		const createFoo = async () => {
			const data = {
				'itemIds[]': selectedRowKeys,
			}
			await createOrder(data)
		}
		createFoo()
		// window.location.reload()
		// const foo = async () => {
		// 	await createFoo()
		// 	window.location.reload()
		// }
		// foo()
	}

	const rowSelection = {
		selectedRowKeys,
		onChange: onSelectChange,
	}
	const hasSelected = selectedRowKeys.length > 0

	const columns = [
		{
			title: '名称',
			dataIndex: 'goodsName',
		},
		{
			title: '数量',
			dataIndex: 'goodsCount',
		},
		{
			title: '价格',
			dataIndex: 'sellingPrice',
		},
		{
			title: '操作',
			dataIndex: 'operation',
			render: (text, record) =>
				Cart.list.length >= 1 ? (
					<Popconfirm
						title="Sure to delete?"
						onConfirm={() => handleDelete(record.cartItemId)}
					>
						<a>Delete</a>
					</Popconfirm>
				) : null,
		},
	]

	return (
		<Container className="cart">

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
				dataSource={Cart.list}
				style={{ width: '100%' }}
			/>
			<div className="row">
				<Link to={`/fillinfo`}>
					<Button type="primary" onClick={handleClick}>
						下单
						</Button>
				</Link>
				<br />
				<Link to={`/orderList`}>
					<Button type="primary">
						订单列表
					</Button>
				</Link>
			</div>
			
		</Container>
	)

})

export default MyCart
