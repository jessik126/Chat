import React from "react";
import './Chat.css'
import Message from "../components/Message";

const Chat = props => (
    <div className="Chat">
        <div className="Title">
            <h1>Broadcast</h1>
            <button>Sair</button>
        </div>
        <div className="Messages">
        </div>
        <div className="Footer">
            <input type="text" placeholder=" mensagem" />
            <button>Enviar</button>
        </div>


    </div>
)

export default Chat;