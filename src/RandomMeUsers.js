/**
 * 在组件之间复用这种加载功能。创建一个高阶函数DataComponent，用来在创建React组件时加载数据。
 * 为了使用DataComponent组件，我们剥离了PeopleList的state，创建了一个通过props接收数据的无状态组件。
 */
import {render} from 'react-dom'
import React from 'react'
import DataComponent from './DataComponent'

const PeopleList = ({data}) =>
<ol className="people-list">
    {data.map((person,i) => {
        const {first,last} =person.name 
    return <li key={i}>{first} {last}</li>
    })}
</ol>

const RandomMeUsers = DataComponent(
                        PeopleList,
                        "https://randomuser.me/api/"
)

render(
    <RandomMeUsers count={10} />,
    document.getElementById('people-list')
)