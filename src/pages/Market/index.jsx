import React from 'react'
import { useEffect, useState } from 'react'
import {
    observer
} from 'mobx-react'
import './index.styl'

import BookTitleBox from '../../components/bookTitleBox'
import BookDetail from '../../components/bookDetail'
import BookSimple from '../../components/bookSimple'
import ClassifyList from '../../components/classifyList'
import TagList from '../../components/tagList'
import BookSmall from '../../components/bookSmall'
import Container from '../../utils/Container'
import appState from '../../stores/appState.js'
import Book from '../../stores/book'

const App = observer((props) => {

    const { isLoading } = appState

    useEffect(() => {
        appState.setLoading(true)
        setTimeout(() => {
            appState.setLoading(false)
        }, 100)
    }, [])

    return (
        <Container className="App" isLoading={isLoading}>
            <div className='container-left'>
                <ClassifyList title={'分类'}>
                    <TagList data={Book.tags} />
                </ClassifyList>
                <BookTitleBox title={'畅销图书榜'}>
                    <BookSmall data={Book.like} />
                </BookTitleBox>
            </div>
            <div className='container-right'>

                <BookTitleBox title={'猜你可能感兴趣的图书'}>
                    <BookDetail data={Book.like} />
                </BookTitleBox>
                <BookTitleBox title={'最受关注的图书'}>
                    <BookSimple data={Book.list} />
                </BookTitleBox>
            </div>

        </Container>
    );
})

export default App;
