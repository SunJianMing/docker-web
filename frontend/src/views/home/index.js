import React from 'react'
import axios from 'axios'
export default class App extends React.Component {
    constructor(options){
        super(options)
        this.state = {
            list:[]
        }
    }
    componentDidMount(){
        axios.get('/api/list').then(data=>{
            const {data:{data:list}} = data
            this.setState({list})

        })
    }
    render(){
        let {list} = this.state
    const ulItem = list.map((item,index)=><li key={index}>{item}</li>)
        return (
            <div>
                <h1>Hello React111</h1>
                <hr/>
                <h2>Docker</h2>
                <ul>
                    {ulItem}
                </ul>
            </div>
        )
    }
}