import React from 'react'
import { 
    Layout,
    Avatar, 
    Button, 
    Tooltip,
    Dropdown, 
    Menu
} from 'antd'
import { observer } from 'mobx-react'
import { UserOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router-dom'
import './index.styl'
import Container from '../../utils/Container'
import appState from '../../stores/appState'
const { Header, Content, Footer } = Layout



const AppLayout = observer(({ children }) => {
    const { isLoading } = appState

    const UserDropDown = (
        <Menu>
            <Menu.Item>
                <Button onClick={appState.logout} type="link">
                    Logout
                </Button>
            </Menu.Item>
        </Menu>
    )

    return (
        <Layout>
            <Header className='site-header'>
                <Container>
                    <div className='header-inner'>
                        <div className="header-left">
                            <Menu
                                mode="horizontal"
                                defaultSelectedKeys={['1']}
                                style={{ lineHeight: '64px' }}
                            >
                                <Menu.Item key="1">
                                    <Link to='/'>
                                        Buy
                                    </Link>    
                                    </Menu.Item>
                                <Menu.Item key="2">
                                    <Link to='/sell'>
                                        Sell
                                    </Link>
                                    </Menu.Item>
                            </Menu>
                        </div>
                        <div className="header-right">
                            {appState.isLogin ? (
                                <Dropdown overlay={UserDropDown}>
                                    <Avatar
                                        size={40}
                                    />
        
                                </Dropdown>
                            ) : (
                                <Tooltip
                                    placement="bottom"
                                    title="Click to login"
                                >
                                
                                    <Link to='/login'>
                                        <Avatar
                                            size={40}
                                            icon={<UserOutlined />}
                                        />
                                    </Link>
                                </Tooltip>
                            )}
                        </div>
                    </div>
                </Container>
            </Header>
            <Content style={{ minHeight: '700px'}}>
                <Container>
                    { children }
                </Container>
            </Content>
            <Footer className="footer">
                小葵花二班 Copyright © 2020-present
            </Footer>
        </Layout>
    )
})

export default withRouter(AppLayout)