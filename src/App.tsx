import React from 'react';
import AppHeader from './Components/Header';
import GioiThieu from './Components/GioiThieu';
import Offer from './Components/Offer';
import Experience from './Components/Experience';
import Gallery from './Components/Gallery';
import Fans from './Components/Fans';
import Letter from './Components/Letter';
import Footer from './Components/Footer';
import './App.css';

function App() {
    return (
        <div className="App">
            <AppHeader />
            <GioiThieu />
            <Offer />
            <Experience />
            <Gallery />
            <Fans/>
            <Letter />
            <Footer/>
        </div>
    );
}

export default App;
