import React from 'react';
import { Avatar, Menu } from 'antd';
// Import the CSS file for Ant Design
import logo from './logo-header.png' // Import your logo image
import './Header.css';

const MyComponent = () => {
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="header">
                        <div className="header-logo col-lg-5">
                            <img src={logo} alt="" srcset="" />
                        </div>
                        <div className="header-menu col-lg-3">
                            <ul class="nav menu-list">
                                <li class="nav-item">
                                    <a class="nav-link" href="#">
                                        Home
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#">
                                        About
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#">
                                        Tours
                                    </a>
                                </li>
                            </ul>
                        </div>

                        <div className="header-login col-lg-3">
                            <a href="" className="btn " type="button">
                                {' '}
                                Login
                            </a>
                            <a href="" className="btn btn-warning text-white" type="button">
                                Register
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default MyComponent;
