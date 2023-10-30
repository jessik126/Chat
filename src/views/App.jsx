import './App.css';
import React from "react";
import { BrowserRouter } from 'react-router-dom';

const App = props => (
    <div className="App">
        <div className='Logo'>
            <a href="https://munai.com.br/">
                <img src="https://munai.com.br/wp-content/uploads/2023/06/logo-munai-gestao-de-pacientes-150x35.png"
                    alt="Munai | Gestão de Pacientes" />
            </a>
        </div>

        <BrowserRouter>
            {/* pages */}
        </BrowserRouter>
    </div>
)

export default App