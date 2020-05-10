import React from 'react'
import Expandable from './Expandable'
import {render} from 'react-dom'

class MenuButton extends React.Component{
    componentWillReceiveProps(nextProps){
         const collapsed = 
            (nextProps.collapsed && nextProps.collapsed === true) ?
                true : false
            this.setState({collapsed})
    }

     render(){
         const {children, collapsed, txt, expandCollapse} = this.props
         return(
             <div className="pop-button">
                 <button onClick={expandCollapse}>{txt}</button>
                 {(!collapsed) ?
                    <div className="pop-up">{children}</div> :
                    " "
                }
             </div>
         )
     }
}

const PopupButton = Expandable(MenuButton)

render(
    <PopupButton hidden={true} txt="toggle popup">
        <h1>Hidden Content</h1>
        <p>This content will start off hidden.</p>
    </PopupButton>,
    document.getElementById("menu-button")
)

