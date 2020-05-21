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

import Book from '../../stores/book'

const App = observer((props) => {
    
    return (
        <div className="App">
            <div className='container-left'>
                <BookTitleBox title={'猜你可能感兴趣的图书'}>
                    <BookDetail data={Book.like} />
                </BookTitleBox>
                <BookTitleBox title={'最受关注的图书'}>
                    <BookSimple data={Book.list} />
                </BookTitleBox>
            </div>
            <div className='container-right'>
                <BookTitleBox title={'热门标签'}>
                    <TagList data={Book.tags} />
                </BookTitleBox>
                <BookTitleBox title={'畅销图书榜'}>
                    <BookSmall data={Book.list} />
                </BookTitleBox>
            </div>
        </div>
    );
})

export default App;
