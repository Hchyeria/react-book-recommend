import React from 'react'
import { useEffect, useState } from 'react'
import {
    observer
} from 'mobx-react'
import './index.styl'

import BookDetail from '../../components/bookDetail'
import Container from '../../utils/Container'
import appState from '../../stores/appState.js'
import Book from '../../stores/book'
import CartTitleBox from '../../components/CartTitleBox'
import Good from '../../components/Good'

const App = observer((props) => {

    const { isLoading } = appState

    const params = {
        page: 1,
        size: 10,
        userID: appState.user['userId']
    }

    const params1 = {
        page: 1,
        size: 11,
    }

    useEffect(() => {
        appState.setLoading(true)
        const fetchData = async () => {
            // await getUserRecommend(params, Book.setLike)
            // await getHotRank(params1, Book.setTop)
            // await getHotTag(params1, Book.setTag)
            appState.setLoading(false)
        }
        fetchData()
    }, [])

    return (
        <Container className="Cart" isLoading={isLoading}>
            <div className='container-left'>
                <CartTitleBox title={'我的购物车'}>
                    <Good data={Book.like} />
                </CartTitleBox>
            </div>
        </Container>
    );
})

export default App;
