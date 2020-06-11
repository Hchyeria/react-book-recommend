import React, { lazy, Suspense } from 'react'
import { Route, Switch, Redirect, withRouter } from 'react-router-dom'

import { inject, observer } from 'mobx-react'

<<<<<<< HEAD
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
import Admin from '../pages/Admin'
import MyCart from '../pages/MyCart'
import AddRate from '../pages/AddRate'
import ManageReview from '../pages/ManageReview'
import AdminSearch from '../pages/AdminSearch'
import FillInfo from '../pages/FillInfo'
=======
import PageLoading from '../components/loading'
>>>>>>> 3e6e4cdd62d4e9d3c9e2c17035b291471f1d0c9e

const Layout = lazy(() => import('../components/layout'))
const App = lazy(() => import('../pages/Index'))
const Login = lazy(() => import('../pages/LoginRegister'))
const BookDetail = lazy(() => import('../pages/BookDetail'))
const Recommend = lazy(() => import('../pages/Recommend'))
const Home = lazy(() => import('../pages/Home'))
const Lists = lazy(() => import('../pages/List'))
const Search = lazy(() => import('../pages/Search'))
const Tag = lazy(() => import('../pages/Tag'))
const Shop = lazy(() => import('../pages/Shop'))
const OrderDetail = lazy(() => import('../pages/OrderDetail'))
const MyCart = lazy(() => import('../pages/MyCart'))
const Annual = lazy(() => import('../pages/Annual'))

const PrivateRoute = ({ isLogin, component: Component, ...rest }) => (
	<Route
		{...rest}
		render={(props) =>
			isLogin ? (
				<Layout>
					<Component {...props} />
				</Layout>
			) : (
				<Redirect
					to={{
						pathname: '/login',
						search: `?from=${props.match.url}`,
					}}
				/>
			)
		}
	/>
)

const InjectPrivateRoute = withRouter(
	inject(({ store }) => {
		return {
			isLogin: store.appState.isLogin,
		}
	})(observer(PrivateRoute))
)

const LayoutRoute = ({ component: Component, ...rest }) => (
	<Route
		{...rest}
		render={(props) => (
			<Layout>
				<Component {...props} />
			</Layout>
		)}
	/>
)

export default () => (
	<Suspense fallback={<PageLoading />}>
		<Switch>
			<LayoutRoute path="/" exact component={App} key="index" />
			<LayoutRoute path="/login" component={Login} key="login" />
			<InjectPrivateRoute
				path="/recommend"
				exact
				component={Recommend}
				key="recommend"
			/>

			<InjectPrivateRoute path="/user" exact component={Home} key="user" />
			<LayoutRoute path="/search" component={Search} key="search" />
			<InjectPrivateRoute path="/shop" component={Shop} key="shop" />
			<InjectPrivateRoute
				path="/order/detail"
				component={OrderDetail}
				key="orderDetail"
			/>

<<<<<<< HEAD
    <Route path="/fillinfo" exact component={FillInfo} key="fillinfo" />} />

  </Switch>
=======
			<InjectPrivateRoute
				path="/book/:id"
				component={BookDetail}
				key="bookDetail"
			/>
			<InjectPrivateRoute path="/tag/:id" component={Tag} key="tag" />
			<InjectPrivateRoute path="/cart" component={MyCart} key="myCart" />
			<Route path="/annual" component={Annual} isSelfLayout key="annual" />
		</Switch>
	</Suspense>
>>>>>>> 3e6e4cdd62d4e9d3c9e2c17035b291471f1d0c9e
)
