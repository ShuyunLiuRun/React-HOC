import React from 'react'
import DataComponent from './DataComponent'
import { render } from 'react-dom'

const CountryNames = ({data}) =>
    <select className="country-list">
        //为什么需要花括号括在name外
        {data.map(({name},i) =>
            <option key={i} value={name}>{name}</option>
        
           
        )}
    </select>

const CountryDropDown = DataComponent (
        CountryNames,
        "https://restcountries.eu/rest/v1/all"
    )

render(
    <CountryDropDown />,
    document.getElementById("country-drop-down")
)