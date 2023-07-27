import React from "react";

const Welcome = (props) => {
    return (
        <h1>Hello, {props.firstName}! Your last name is {props.lastName}.</h1>
    )
}

export default Welcome;