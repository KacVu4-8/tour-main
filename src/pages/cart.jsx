import React, { useState, useEffect } from 'react';
import { Table, Popconfirm } from 'antd';
import Footer from '../Components/Footer';
import { DeleteOutlined } from '@ant-design/icons';

const Cart = ({ updateCartCount }) => {
    // Thêm tham số updateCartCount
    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
        setCartItems(storedCart);
    }, []);

    // Hàm xử lý xóa tour khỏi giỏ hàng
    const handleDelete = (key) => {
        const updatedCart = cartItems.filter((item, index) => index !== key);
        setCartItems(updatedCart);
        localStorage.setItem('cart', JSON.stringify(updatedCart));
        // Gọi hàm để cập nhật số lượng giỏ hàng trong AppHeader
        updateCartCount(updatedCart.length);
    };

    const columns = [
        {
            title: 'Title',
            dataIndex: 'title',
            key: 'title',
        },
        {
            title: 'City',
            dataIndex: 'city',
            key: 'city',
        },
        {
            title: 'Action',
            dataIndex: 'action',
            key: 'action',
            render: (text, record, index) => (
                <Popconfirm
                    title="Bạn có chắc chắn muốn xóa tour này khỏi giỏ hàng?"
                    onConfirm={() => handleDelete(index)}
                    okText="Xóa"
                    cancelText="Hủy"
                >
                    <DeleteOutlined />
                </Popconfirm>
            ),
        },
    ];

    return (
        <>
            {/* <AppHeader /> */}
            <section>
                <div className="container">
                    <Table dataSource={cartItems} columns={columns} />
                </div>
            </section>
            <Footer />
        </>
    );
}

export default Cart;
