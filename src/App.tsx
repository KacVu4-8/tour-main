import React from 'react';
// import AppHeader from './Components/Header';
// import GioiThieu from './Components/GioiThieu';
// import Offer from './Components/Offer';
// import Experience from './Components/Experience';
// import Gallery from './Components/Gallery';
// import Fans from './Components/Fans';
// import Letter from './Components/Letter';
// import Footer from './Components/Footer';
import './App.css';
import Home from './pages/home';
import AppAbout from './pages/about';
import Tours from './pages/tours';
import { Route, Routes } from 'react-router-dom';
import Login from './pages/login';
import Register from './pages/register';

function App() {
    return (
        <div className="App">
            {/* <Home /> */}
            {/* <AppAbout /> */}

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<AppAbout />} />
                <Route path="/tours" element={<Tours />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
            </Routes>
        </div>
    );
}

export default App;
