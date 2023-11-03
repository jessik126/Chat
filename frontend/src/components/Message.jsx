import React from "react";
import './Message.css'

const Message = props => (
    <div className="Message">
        <p><strong>{props.name}:</strong></p>
        <p>{props.message}</p>
        <br/>
    </div>
)

export default Message