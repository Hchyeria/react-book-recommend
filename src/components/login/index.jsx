import React from 'react'
import { success } from '../../utils/Message'
import { UserOutlined, LockOutlined } from '@ant-design/icons'
import './index.styl'

import { post } from '../../utils/request'
import generateForm from '../../utils/generateForm'

const onFinish = (values, setLoading, cb) => {
	const postData = async () => {
		const res = await post({
			url: 'user/login',
			data: values,
		})
		setLoading(false)
		if (res.status) {
			success('Login successfully!')
      localStorage.setItem('token', res.data)
      cb && cb()
		}
	}
	postData()
}

const config = {
	onFinish,
	name: 'Login',
	submitText: '登录',
	setting: {
		className: 'login-form',
	},
	data: [
		{
			type: 'Input',
			element: {
				prefix: <UserOutlined className="site-form-item-icon" />,
				placeholder: 'User Name',
			},
			formItem: {
				label: '用户名',
				name: 'userName',
				rules: [{ required: true, message: '请输入用户名!' }],
				hasFeedback: true,
			},
		},
		{
			type: 'Input',
			element: {
				prefix: <LockOutlined className="site-form-item-icon" />,
				type: 'password',
				placeholder: '密码',
			},
			formItem: {
				label: '密码',
				name: 'password',
				rules: [{ required: true, message: '请输入密码!' }],
				hasFeedback: true,
			},
		},
	],
}

const Login = generateForm(config)

export default Login
