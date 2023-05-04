import React from 'react'
import ReactDOM from 'react-dom'
import FunctionalComponent from './FunctionalComponent'
// import StatefulClass from './StatefulClass'

const AppContainer = () => {
    return(
        <div>
            <FunctionalComponent />
        </div>
    )
}

ReactDOM.render(<AppContainer />, document.querySelector('#root'))