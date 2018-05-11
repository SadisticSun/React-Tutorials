import React from 'react'

 export const UserOutput = props => {
    return (
        <div>
            <h3>Hi! Welcome {props.username}</h3>
            <p>Your text will show below this paragraph.</p>
            <p>{props.value}</p>
        </div>
      )
}

