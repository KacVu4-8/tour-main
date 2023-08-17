import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { Button, Drawer } from 'antd';
import logo from './logo-header.png';
import classNames from 'classnames';
import { ShoppingCartOutlined } from '@ant-design/icons';

import './Header.css';

const AppHeader = ({ cartCount }) => {
    const location = useLocation();

    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const handleLogout = () => {
        // Xóa thông tin người dùng khỏi localStorage khi đăng xuất
        localStorage.removeItem('token');
        localStorage.removeItem('username');

        // Chuyển hướng về trang đăng nhập sau khi đăng xuất
        window.location.href = '/'; // Hoặc navigate đến '/login' nếu đang sử dụng react-router-dom
    };

    const handleDrawerOpen = () => {
        setIsDrawerOpen(true);
    };

    const handleDrawerClose = () => {
        setIsDrawerOpen(false);
    };

    // Lấy thông tin người dùng từ localStorage
    const username = localStorage.getItem('username');

    return (
        <>
            <div className="container">
                <div className="row ">
                    <div className="header sticky_header">
                        <div className="header-logo col-lg-5">
                            <img src={logo} alt="" srcset="" />
                        </div>
                        <div className="header-menu col-lg-3">
                            <div className="menu-list">
                                <Link
                                    to="/"
                                    className={classNames({ active: location.pathname === '/' })}
                                    style={{ textDecoration: 'none' }}
                                >
                                    Home
                                </Link>
                                <Link
                                    to="/about"
                                    className={classNames({ active: location.pathname === '/about' })}
                                    style={{ textDecoration: 'none' }}
                                >
                                    About
                                </Link>
                                <Link
                                    to="/tours"
                                    className={classNames({ active: location.pathname === '/tours' })}
                                    style={{ textDecoration: 'none' }}
                                >
                                    Tours
                                </Link>
                            </div>
                        </div>
                        <div className="header-login col-lg-3">
                            {username ? (
                                <div className="d-flex align-items-center">
                                    <p className="m-0" style={{ fontSize: '18px', fontWeight: '500' }}>
                                        {username}
                                    </p>
                                    <button className="btn btn-warning text-white" onClick={handleLogout}>
                                        Logout
                                    </button>
                                    <Link to="/cart" className="icon_cart">
                                        <ShoppingCartOutlined />
                                        <span className="cart-notice">({cartCount})</span>
                                    </Link>
                                </div>
                            ) : (
                                <>
                                    <Link to="/login" className="btn " type="button">
                                        Login
                                    </Link>
                                    <Link to="/register" className="btn btn-warning text-white" type="button">
                                        Register
                                    </Link>
                                </>
                            )}
                            <Button className="menu-mobile" onClick={handleDrawerOpen}>
                                <FontAwesomeIcon icon={faBars} />{' '}
                            </Button>
                            <Drawer placement="right" onClose={handleDrawerClose} visible={isDrawerOpen}>
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
