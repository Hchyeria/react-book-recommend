import React, { useState, memo } from 'react'
import { List, Typography, Rate, Tooltip } from 'antd'

import { Link } from 'react-router-dom'
// import './index.styl'
import BookInfo from '../bookInfo'
import defaultUrl from '../../asserts/default.jpg'

import { Checkbox } from 'antd';



const { Paragraph, Text } = Typography

const Good = memo((props) => {

    const CheckboxGroup = Checkbox.Group;
    const plainOptions = ['Apple', 'Pear', 'Orange'];
    const defaultCheckedList = ['Apple', 'Orange'];

    // const [value, setValue] = useState(defaultValue)
    // const handleClick = () => {
    // 	const foo = () => {
    // 		setValue(!value)
    // 	}
    // 	upLoadWant && upLoadWant(value, foo)
    // }
    const { defaultValue = false } = props
    const state = {
        indeterminate: true,
        checkAll: false,
    }
    const [setState] = useState(state)
    const onChange = (checkedList) => {
        setState({
            checkedList,
            indeterminate: !!checkedList.length && checkedList.length < plainOptions.length,
            checkAll: checkedList.length === plainOptions.length,
        })
    };
    const onCheckAllChange = e => {
        setState({
            checkedList: e.target.checked ? plainOptions : [],
            indeterminate: false,
            checkAll: e.target.checked,
        })

    };

    return (
        <>
            <Checkbox
                indeterminate={state.indeterminate}
                onChange={onCheckAllChange}
                checked={state.checkAll}
            >
                Check all
            </Checkbox>
            <CheckboxGroup
                options={plainOptions}
                value={state.checkedList}
                onChange={onChange}
            />
        </>
    )
})

export default Good
