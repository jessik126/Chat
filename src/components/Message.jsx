import React from "react";
import './Message.css'

const Message = props => (
    <div className="Message">
        <p><strong>{props.Name}:</strong></p>
        <p>{props.Message}</p>
        <br/>
    </div>
)

export default Message;