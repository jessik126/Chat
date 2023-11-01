import React, { useState, useRef } from "react";
import './Chat.css'
import Message from "../components/Message";

import { Link, useLocation } from 'react-router-dom'
import messageData from "../data/messageData";

const Chat = props => {
    const location = useLocation();

    let [messages, setMessages] = useState(messageData);
    let [textMessage, setTextMessage] = useState("");

    function whenChangeTextMessage(e) {
        setTextMessage(e.target.value);
    }

    function sendMessage() {
        let id = messages.length + 1;
        let m = { id: id, name: location.state.name, text: textMessage };

        messages.push(m);
        setMessages(messages);
        setTextMessage("");

        scrollToBottom();
    }

    function getMessages() {
        return messages.map((m, i) => {
            return (
                <div key={i}>
                    <Message
                        id={m.id}
                        name={m.name}
                        message={m.text}
                    />
                </div>
            )
        })
    }

    const handleKeypress = e => {
        if (e.keyCode === 13) {
            sendMessage();
        }
    };

    const messagesEndRef = useRef(null)
    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({behavior: "smooth", block: "end", inline: "end"})
    }

    return (
        <div className="Chat">
            <div className="Title">
                <h1>Broadcast</h1>
                <button>
                    <Link to="/">Sair</Link>
                </button>
            </div>
            <div className="Messages">
                {getMessages()}
                <div ref={messagesEndRef}> </div>
            </div>
            <div className="Footer">
                <input type="text" placeholder="mensagem" value={textMessage} onChange={e => whenChangeTextMessage(e)}
                    onKeyDown={handleKeypress} />
                <button id="sendButton" onClick={() => sendMessage()}>Enviar</button>
            </div>
        </div>
    )
}

export default Chat;