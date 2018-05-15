import React from 'react';

export const Character = (props) => {
    const charStyles = {
        display: 'inline-block',
        padding: '1em',
        textAlign: 'center',
        margin: '1em',
        border: '1px solid black'
    }

    return (
        <div style={charStyles} onClick={props.clicked}>
            {props.value}
        </div>
    )
}