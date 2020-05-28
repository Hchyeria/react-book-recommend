import React from 'react'
import { useEffect, useState } from 'react'
import {
    observer
} from 'mobx-react'
import './index.styl'
import Card from '../../components/Card/index'
import Item from '../../stores/item'
import { get } from '../../utils/request'
import PageLoading from '../../components/loading/index'
import appState from '../../stores/appState.js'
import { getBook } from '../../apis/book/list'


const convertList = (list) => {
    let len = list.length
    let temp = [[], [], []]
    for (let i = 0; i < len; ++i) {
        temp[i % 3].push(list[i])
    }
    return temp
}

const Shop = observer((props) => {
    const { isLoading } = appState
    // const [list] = useState(Item.list)
    const [itemList] = useState(convertList(Item.list))

    const params = {
        page: 1,
        size: 10,
    }

    useEffect(() => {
        appState.setLoading(true)
        const fetchData = async () => {
            await getBook(params, Item.setList)
            appState.setLoading(false)
        }
        fetchData()
    }, [])

    return (
        <div className="Shop">
            {
                Item.list && Item.list.length > 0
                    ? (
                        <>
                            <div className="card-one">
                                {
                                    itemList[0].length && itemList[0].map(({ id, ...rest }) => (
                                        <Card key={id} id={id} {...rest} />
                                    ))
                                }
                            </div>
                            <div className="card-one">
                                {
                                    itemList[1].length && itemList[1].map(({ id, ...rest }) => (
                                        <Card key={id} id={id} {...rest} />
                                    ))
                                }
                            </div>
                            <div className="card-one">
                                {
                                    itemList[2].length && itemList[2].map(({ id, ...rest }) => (
                                        <Card key={id} id={id} {...rest} />
                                    ))
                                }
                            </div>
                        </>
                    )
                    : <PageLoading />
            }
        </div>
    );
})

export default Shop;
