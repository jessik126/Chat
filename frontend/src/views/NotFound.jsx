import React from "react";
import './NotFound.css'

const NotFound = props => (
    <div className="NotFound">
        <div className="Title">
            <h1>404</h1>
        </div>
        <div className="Content">
            <p>Ops... página não encontrada.</p>
            <p>Verifique a URL digitada e tente novamente.</p>
        </div>
    </div>
)

export default NotFound