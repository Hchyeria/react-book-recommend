import React, { useEffect, useState, useCallback, useMemo, memo, lazy, Suspense } from 'react'
import { observer } from 'mobx-react'
import './index.styl'
import { Typography, Divider, List } from 'antd'
import randomRate from '../../apis/admin/randomRating.js'


import { actionUpload } from '../../utils/utils'

import { Popconfirm, Table, Button, Space, Popover, Form, Input, Checkbox} from 'antd'
import Rate from '../../stores/generateRate'
import deleteBook from '../../apis/admin/delete.js'

const { Title, Paragraph, Text } = Typography

const AddReview = lazy(() => import('../../components/addReview'))


const AddRate = observer((props) => {
    const {
		match: {
			params: { id },
		},
	} = props

    const layout = {
        labelCol: {
            span: 8,
        },
        wrapperCol: {
            span: 8,
        },
    };
    const tailLayout = {
        wrapperCol: {
            offset: 8,
            span: 8,
        },
    };
    
    // const Demo = () => {
    const onFinish = values => {
        console.log('Success:', values);
        const params = {
            bookID: id,
            maxRating: values.maxRating,
            minRating: values.minRating,
            size: values.size,
        }
        const addFoo = async () => {
			await randomRate(params, Rate.setList)
		}
		addFoo()
    };
    
    const onFinishFailed = errorInfo => {
        console.log('Failed:', errorInfo);
    };

	return (
        <div className="add-rate-form">
		<Form
            {...layout}
            name="basic"
            initialValues={{
                remember: true,
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            >
            <Form.Item
                label="最高分"
                name="maxRating"
                rules={[
                {
                    required: true,
                    message: 'Please input max rating!',
                },
                ]}
            >
                <Input />
            </Form.Item>

            <Form.Item
                label="最低分"
                name="minRating"
                rules={[
                {
                    required: true,
                    message: 'Please input min rating!',
                },
                ]}
            >
                <Input />
            </Form.Item>

            <Form.Item
                label="生成数量"
                name="size"
                rules={[
                {
                    required: true,
                    message: 'Please input your size!',
                },
                ]}
            >
                <Input />
            </Form.Item>

            <Form.Item {...tailLayout}>
                <Button type="primary" htmlType="submit">
                Submit
                </Button>
            </Form.Item>
    </Form>
    </div>
	)
})

export default AddRate

