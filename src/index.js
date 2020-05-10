import React from 'react';
import ReactDOM from 'react-dom';
//import PeopleList from './PeopleList'
import RandomMeUsers from './RandomMeUsers'
import CountryDropDown from './CountryDropDown'
import HiddenMessages from './HiddenMessages'
import PopupButton from './MenuButton'
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <HiddenMessages />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
