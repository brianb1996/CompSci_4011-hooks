import React, { useState } from 'react'

const FunctionalComponent = () => {
    const[timesClicked, setTimesClicked ] = useState(0)
    const[text, updateText] = useState('hello')
    //first parameter → variable that houses state
    //second parameter → function that updates state


    return(
        <div>
            Button was clicked {timesClicked} times
            <br/>
            <button onClick={() => setTimesClicked(timesClicked + 1)}>Click Me</button>
            <button onClick={() => setTimesClicked(0)}>Reset</button>
            <br/>
            <input value={text} onChange={event => updateText(event.target.value)} />
        </div>
    )
}

export default FunctionalComponent