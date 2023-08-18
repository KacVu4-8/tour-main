// import React, { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import { Layout, Row, Col, Form, Input, Button, Typography } from 'antd';
// import axios from 'axios';

// import Footer from '../Footer';
// import logo from '../images/login-1.png';
// import user_1 from '../images/user-1.png';
// import './Login.css';

// const { Content } = Layout;
// const { Title } = Typography;

// function AppLogin() {
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const navigate = useNavigate();

//     const isAdmin = () => {
//         const username = localStorage.getItem('username');
//         return username === 'admin';
//     };

//     const handleSubmit = async () => {
//         try {
//             const response = await axios.post('http://localhost:4000/api/v1/auth/login', {
//                 email,
//                 password,
//             });

//             const { token, data } = response.data;

//             localStorage.setItem('token', token);
//             localStorage.setItem('username', data.username);

//             if (isAdmin()) {
//                 alert('Admin đăng nhập thành công!');
//             } else {
//                 alert('Đăng nhập thành công. Chào mừng ' + data.username + '!');
//             }
//             navigate('/');
//         } catch (error) {
//             alert('Đăng nhập thất bại: ' + error.message);
//         }
//     };

//     return (
//         <Layout>
//             {/* <AppHeader /> */}
//             <Content>
//                 <Row justify="center" align="middle" style={{ minHeight: '100vh' }}>
//                     <Col span={12}>
//                         <div className="login_container d-flex">
//                             <div className="login__img">
//                                 <img src={logo} alt="" />
//                             </div>
//                             <div className="login_form" style={{ background: '#faa935', position: 'relative' }}>
//                                 <div className="user">
//                                     <img src={user_1} alt="" />
//                                 </div>
//                                 <Title level={2}>Login</Title>
//                                 <Form onFinish={handleSubmit}>
//                                     <Form.Item
//                                         className="mt-4 mb-4"
//                                         name="email"
//                                         rules={[{ required: true, message: 'Please input your email!' }]}
//                                     >
//                                         <Input
//                                             type="email"
//                                             placeholder="Email"
//                                             value={email}
//                                             onChange={(e) => setEmail(e.target.value)}
//                                         />
//                                     </Form.Item>
//                                     <Form.Item
//                                         className="mb-4"
//                                         name="password"
//                                         rules={[{ required: true, message: 'Please input your password!' }]}
//                                     >
//                                         <Input.Password
//                                             placeholder="Password"
//                                             value={password}
//                                             onChange={(e) => setPassword(e.target.value)}
//                                         />
//                                     </Form.Item>
//                                     <Form.Item>
//                                         <Button className="btn btn_login w-100" type="primary" htmlType="submit">
//                                             Login
//                                         </Button>
//                                     </Form.Item>
//                                 </Form>
//                                 <p>
//                                     Don't have an account?
//                                     <Link to="/register">Create</Link>
//                                 </p>
//                             </div>
//                         </div>
//                     </Col>
//                 </Row>
//             </Content>
//             <Footer />
//         </Layout>
//     );
// }

// export default AppLogin;


import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Layout, Row, Col, Form, Input, Button, Typography } from 'antd';
import axios from 'axios';
import Cookies from 'js-cookie';

import Footer from '../Footer';
import logo from '../images/login-1.png';
import user_1 from '../images/user-1.png';
import './Login.css';

const { Content } = Layout;
const { Title } = Typography;

function AppLogin() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const isAdmin = () => {
        const username = Cookies.get('username');
        return username === 'admin';
    };

    const handleSubmit = async (e) => { // Thêm tham số e vào hàm handleSubmit
        e.preventDefault(); // Ngăn chặn hành vi mặc định của form
        try {
            const response = await axios.post('http://localhost:4000/api/v1/auth/login', {
                email,
                password,
            });

            const { token, data } = response.data;

            Cookies.set('access_token', token, { expires: 7 });
            Cookies.set('username', data.username, { expires: 7 });

            if (isAdmin()) {
                alert('Admin đăng nhập thành công!');
            } else {
                alert('Đăng nhập thành công. Chào mừng ' + data.username + '!');
            }
            navigate('/');
        } catch (error) {
            alert('Đăng nhập thất bại: ' + error.message);
        }
    };

    return (
        <Layout>
            <Content>
                <Row justify="center" align="middle" style={{ minHeight: '100vh' }}>
                    <Col span={12}>
                        <div className="login_container d-flex">
                            <div className="login__img">
                                <img src={logo} alt="" />
                            </div>
                            <div className="login_form" style={{ background: '#faa935', position: 'relative' }}>
                                <div className="user">
                                    <img src={user_1} alt="" />
                                </div>
                                <Title level={2}>Login</Title>
                                <form onSubmit={handleSubmit}> {/* Thay thế <Form onFinish={handleSubmit}> bằng <form onSubmit={handleSubmit}> */}
                                    <div className="mt-4 mb-4">
                                        <Input
                                            type="email"
                                            placeholder="Email"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                        />
                                    </div>
                                    <div className="mb-4">
                                        <Input.Password
                                            placeholder="Password"
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                        />
                                    </div>
                                    <div>
                                        <Button className="btn btn_login w-100" type="primary" htmlType="submit">
                                            Login
                                        </Button>
                                    </div>
                                </form>
                                <p>
                                    Don't have an account?
                                    <Link to="/register">Create</Link>
                                </p>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Content>
            <Footer />
        </Layout>
    );
}

export default AppLogin;
