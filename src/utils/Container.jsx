import { cloneElement } from 'react'
import React from 'react'
import Loading from '../components/loading'


export default ({ children, isLoading = false, renderer = <div />, style, ...props }) => {

    if (isLoading) {
        return <Loading />
    }

    const newElement = cloneElement(renderer, {
        style: Object.assign({}, renderer.props.style, style),
        ...props,
        children
    })
    return newElement
}