import './Register.css'
import React, { useState } from "react";
import { Link } from 'react-router-dom'

const Register = props => {
    const [username, setUserName] = useState("")

    function whenChangeUserName(e) {
        setUserName(e.target.value);
    }

    return (
        <div className="Register">
            <div className="Title">
                <h1>Cadastro</h1>
            </div>
            <div className="Form">
                <h3>Nome</h3>
                <input type="text" placeholder="nome" value={username} onChange={whenChangeUserName}/>
                <br />
            </div>
            <div className="Footer">
                <button>
                    <Link to="/chat" state={{ name:username }}>Entrar</Link>
                </button>
            </div>
        </div>
    )
}

export default Register