import React from 'react';


function Button() {
    const onClickMessage = () => {
        alert("This button does nothing.");
    };



    return (
        <button className="btn" onClick={onClickMessage}>Request Invite</button>
    )
}

export default Button;