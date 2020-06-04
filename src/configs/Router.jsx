import React from 'react'
import {
  Route,
  Switch,
  Redirect,
  withRouter,
} from 'react-router-dom'

import {
  inject,
  observer,
} from 'mobx-react'

import App from '../pages/Index'
import Login from '../pages/LoginRegister'
import BookDetail from '../pages/BookDetail'
import Recommend from '../pages/Recommend'
import Home from '../pages/Home'
import Lists from '../pages/List'
import Search from '../pages/Search'
import Tag from '../pages/Tag'
import Shop from '../pages/Shop'
import OrderDetail from '../pages/OrderDetail'

import MyCart from '../pages/MyCart'


const PrivateRoute = ({ isLogin, component: Component, ...rest }) => (
  <Route
    {...rest}
    render={
      (props) => (
        isLogin
          ? <Component {...props} />
          : (
            <Redirect
              to={{
                pathname: '/login',
                search: `?from=${props.match.url}`,
              }}
            />
          )
      )
    }
  />
)


const InjectPrivateRoute = withRouter(inject(({ store }) => {
  return {
    isLogin: store.appState.isLogin,
  }
})(observer(PrivateRoute)))

export default () => (
  <Switch>
    <Route path="/" exact component={App} key="index" />} />
    <Route path="/login" component={Login} key="login" />
    <InjectPrivateRoute path="/recommend" exact component={Recommend} key="recommend" />} />
    <Route path="/list" exact component={Lists} key="index" />} />
    <InjectPrivateRoute path="/user" exact component={Home} key="user" />} />
    <Route path="/search" component={Search} key="search" />} />
    <InjectPrivateRoute path="/shop" component={Shop} key="shop" />} />
    <InjectPrivateRoute path="/order/detail" component={OrderDetail} key="orderDetail" />} />
    <InjectPrivateRoute path="/book/:id" component={BookDetail} key="bookDetail" />
    <InjectPrivateRoute path="/tag/:id" component={Tag} key="tag" />
    <InjectPrivateRoute path="/cart" component={MyCart} key="myCart" />
  </Switch>
)
