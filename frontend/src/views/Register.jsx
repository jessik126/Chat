import './Register.css'
import React, { useState } from "react";
import { Link } from 'react-router-dom'

const Register = props => {
    const [username, setUserName] = useState("")
    const [userid, setUserId] = useState("")

    function whenChangeUserName(e) {
        setUserName(e.target.value);
    }

    
    const api = 'http://localhost:4000/';
    const apiMessage = api + 'messages/'
    const apiUser = api + 'users/'

    async function saveUser() {
        fetch(apiUser, {
            method: 'POST',
            body: JSON.stringify({
                name: username
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then((json) => setUserId(json.id));

    }

    return (
        <div className="Register">
            <div className="Title">
                <h1>Cadastro</h1>
            </div>
            <div className="Form">
                <h3>Nome</h3>
                <input type="text" placeholder="nome" value={username} onChange={whenChangeUserName} />
                <br />
            </div>
            <div className="Footer">
                <button onClick={saveUser}>
                    <Link to="/chat" state={{ name: username, id: userid }}>Entrar</Link>
                </button>
            </div>
        </div>
    )
}

export default Register