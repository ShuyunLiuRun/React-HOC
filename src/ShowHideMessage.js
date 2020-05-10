import React from 'react'
import Expandable from './Expandable'

const ShowHideMessage = ({children, collapsed, expandCollapse}) =>
    //点击这个p就会调用expandCollapse方法(即反转state状态)
    <p onClick={expandCollapse}>
        {(collapsed) ? 
            children.replace(/[a-zA-Z0-9]/g, "x") :
            children}
    </p>

export default ShowHideMessage

