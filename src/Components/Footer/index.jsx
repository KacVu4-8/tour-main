import './Footer.css';
import logo from '../images/logo-header.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faYoutube, faGithub, faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faLocationDot, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';

// import Link from 'antd/es/typography/Link';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <footer>
            <div className="container">
                <div className="row">
                    <div className="col-lg-3">
                        <div className="footer-logo">
                            <img href="/" src={logo} alt="" />
                            <p >Vu we love you so muchhhhhhhhhhhhhhh</p>
                        </div>
                        <div className="footer-logo d-flex align-items-center gap-4">
                            <span>
                                <a href="/" className="">
                                    <FontAwesomeIcon icon={faYoutube} />
                                </a>
                            </span>
                            <span>
                                <a href="/" className="">
                                    <FontAwesomeIcon icon={faGithub} />
                                </a>
                            </span>
                            <span>
                                <a href="/" className="">
                                    <FontAwesomeIcon icon={faFacebook} />
                                </a>
                            </span>
                            <span>
                                <a href="/" className="">
                                    <FontAwesomeIcon icon={faInstagram} />
                                </a>
                            </span>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <h5 className="footer_link">Discover</h5>
                        <div className="footer_list list-group">
                            <Link to="/">Home</Link>
                            <Link to="/about">About</Link>
                            <Link to="/tours">Tours</Link>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <h5 className="footer_link">Quick Links</h5>
                        <div className="footer_list list-group">
                            <Link to="/">Gallery</Link>
                            <Link to="/login">Login</Link>
                            <Link to="/register">Register</Link>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <h5 className="footer_link">Conctact</h5>
                        <div className="footer_list list-group">
                            <Link to="/" className="ps-0 border-0 d-flex align-items-center gap-3 list-group-item">
                                <h6 className="mb-0 d-flex align-items-center gap-2 footer-item">
                                    <span>
                                        <FontAwesomeIcon className="icon" icon={faLocationDot} />
                                    </span>
                                    Address:
                                </h6>
                                <p>Vu</p>
                            </Link>
                            <Link to="/" className="ps-0 border-0 d-flex align-items-center gap-3 list-group-item">
                                <h6 className="mb-0 d-flex align-items-center gap-2 footer-item">
                                    <span>
                                        <FontAwesomeIcon className="icon" icon={faEnvelope} />
                                    </span>
                                    Email:
                                </h6>
                                <p>hihi@gmail.com</p>
                            </Link>
                            <Link to="/" className="ps-0 border-0 d-flex align-items-center gap-3 list-group-item">
                                <h6 className="mb-0 d-flex align-items-center gap-2 footer-item">
                                    <span>
                                        <FontAwesomeIcon className="icon" icon={faPhone} />
                                    </span>
                                    Phone:
                                </h6>
                                <p>0987876577</p>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
