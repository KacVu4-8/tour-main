import { Link } from 'react-router-dom';
import logo from './logo-header.png';
import Navbar from '../../router';

import './Header.css';

const AppHeader = () => {
    return (
        <>
            <div className="container ">
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
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AppHeader;
