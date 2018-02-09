import React from 'react'

const person = (props) => {
    return (
        <div className="person">
            <h3>{props.name}</h3>
            <p>{props.age} ans</p>
            <button onClick={props.remove}>Remove</button>
        </div>
    )
}

export default person;