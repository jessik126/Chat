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
            <Message Name="João" Message="Oiaheuhaiuheauiheaiuheuai eauiheaiuhea iheaiuheiuhae iuheauiehiuae iuaheuiaheu iuehauiheiauhe heuaiheiuaheihea ieauiehaiu" />
            <Message Name="João" Message="Oiaheuhaiuheauiheaiuheuai eauiheaiuhea iheaiuheiuhae iuheauiehiuae iuaheuiaheu iuehauiheiauhe heuaiheiuaheihea ieauiehaiu" />
            <Message Name="João" Message="Oiaheuhaiuheauiheaiuheuai eauiheaiuhea iheaiuheiuhae iuheauiehiuae iuaheuiaheu iuehauiheiauhe heuaiheiuaheihea ieauiehaiu" />
            <Message Name="João" Message="Oiaheuhaiuheauiheaiuheuai eauiheaiuhea iheaiuheiuhae iuheauiehiuae iuaheuiaheu iuehauiheiauhe heuaiheiuaheihea ieauiehaiu" />
            <Message Name="Maria" Message="Oie" />
            <Message Name="Ana" Message="Olá" />
            <Message Name="João" Message="Oi" />
            <Message Name="Maria" Message="Oie" />
            <Message Name="Ana" Message="Olá" />
        </div>
        <div className="Footer">
            <input type="text" placeholder=" mensagem" />
            <button>Enviar</button>
        </div>


    </div>
)

export default Chat;