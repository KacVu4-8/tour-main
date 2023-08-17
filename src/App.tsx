// import React, { useState } from 'react';
// import './App.css';
// import { Route, Routes } from 'react-router-dom';
// import Home from './pages/home';
// import AppAbout from './pages/about';
// import Tours from './pages/tours';
// import Login from './pages/login';
// import Register from './pages/register';
// import Detail from './pages/detail';
// import Booking from './Components/Booking';
// import Cart from './pages/cart';
// import AppHeader from './Components/Header';

// const App = () => {
//     const [cartCount, setCartCount] = useState(0);

//     return (
//         <div className="App">
//             <AppHeader cartCount={cartCount} /> {/* Always render AppHeader */}
//             <Routes>
//                 <Route path="/" element={<Home />} />
//                 <Route path="/about" element={<AppAbout />} />
//                 <Route path="/tours" element={<Tours />} />
//                 <Route path="/login" element={<Login />} />
//                 <Route path="/register" element={<Register />} />
//                 <Route path="/detail" element={<Detail />} />
//                 <Route
//                     path="/booking/:id"
//                     element={<Booking updateCartCount={() => setCartCount(prevCount => prevCount + 1)} />}
//                 />
//                 <Route path="/cart" element={<Cart />} />
//             </Routes>
//         </div>
//     );
// }

// export default App;

import React, { useState } from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import AppAbout from './pages/about';
import Tours from './pages/tours';
import Login from './pages/login';
import Register from './pages/register';
import Detail from './pages/detail';
import Booking from './Components/Booking';
import Cart from './pages/cart';
import AppHeader from './Components/Header';

const App = () => {
    const [cartCount, setCartCount] = useState(0);

    return (
        <div className="App">
            <AppHeader cartCount={cartCount} /> {/* Always render AppHeader */}
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<AppAbout />} />
                <Route path="/tours" element={<Tours />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/detail" element={<Detail />} />
                <Route
                    path="/booking/:id"
                    element={<Booking updateCartCount={() => setCartCount((prevCount) => prevCount + 1)} />}
                />
                <Route path="/cart" element={<Cart updateCartCount={setCartCount} />} />
            </Routes>
        </div>
    );
};

export default App;
