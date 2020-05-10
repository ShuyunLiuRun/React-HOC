import React from 'react'

const Expandable = ComposedComponent =>
    class Expandable extends React.Component{
        constructor(props){
            super(props)
            //collapsed在props hidden真时真
            const collapsed =
                (props.hidden === true) ?
                    true : false
                //this.state = false 折叠这个state
                //这个组件的state是否被折叠,由被传进来的ShowHiddenMessage的props的hidden来决定
                this.state = {collapsed}
                this.expandCollapse = this.expandCollapse.bind(this)
        }

        expandCollapse(){
            //当调用这个方法时,state状态反转
            //一旦触发会使用新的state更新ShoeHiddenMessage
            let collapsed = !this.state.collapsed
            //只有调用这个方法,才能setstate改变组件状态
            this.setState({collapsed})
        }

        render(){
            return <ComposedComponent   
                        //把这个方法当作props传给子组件
                        expandCollapse={this.expandCollapse}
                        {...this.state}
                        {...this.props} />
        }
    }

    export default Expandable