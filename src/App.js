import React from 'react';
import './styles/index.styl';
import 'normalize.css/normalize.css'
import { createBrowserHistory } from 'history';
import { Router, Route } from 'react-router-dom';
import RouteConfig from './configs/Router'
import { Provider } from 'mobx-react'
import store from './stores/store' 
import Annual from './pages/Annual'


const App = () => 
    <Provider store={store}>
        <Router history={createBrowserHistory()}>
            <RouteConfig />
            
        </Router>
    </Provider>
        

export default App;