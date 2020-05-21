import React, { memo, useState, useCallback } from 'react'
import { Tabs } from 'antd'
import Login from '../../components/login/index'
import Register from '../../components/register/index'
import './index.styl'

import appState from '../../stores/appState'

const { TabPane } = Tabs
const LoginRegister = memo((props) => {
	const { history: goBack } = props

	// if (localStorage.getItem('token') && appState.isLogin) {
	//     goBack()
	// }

	const [keyState, setKeyState] = useState('1')

	const goBackLogin = useCallback(() => {
		setKeyState('1')
	}, [])

	return (
		<>
			<div className="login-from">
				<Tabs defaultActiveKey={keyState}>
					<TabPane tab="登录" key="1">
						<Login cb={goBack} {...props} />
					</TabPane>
					<TabPane tab="注册" key="2">
						<Register cb={goBackLogin} {...props} />
					</TabPane>
				</Tabs>
			</div>
		</>
	)
})

export default LoginRegister
