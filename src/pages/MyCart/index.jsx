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
            render: (text, record) =>
                Cart.list.length >= 1 ? (
                    <Popconfirm title="Sure to delete?" onConfirm={() => this.handleDelete(record.key)}>
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
        </div>
    );

})

export default MyCart;
