import React from 'react'
import { useEffect, useState } from 'react'
import {
    observer
  } from 'mobx-react'
import './index.styl'

import BookTitleBox from '../../components/bookTitleBox'
import BookDetail from '../../components/bookDetail'
import BookSimple from '../../components/bookSimple'
import TagList from '../../components/tagList'
import BookSmall from '../../components/bookSmall'
import Container from '../../utils/Container'
import appState from '../../stores/appState.js'
import Book from '../../stores/book'
import ListTitleBox from '../../components/ListTitleBox'
import BookTop from '../../components/BookTop'
import BookTop10 from '../../components/BookTop10'

const Lists = observer((props) => {
    
    const { isLoading } = appState 

    useEffect(() => {
        appState.setLoading(true)
        setTimeout(() => {
            appState.setLoading(false)
        }, 100)
    }, [])

    return (
        <Container className="List" isLoading={isLoading}>
            <div className='container-mid'>
                <ListTitleBox title1={'2019年度'} title2={'最受欢迎图书'}>
                </ListTitleBox>
                <BookTop data={Book.top} />
                <div className='book-top-10'>
                    <BookTop10 data={Book.top10} />
                </div>
            </div>
        </Container>
    );
})

export default Lists;