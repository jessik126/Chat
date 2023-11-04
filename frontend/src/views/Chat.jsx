import React, { useState, useRef, useEffect } from "react";
import './Chat.css'
import Message from "../components/Message";

import { Link, useLocation } from 'react-router-dom'
//import messageData from "../data/messageData";

const Chat = props => {
    let location = useLocation();

    const api = 'http://localhost:4000/';
    const apiMessage = api + 'messages/'
    const apiUser = api + 'users/'



    let [messages, setMessages] = useState([]);
    let [textMessage, setTextMessage] = useState("");

    useEffect(() => {
        fetch(apiMessage)
            .then(response => response.json())
            .then(messages => setMessages(messages));
    }, []);

    function whenChangeTextMessage(e) {
        setTextMessage(e.target.value);
    }

    function saveMessage() {
        fetch(apiMessage, {
            method: 'POST',
            body: JSON.stringify({
                userId: location.state?.userId ?? 1, //TODO: understand this error
                text: textMessage
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
    }

    function sendMessage() {
        let id = messages.length + 1;

        saveMessage();
        setTextMessage("");

        scrollToBottom();
    }

    function getMessages() {
        return messages.map((m, i) => {
            return (
                <div key={i}>
                    <Message
                        id={m.id}
                        name={m.user?.name}
                        message={m.text}
                        datetime={m.datetime}
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
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth", block: "end", inline: "end" })
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