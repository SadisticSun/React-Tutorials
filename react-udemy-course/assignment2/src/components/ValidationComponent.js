import React from 'react';

export const Validator = (props) => {
    let validationMessage = "Text is long enough!";

    if (props.textLength <= 5) {
        validationMessage = "Text too short"
    }

    return (
        <div><p>{validationMessage}</p></div>
    )
}