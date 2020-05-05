import React from 'react'

/**
 * DataComponent实际上是一个函数。所有高阶组件都是函数。ComposedComponent是我们希望包装的组件。
 * 返回的类DataComponent，主要用于储存和管理State。当State发生变化并且数据载入完成。ComposedComponent
 * 会被渲染，并且上诉数据会作为属性传递给它。
 */
const DataComponent = (ComposedComponent, url) =>
    class DataComponent extends React.Component{
        constructor(props){
            
            super(props)
            this.state = {
                data:[],
                loading:false,
                loaded:false
            }
        }

        componentWillMount(){
            const {count} = this.props
            this.setState({loading:true})
            fetch(`${url}?results=${count}`)
                .then(response => response.json())
                .then(obj => obj.results)
                .then(data => this.setState({
                    loaded:true,
                    loading:false,
                    data
                    
                }))
            
        }

        render(){
            console.log(this.state)
            return(
                <div className="data-component">
                    {(this.state.loading) ?
                    <div>Loading...</div>:
                    <ComposedComponent {...this.state}/>}
                </div>
            )
        }
    }

    export default DataComponent