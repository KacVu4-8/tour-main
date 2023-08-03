import React from 'react';
import './App.css';
import Home from './pages/home';
import AppAbout from './pages/about';
import Tours from './pages/tours';
import { Route, Routes } from 'react-router-dom';
import Login from './pages/login';
import Register from './pages/register';
import Detail from './pages/detail';
import Explore from './Components/Explore';
import Booking from './Components/Booking';

import {useState} from 'react' 

function App() {
    const [registeredUserData, setRegisteredUserData] = useState(null);
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<AppAbout />} />
                <Route path="/tours" element={<Tours />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/detail" element={<Detail />} />
                <Route path="/" element={<Explore />} />
                <Route path="/booking/:id" element={<Booking />} />
            </Routes>
        </div>
    );
}

export default App;
