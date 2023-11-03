import React from "react";
import {Routes, Route} from 'react-router-dom'
import Register from "./Register";
import Chat from "./Chat";
import NotFound from "./NotFound";


const Content = props => (
    <main className="Content">
        <Routes>
            <Route path="/chat" element={<Chat/>}/>
            <Route path="/" element={<Register/>}/>
            <Route path="*" element={<NotFound/>}/>
        </Routes>
    </main>
)

export default Content