import React from 'react'

const input = (props) => {
    return (
        <input 
            className="input" 
            type={props.type} 
            placeholder={props.place}
            value={props.name}
            onChange={props.change}
        />
    )
}

export default input;