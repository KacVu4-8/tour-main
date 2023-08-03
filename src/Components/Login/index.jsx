import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

import AppHeader from '../Header';
import Footer from '../Footer';
import logo from '../images/login-1.png';
import user_1 from '../images/user-1.png';
import './Login.css';

function AppLogin() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate(); 

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:4000/api/v1/auth/login', {
                email,
                password,
            });

            const { token, data } = response.data;

            // Lưu token vào localStorage hoặc Redux store
            localStorage.setItem('token', token);
            localStorage.setItem('username', data.username);

            // Đăng nhập thành công, bạn có thể thực hiện các tác vụ sau khi đăng nhập ở đây

            alert('Đăng nhập thành công. Chào mừng ' + data.username + '!');
            navigate('/')
        } catch (error) {
            alert('Đăng nhập thất bại: ' + error.message);
        }
    };

    return (
        <div>
            <AppHeader />
            <section>
                <div className="container">
                    <div className="row d-flex">
                        <div className="m-auto col-lg-8">
                            <div className="login_container d-flex justify-content-between">
                                <div className="login__img col-sm-6">
                                    <img src={logo} alt="" />
                                </div>
                                <div
                                    className="login_form col-sm-6"
                                    style={{ background: '#faa935', position: 'relative' }}
                                >
                                    <div className="user">
                                        <img src={user_1} alt="" />
                                    </div>
                                    <h2>Login</h2>
                                    <form onSubmit={handleSubmit}>
                                        <input
                                            className="input_email mt-4 mb-4"
                                            type="email"
                                            id="email"
                                            placeholder="Email"
                                            name="email"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            required
                                            hasFeedback
                                        />
                                        <br />
                                        <input
                                            className="input_email mb-4"
                                            type="password"
                                            id="password"
                                            placeholder="Password"
                                            name="password"
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                            required
                                        />
                                        <br />
                                        <button className="btn btn_login w-100" type="submit">
                                            Login
                                        </button>
                                    </form>
                                    <p>
                                        Don't have an account?
                                        <Link to="/register">Create</Link>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    );
}

export default AppLogin;
