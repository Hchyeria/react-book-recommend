import React, { memo, useCallback } from 'react'
import { Tabs } from 'antd'
import Login from '../../components/login/index'
import Register from '../../components/register/index'
import './index.styl'

import appState from '../../stores/appState'

const { TabPane } = Tabs
const LoginRegister = memo((props) => {
	const { history: { goBack } } = props

    const loginSuccess = useCallback((user) => {
		appState.login()
		appState.setUser(user)
        goBack()
	}, [])
	
	if (localStorage.getItem('token') && appState.isLogin) {
	    goBack()
	}

	return (
		<>
			<div className="login-from">
				<Tabs defaultActiveKey="1">
					<TabPane tab="登录" key="1">
						<Login cb={loginSuccess} {...props} />
					</TabPane>
					<TabPane tab="注册" key="2">
						<Register {...props} />
					</TabPane>
				</Tabs>
			</div>
		</>
	)
})

export default LoginRegister
