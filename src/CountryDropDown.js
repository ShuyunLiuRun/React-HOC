import React from 'react'
import DataComponent from './DataComponent'
import { render } from 'react-dom'

const CountryNames = ({data, selected=""}) =>
    <select className="country-list" defaultValue={selected}>
        //为什么需要花括号括在name外
        //因为这是解构
        {data.map(({name},i) =>
            <option key={i} value={name}>{name}</option>
        )}
    </select>

const CountryDropDown = DataComponent (
        CountryNames,
        "https://restcountries.eu/rest/v1/all"
    )
console.log("render2")
render(
    <CountryDropDown selected="United States"/>,
    document.getElementById("country-drop-down")
)