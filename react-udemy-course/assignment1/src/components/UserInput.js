import React from 'react'

 export const UserInput = props => {
    return (
        <div>
         <input placeholder={props.value} onChange={props.onChange} type="text" />
        </div>
      )
}

