// import { Link } from 'react-router-dom';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faBars } from '@fortawesome/free-solid-svg-icons';
// import { Button, Drawer } from 'antd';
// import { useRef, useState } from 'react';

// import logo from './logo-header.png';
// import Navbar from '../../router';
// import './Header.css';

// const AppHeader = () => {
//     const [isDrawerOpen, setIsDrawerOpen] = useState(false);

//     const handleDrawerOpen = () => {
//         setIsDrawerOpen(true);
//     };

//     const handleDrawerClose = () => {
//         setIsDrawerOpen(false);
//     };
//     return (
//         <>
//             <div className="container ">
//                 <div className="row">
//                     <div className="header">
//                         <div className="header-logo col-lg-5">
//                             <img src={logo} alt="" srcset="" />
//                         </div>
//                         <div className="header-menu col-lg-3">
//                             <div className="menu-list">
//                                 <Navbar />
//                             </div>
//                         </div>
//                         <div className="header-login col-lg-3">
//                             <Link to="/login" className="btn " type="button">
//                                 {' '}
//                                 Login
//                             </Link>
//                             <Link to="/register" className="btn btn-warning text-white" type="button">
//                                 Register
//                             </Link>

//                             <Button className="menu-mobile" data-bs-toggle="offcanvas" data-bs-target="#demo">
//                                 <FontAwesomeIcon icon={faBars} />
//                             </Button>

//                             <Drawer
//                                 title="Heading"
//                                 placement="right"
//                                 onClose={handleDrawerClose} // Sử dụng onClose để đóng Drawer khi bấm nút đóng
//                                 onClick={isDrawerOpen} // Trạng thái hiển thị của Drawer
//                             >
//                                 <div className="offcanvas-body">
//                                     <p>Some text lorem ipsum.</p>
//                                     <p>Some text lorem ipsum.</p>
//                                     <p>Some text lorem ipsum.</p>

//                                 </div>
//                             </Drawer>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </>
//     );
// };

// export default AppHeader;

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { Button, Drawer } from 'antd';
import logo from './logo-header.png';
import Navbar from '../../router';
import './Header.css';

const AppHeader = () => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    const handleDrawerOpen = () => {
        setIsDrawerOpen(true);
    };

    const handleDrawerClose = () => {
        setIsDrawerOpen(false);
    };

    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="header">
                        <div className="header-logo col-lg-5">
                            <img src={logo} alt="" srcset="" />
                        </div>
                        <div className="header-menu col-lg-3">
                            <div className="menu-list">
                                <Navbar />
                            </div>
                        </div>
                        <div className="header-login col-lg-3">
                            <Link to="/login" className="btn " type="button">
                                {' '}
                                Login
                            </Link>
                            <Link to="/register" className="btn btn-warning text-white" type="button">
                                Register
                            </Link>

                            <Button className="menu-mobile" onClick={handleDrawerOpen}>
                                <FontAwesomeIcon icon={faBars} />
                            </Button>

                            <Drawer
                                title="Heading"
                                placement="right"
                                onClose={handleDrawerClose}
                                visible={isDrawerOpen} // Trạng thái hiển thị của Drawer
                            >
                                <div className="offcanvas-body">
                                    <Link style={{ textDecoration: 'none' }} to="/">
                                        Home
                                    </Link>
                                    <Link style={{ textDecoration: 'none' }} to="/about">
                                        About
                                    </Link>
                                    <Link style={{ textDecoration: 'none' }} to="/tours">
                                        Tours
                                    </Link>
                                </div>
                            </Drawer>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AppHeader;


