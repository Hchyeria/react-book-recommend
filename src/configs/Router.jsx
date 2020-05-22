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

const PrivateRoute = ({ isLogin, component: Component, ...rest }) => (
  <Route
    {...rest}
    render = {
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
    <InjectPrivateRoute path="/book/:id" component={BookDetail} key="bookDetail" />
  </Switch>
)
