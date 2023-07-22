import React from "react";

const Welcome = (props) => {
    return (
        <h1>Hello, {props.firstName}! Your last nane is {props.lastName}.</h1>
    )
}

export default Welcome;