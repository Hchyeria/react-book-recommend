import React, { useEffect, useState, useCallback, useMemo, memo, lazy, Suspense } from 'react'
import { observer } from 'mobx-react'
import './index.styl'
import { Form, Input, InputNumber, Button } from 'antd';
import { Typography, Divider, List } from 'antd'
import { EditOutlined } from '@ant-design/icons'
import { actionUpload } from '../../utils/utils'
import { Link } from 'react-router-dom'

import Container from '../../utils/Container'
import appState from '../../stores/appState.js'

const { Title, Paragraph, Text } = Typography

const layout = {
    labelCol: {
        span: 8,
    },
    wrapperCol: {
        span: 16,
    },
};
const validateMessages = {
    required: '${label} is required!',
    types: {
        email: '${label} is not validate email!',
        number: '${label} is not a validate number!',
    },
    number: {
        range: '${label} must be between ${min} and ${max}',
    },
};

const FillInfo = observer((props) => {
    // const layout = {
    //     labelCol: {
    //         span: 8,
    //     },
    //     wrapperCol: {
    //         span: 16,
    //     },
    // };
    // const validateMessages = {
    //     required: '${label} is required!',
    //     types: {
    //         email: '${label} is not validate email!',
    //         number: '${label} is not a validate number!',
    //     },
    //     number: {
    //         range: '${label} must be between ${min} and ${max}',
    //     },
    // };

    // const FillInfo = () => {

    const { isLoading } = appState
    useEffect(() => {
        appState.setLoading(true)
        const fetchData = async () => {
            // await getBook(params, Item.setList)
            appState.setLoading(false)
        }
        fetchData()
    }, [])
    const onFinish = values => {
        console.log(values);
    };

    return (

        <Container className="fillinfo" isLoading={isLoading}>

            <Form {...layout} name="nest-messages" onFinish={onFinish} validateMessages={validateMessages}>
                <Form.Item
                    name={['user', 'address']}
                    label="地址"
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                    size={'large'}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    name={['user', 'phone']}
                    label="电话"
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item name={['user', 'ps']} label="备注">
                    <Input.TextArea />
                </Form.Item>
                <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
                    <Link to={`/cart`}>
                        <Button type="primary" htmlType="submit">
                            下单
                        </Button>
                    </Link>
                </Form.Item>
            </Form>
        </Container>

    )
})
export default FillInfo