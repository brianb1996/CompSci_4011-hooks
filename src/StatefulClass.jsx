import React from 'react'

export default class StatefulClass extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            timesClicked: 0,
            text: 'hello, world'
        }

        this.addOne = this.addOne.bind(this)
        this.reset = this.reset.bind(this)
        this.updateText = this.updateText.bind(this)
    }

    addOne(event){
        this.setState({
            timesClicked: this.state.timesClicked + 1
        })
    }

    reset(event){
        this.setState({
            timesClicked: 0,
            text: 'hello, world'
        })
    }

    updateText(event){
        this.setState({
            text: event.target.value
        })
    }

    render(){
        return(
            <div>
                Button was clicked {this.state.timesClicked} times
                <br/>
                <button onClick={this.addOne}>Click Me</button>
                <button onClick={this.reset}>Reset</button>
                <br/>
                <input value={this.state.text} onChange={this.updateText} />
            </div>
        )
    }

}