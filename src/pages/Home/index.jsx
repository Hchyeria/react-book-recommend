import React from 'react'
import { useEffect, useState } from 'react'
import {
    observer
} from 'mobx-react'
import './index.styl'

import BookRead from '../../components/bookRead'
import BookTitleBox from '../../components/bookTitleBox'
import BookDetail from '../../components/bookDetail'
import BookSimple from '../../components/bookSimple'
import TagList from '../../components/tagList'
import BookSmall from '../../components/bookSmall'
import Container from '../../utils/Container'
import appState from '../../stores/appState.js'
import Book from '../../stores/book'
import HomeHead from '../../components/homeHead'
import BookComment from '../../components/bookComment'
import getUserbyId from '../../apis/user/center.js'
import User from '../../stores/user'

const Home = observer((props) => {

    const { isLoading } = appState

    const params = {
        userID: appState.user['userId']
    }

    useEffect(() => {
        appState.setLoading(true)
        const fetchData = async () => {
			// await getUserbyId(params, User.setInfo)
			appState.setLoading(false)
		}
		fetchData()
    }, [])

    return (
        <Container className="Home" isLoading={isLoading}>
            <div className='home-container'>
                <HomeHead username='test'>
                    <BookTitleBox title={'读过'}>
                        <BookRead data={Book.like} />
                    </BookTitleBox>
                    <BookTitleBox title={'想读'}>
                        <BookRead data={Book.list} />
                    </BookTitleBox>
                    <BookTitleBox title={'我的评论'}>
                        <BookComment bookName={'红军不怕远征难'} commentContent={'一本好书，力荐'} coverUrl={'http://api.jisuapi.com/isbn//upload/3916/3915549.jpg'}></BookComment>
                    </BookTitleBox>
                </HomeHead>

            </div>
        </Container>
    );
})

export default Home;
