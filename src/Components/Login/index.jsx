import AppHeader from '../Header';
import Footer from '../Footer';
import { Link } from 'react-router-dom';
import { Button, Form, Input } from 'antd';
import FormItem from 'antd/es/form/FormItem';

import logo from '../images/login-1.png';
import user_1 from '../images/user-1.png';

import './Login.css'

function AppLogin() {
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
                                        <img src={user_1} alt=""     />
                                    </div>
                                    <h2>Login</h2>
                                    <Form>
                                        <FormItem
                                            className="input_email"
                                            name="email"
                                            rules={[
                                                {
                                                    required: true,
                                                    message: 'Hãy nhập email của bạn',
                                                },
                                                { type: 'email', message: 'Hãy nhập đúng email của bạn' },
                                            ]}
                                            hasFeedback
                                        >
                                            <Input placeholder="Email" />
                                        </FormItem>
                                        <Form.Item
                                            className="input_email"
                                            name="password"
                                            rules={[
                                                {
                                                    required: true,
                                                    message: 'Hãy nhập mật khẩu của bạn',
                                                },
                                                { min: 6, message: 'Mật khẩu ít nhất 6 kí tự' },
                                            ]}
                                            hasFeedback
                                        >
                                            <Input.Password placeholder="Password" />
                                        </Form.Item>
                                        <Form.Item wrapperCol={{ span: 24 }}>
                                            <Button block className="btn btn_login " htmlType="submit">
                                                Login
                                            </Button>
                                        </Form.Item>
                                    </Form>

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
