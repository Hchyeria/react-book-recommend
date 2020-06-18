import React from 'react'
import { useEffect, useState } from 'react'
import {
    observer
} from 'mobx-react'
import './index.styl'

import BookTitleBox from '../../components/bookTitleBox'
import BookDetail from '../../components/bookDetail'
import BookSimple from '../../components/bookSimple'
import RecommendTagList from '../../components/recommendTagList'
import BookSmall from '../../components/bookSmall'
import Container from '../../utils/Container'
import appState from '../../stores/appState.js'
import getUserRecommend from '../../apis/recommend/user.js'
import getUserRecommendTag from'../../apis/recommend/userTag.js'
import Book from '../../stores/book'

const Recommend = observer((props) => {

    const { isLoading } = appState

    const params = {
        page: 1,
        size: 10,
        userID: appState.user['userId']
    }

    const params1 = {
        userID: appState.user['userId']
    }

    useEffect(() => {
        appState.setLoading(true)
        const fetchData = async () => {
            Promise.all([
                getUserRecommend(params, Book.setLike),
                getUserRecommendTag(params1, Book.setRecommendTags)
            ]).then(() => {
                appState.setLoading(false)
            })
        }
        fetchData() 
    }, [])

    return (
        <Container className="BookGuess" isLoading={isLoading}>
            <div className='guess-container-left'>
                <BookTitleBox title={'猜你可能感兴趣的标签'}>
                    <RecommendTagList data={Book.recommendTags} />
                    <p> </p>
                    {/* <BookSimple data={Book.list} /> */}
                </BookTitleBox>
                
                <BookTitleBox title={'猜你可能感兴趣的图书'}>
                    <BookSimple data={Book.like} />
                </BookTitleBox>
                
            </div>
            <div className='guess-container-right'>
                <div className='guess-intro'>
                    <h2>什么是小葵花猜  · · · · · ·</h2>
                    <p>这是小葵花给你的个人推荐。
                    通过每天分析你的读过、想读、在读、评价行为，小葵花会从海量数据里挑选你会感兴趣的内容给你。
                    你用得越多，小葵花猜得就越准确。</p>
                </div>
            </div>

        </Container>
    );
})

export default Recommend;