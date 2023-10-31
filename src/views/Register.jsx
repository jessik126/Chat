import React from "react";
import './Register.css'

const Register = props => (
    <div className="Register">
        <div className="Title">
            <h1>
                Cadastro
            </h1>
        </div>
        <div className="Form">
            <h3>Nome</h3>
            <input type="text" placeholder=" nome"/>
            <br />
        </div>
        <div className="Footer">
            <button>Entrar</button>
        </div>
    </div>
)

export default Register