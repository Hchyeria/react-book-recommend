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
import getUserRecommend from '../../apis/recommend/user.js'
import getHotRank from '../../apis/recommend/hotRank.js'
import BookSearch from '../../components/bookSearch'

const Search= observer((props) => {
    
    const { isLoading } = appState 

    const params = {
        page: 1,
        size: 10,
        userID: appState.user['userId']
    }


    useEffect(() => {
        appState.setLoading(true)
        // const fetchData = async () => {
        //     await getUserRecommend(params, Book.setLike)
        //     appState.setLoading(false)
        // }
        // fetchData() 
        appState.setLoading(false)
    }, [])

    return (
        <Container className="Search" isLoading={isLoading}>
            <div className='container-left'>
                <BookTitleBox title={'搜索到以下内容'}>
                    <BookSearch data={Book.like} />
                </BookTitleBox>
            </div>
            <div className='container-right'>
                <BookTitleBox title={'热门标签'}>
                    <TagList data={Book.tags} />
                </BookTitleBox>
                <BookTitleBox title={'畅销图书榜'}>
                    <BookSmall data={Book.top10} />
                </BookTitleBox>
            </div>

        </Container>
    );
})

export default Search;
