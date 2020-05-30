import React from 'react'
import { useEffect, useState } from 'react'
import {
    observer
} from 'mobx-react'
import './index.styl'

import BookDetail from '../../components/bookDetail'
import Container from '../../utils/Container'
import appState from '../../stores/appState.js'
import Book from '../../stores/book'
import CartTitleBox from '../../components/CartTitleBox'
import { Popconfirm, Table, Button } from 'antd';
import Cart from '../../stores/cart'
import getGoods from '../../apis/shopping/my-cart.js'
import deleteGoods from '../../apis/shopping/delete.js'
import createOrder from '../../apis/order/create.js'



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
        }, 1000);
    };

    const onSelectChange = selectedRowKeys => {
        console.log('selectedRowKeys changed: ', selectedRowKeys);
        setSelectedRowKeys(selectedRowKeys)
    };

    const handleDelete = (cartItemId) => {
        // const deleteFoo = async () => {
        //     const data = {
        //         mallShoppingCartItemId: cartItemId
        //     }
        //     await deleteGoods(data)
        // }
        // 
        // deleteFoo()
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
                itemIds: selectedRowKeys
            }
            await createOrder(data)
        }
        createFoo()
    }

    const rowSelection = {
        selectedRowKeys,
        onChange: onSelectChange,
    };
    const hasSelected = selectedRowKeys.length > 0;

    const {
        cartItemId,
        goodsId,
        goodsCount,
        goodsName,
        sellingPrice
    } = props

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
            render: () =>
                Cart.list.length >= 1 ? (
                    <Popconfirm title="Sure to delete?" onConfirm={()=>this.handleDelete({cartItemId})}>
                        <a>Delete</a>
                    </Popconfirm>
                ) : null
        },
    ];




    return (
        <div>
            <div style={{ marginBottom: 16 }}>
                <Button type="primary" onClick={start} disabled={!hasSelected} loading={loading}>
                    Reload
                </Button>
                <span style={{ marginLeft: 8 }}>
                    {hasSelected ? `Selected ${selectedRowKeys.length} items` : ''}
                </span>

            </div>
            <Table rowSelection={rowSelection} columns={columns} dataSource={Cart.list} />
            <Button type="primary" onClick={handleClick}>下单</Button>
        </div>
    );

})

export default MyCart;
