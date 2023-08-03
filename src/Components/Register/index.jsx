// import { Link } from 'react-router-dom';
// import { Button, Form, Input } from 'antd';
// import AppHeader from '../Header';
// import Footer from '../Footer';
// import FormItem from 'antd/es/form/FormItem';
// import logo from '../images/login-1.png';
// import user_1 from '../images/user-1.png';
// import '../Login/Login.css';

// function AppRegister() {
//     return (
//         <div>
//             <AppHeader />
//             <section>
//                 <div className="container">
//                     <div className="row d-flex">
//                         <div className="m-auto col-lg-8">
//                             <div className="login_container d-flex justify-content-between">
//                                 <div className="login__img col-sm-6">
//                                     <img src={logo} alt="" />
//                                 </div>
//                                 <div
//                                     className="login_form col-sm-6"
//                                     style={{ background: '#faa935', position: 'relative' }}
//                                 >
//                                     <div className="user">
//                                         <img src={user_1} alt="" />
//                                     </div>
//                                     <h2>Register</h2>
//                                     <Form>
//                                         <FormItem
//                                             className="input_email"
//                                             name="fullname"
//                                             rules={[
//                                                 {
//                                                     required: true,
//                                                     message: 'Hãy nhập tên của bạn',
//                                                 },
//                                                 { whitespace: true, message: 'Hãy nhập tên của bạn' },
//                                                 { min: 3, message: 'Nhập ít nhất 3 kí tự' },
//                                             ]}
//                                             hasFeedback
//                                         >
//                                             <Input placeholder="Username" />
//                                         </FormItem>
//                                         <FormItem
//                                             className="input_email"
//                                             name="email"
//                                             rules={[
//                                                 {
//                                                     required: true,
//                                                     message: 'Hãy nhập email của bạn',
//                                                 },
//                                                 { type: 'email', message: 'Hãy nhập đúng email của bạn' },
//                                             ]}
//                                             hasFeedback
//                                         >
//                                             <Input placeholder="Email" />
//                                         </FormItem>
//                                         <Form.Item
//                                             className="input_email"
//                                             name="password"
//                                             rules={[
//                                                 {
//                                                     required: true,
//                                                     message: 'Hãy nhập mật khẩu của bạn',
//                                                 },
//                                                 { min: 6, message: 'Mật khẩu ít nhất 6 kí tự' },
//                                             ]}
//                                             hasFeedback
//                                         >
//                                             <Input.Password placeholder="Password" />
//                                         </Form.Item>
//                                         <Form.Item wrapperCol={{ span: 24 }}>
//                                             <Button block className="btn btn_login " htmlType="submit">
//                                                 Register
//                                             </Button>
//                                         </Form.Item>
//                                     </Form>
//                                     <p>
//                                         Already have an account?
//                                         <Link to="/login">Login</Link>
//                                     </p>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </section>
//             <Footer />
//         </div>
//     );
// }
// export default AppRegister;

import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AppHeader from '../Header';
import Footer from '../Footer';
import logo from '../images/login-1.png';
import user_1 from '../images/user-1.png';
import '../Login/Login.css';
import axios from 'axios';

