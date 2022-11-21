import './App.scss';
import React from 'react';
import Header from "./components/Header";
import {HashRouter, Navigate, Route, Routes} from "react-router-dom";
import List from "./components/List";
import Item from "./components/Item";

function App() {
    return (
        <div className="wrapper">
            <HashRouter>
                <Header/>
                <Routes>
                    <Route path='/' element={<List/>}/>
                    <Route path='item/:id' element={<Item/>}/>
                    <Route path='*' element={<Navigate replace to='/' />}/>
                </Routes>
            </HashRouter>
        </div>
    );
}

export default App;
