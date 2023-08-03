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
                            {/* Hiển thị tên người đăng nhập nếu có */}
                            {username ? (
                                <div className="d-flex align-items-center ">
                                    <p className="m-0" style={{fontSize:"18px", fontWeight:"500"}}>{username}</p>
                                    <button className="btn btn-warning text-white" onClick={handleLogout}>
                                        Logout
                                    </button>
                                </div>
                            ) : (
                                <>
                                    <Link to="/login" className="btn " type="button">
                                        {' '}
                                        Login
                                    </Link>
                                    <Link to="/register" className="btn btn-warning text-white" type="button">
                                        Register
                                    </Link>
                                </>
                            )}
                            <Button className="menu-mobile" onClick={handleDrawerOpen}>
                                <FontAwesomeIcon icon={faBars} />{' '}
                            </Button>{' '}
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