function AppRegister() {
    const [formData, setFormData] = useState({
        fullname: '',
        email: '',
        password: '',
    });

    const navigate = useNavigate();

    const [responseMessage, setResponseMessage] = useState('');

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:4000/api/v1/auth/register', formData);
            if (response.data.success) {
                setResponseMessage('Đăng ký thành công!');
                navigate('/login')
            } else {
                setResponseMessage('Đăng ký thất bại. Vui lòng thử lại sau.');
            }
        } catch (error) {
            setResponseMessage('Đăng ký thất bại. Vui lòng thử lại sau.');
            console.error(error);
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
                                    <h2>Register</h2>
                                    <form onSubmit={handleSubmit} className="form__container">
                                        {/* <label htmlFor="username">Tên người dùng:</label> */}
                                        <input
                                            className="input_email"
                                            type="text"
                                            id="username"
                                            name="username"
                                            placeholder="Username"
                                            value={formData.username}
                                            onChange={handleChange}
                                            required
                                            hasFeedback
                                        />
                                        <br />
                                        {/* <label htmlFor="email">Email:</label> */}
                                        <input
                                            className="input_email mt-4 mb-4"
                                            type="email"
                                            id="email"
                                            placeholder="Email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                            hasFeedback

                                        />
                                        <br />
                                        {/* <label htmlFor="password">Mật khẩu:</label> */}
                                        <input
                                            className="input_email"
                                            type="password"
                                            id="password"
                                            placeholder="password"
                                            name="password"
                                            value={formData.password}
                                            onChange={handleChange}
                                            required
                                        />
                                        <br />
                                        <button className="btn btn_login mt-3 w-100" type="submit">Đăng ký</button>
                                    </form>
                                    {responseMessage && <div>{responseMessage}</div>}
                                    <p>
                                        Already have an account?
                                        <Link to="/login">Login</Link>
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

export default AppRegister;


// import React, { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import AppHeader from '../Header';
// import Footer from '../Footer';
// import logo from '../images/login-1.png';
// import user_1 from '../images/user-1.png';
// import '../Login/Login.css';
// import axios from 'axios';

// function AppRegister() {
//     const [formData, setFormData] = useState({
//         fullname: '',
//         email: '',
//         password: '',
//     });

//     const navigate = useNavigate();

//     const [responseMessage, setResponseMessage] = useState('');

//     const handleChange = (e) => {
//         setFormData({ ...formData, [e.target.name]: e.target.value });
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         try {
//             const response = await axios.post('http://localhost:4000/api/v1/auth/register', formData);
//             if (response.data.success) {
//                 setResponseMessage('Đăng ký thành công!');
//                 navigate('/login');
//             } else {
//                 setResponseMessage('Đăng ký thất bại. Vui lòng thử lại sau.');
//             }
//         } catch (error) {
//             setResponseMessage('Đăng ký thất bại. Vui lòng thử lại sau.');
//             console.error(error);
//         }
//     };

//     return (
//         <div>
//             <AppHeader />
//             <section>
//                 <div className="container">
//                     <div className="row d-flex">
//                         <div className="m-auto col-lg-8">
//                             <div className="login_container d-flex justify-content-between">
//                                 <div className="login__img col-sm-6">
//                                     <img src={logo} alt="" />
//                                 </div>
//                                 <div
//                                     className="login_form col-sm-6"
//                                     style={{ background: '#faa935', position: 'relative' }}
//                                 >
//                                     <div className="user">
//                                         <img src={user_1} alt="" />
//                                     </div>
//                                     <h2>Register</h2>
//                                     <form onSubmit={handleSubmit} className="form__container">
//                                         <input
//                                             className="input_email"
//                                             type="text"
//                                             id="fullname" // Corrected from "username" to "fullname"
//                                             name="fullname" // Corrected from "username" to "fullname"
//                                             placeholder="Full Name" // Corrected from "Username" to "Full Name"
//                                             value={formData.fullname} // Corrected from "formData.username" to "formData.fullname"
//                                             onChange={handleChange}
//                                             required
//                                             hasFeedback
//                                         />
//                                         <br />
//                                         <input
//                                             className="input_email mt-4 mb-4"
//                                             type="email"
//                                             id="email"
//                                             placeholder="Email"
//                                             name="email"
//                                             value={formData.email}
//                                             onChange={handleChange}
//                                             required
//                                             hasFeedback
//                                         />
//                                         <br />
//                                         <input
//                                             className="input_email"
//                                             type="password"
//                                             id="password"
//                                             placeholder="Password"
//                                             name="password"
//                                             value={formData.password}
//                                             onChange={handleChange}
//                                             required
//                                         />
//                                         <br />
//                                         <button className="btn btn_login mt-3 w-100" type="submit">
//                                             Đăng ký
//                                         </button>
//                                     </form>
//                                     {responseMessage && <div>{responseMessage}</div>}
//                                     <p>
//                                         Already have an account?
//                                         <Link to="/login">Login</Link>
//                                     </p>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </section>
//             <Footer />
//         </div>
//     );
// }

// export default AppRegister;
