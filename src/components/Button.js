import React from "react";
const Button = (props) => {
    const handleSubmit = () => {
        props.handleSubmitFromApp();
    }
    return (
        <button className="button" onClick={handleSubmit}>
            Make API Call Again
        </button>
    );
}

export default Button;