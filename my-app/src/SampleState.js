import React, {Component} from 'react'

export default class SampleState extends Component {
    constructor(){
        super()
        this.state = {
            message: "Hello",
            number: 0
        }
    }
    change=()=>{
        this.setState(
            {
               message: "Hello APSSDC"
            }
        )
    }

    inc=()=>{
        this.setState(
            {
               number: this.state.number+1
            }
        )
    }

    dec=()=>{
        this.setState(
            {
               number: this.state.number-1
            }
        )
    }

    render(){
        return (
            <div>
                <h1>Status { this.state.message }</h1>
                <button onClick={ ()=>this.change() }>Click Me!</button>
                <br/><br />
                <h1>Number { this.state.number }</h1>
                <button onClick={ ()=>this.inc() }>inc+1</button>
                &nbsp;
                <button onClick={ ()=>this.dec() }>dec-1</button>
            </div>
        )
    }
}