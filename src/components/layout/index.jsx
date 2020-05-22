import React, { useMemo, useState } from 'react'
import { Layout, Avatar, Button, Tooltip, Dropdown, Menu, Input } from 'antd'
import { observer } from 'mobx-react'
import { UserOutlined } from '@ant-design/icons'
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router-dom'
import Loading from '../../components/loading'
import './index.styl'
import Container from '../../utils/Container'
import appState from '../../stores/appState'
import logo from '../../asserts/logo.png'

const style = {
  width: '100%',
  maxWidth: 1200,
  marginRight:'auto',
  marginLeft: 'auto',
  paddingLeft: 20,
  paddingRight: 20
}

const { Header, Content, Footer } = Layout

const AppLayout = observer(({ children, history }) => {
	const { isLogin } = appState

	const { query: { query = '' } = {} } = history

	const [search, setSearch] = useState(query)

	const handleSearchChange = useMemo(
		() => (e) => {
			setSearch(e.target.value)
		},
		[]
	)

	const handleOnSearch = useMemo(
		() => () => {
			history.push(`/search?query=${search}`)
		},
		[search]
	)

	const UserDropDown = (
		<Menu>
			<Menu.Item>
				<Link to="/user">个人主页</Link>
			</Menu.Item>
			<Menu.Item>
				<Link to="/account">账号管理</Link>
			</Menu.Item>
			<Menu.Item>
				<Button onClick={appState.logout} type="link">
					注销
				</Button>
			</Menu.Item>
		</Menu>
	)

	return (
		<Layout>
			<Header className="site-header">
				<Container style={style}>
					<div className="header-inner">
						<div className="header-left">
							<div className="logo">
								<Link to="/">
									<img src={logo} alt="logo" className="logo-img" />
								</Link>
							</div>
							<Menu
								mode="horizontal"
								defaultSelectedKeys={['1']}
								style={{ lineHeight: '62px', marginRight: '10px' }}
							>
								<Menu.Item key="1">
									<Link to="/">首页</Link>
								</Menu.Item>
								<Menu.Item key="2">
									<Link to="/recommend">小葵花猜</Link>
								</Menu.Item>
								<Menu.Item key="3">
									<Link to="/list">年度榜单</Link>
								</Menu.Item>
								<Menu.Item key="4">
									<Link to="/shop">小葵花书店</Link>
								</Menu.Item>
							</Menu>
							<div>
								<Input.Search
									onChange={handleSearchChange}
									onSearch={handleOnSearch}
									value={search}
									placeholder="书名、作者、ISBN"
								/>
							</div>
						</div>
						<div className="header-right">
							{isLogin ? (
								<Dropdown overlay={UserDropDown}>
									<Avatar size={40} />
								</Dropdown>
							) : (
								<Tooltip placement="bottom" title="点击登录">
									<Link to="/login">
										<Avatar size={40} icon={<UserOutlined />} />
									</Link>
								</Tooltip>
							)}
						</div>
					</div>
				</Container>
			</Header>

			<Content style={{ ...style, minHeight: '700px' }}>
				<Container>{children}</Container>
			</Content>
			<Footer className="footer">小葵花二班 Copyright © 2020-present</Footer>
		</Layout>
	)
})

export default withRouter(AppLayout)
