import React, { useState } from 'react';
import { Form, Input, Button, InputNumber, notification, Switch, Upload } from 'antd'; // Đã thêm InputNumber
import axios from 'axios';
import { UploadOutlined } from '@ant-design/icons';

const NewTourForm = () => {
    const [form] = Form.useForm();
    const [loading, setLoading] = useState(false);

    const openSuccessNotification = () => {
        notification.success({
            message: 'Thành công',
            description: 'Tour đã được thêm thành công!',
        });
    };

    const openErrorNotification = (message) => {
        notification.error({
            message: 'Lỗi',
            description: message,
        });
    };

    const onFinish = async (values) => {
        try {
            setLoading(true);
            const response = await axios.post('http://localhost:4000/api/v1/tours', values);
            if (response.data.success) {
                form.resetFields();
                openSuccessNotification();
            } else {
                openErrorNotification('Thêm tour thất bại. Vui lòng thử lại.');
            }
        } catch (error) {
            console.error(error);
            openErrorNotification('Đã xảy ra lỗi. Vui lòng thử lại.');
        } finally {
            setLoading(false);
        }
    };

    const normFile = (e) => {
        if (Array.isArray(e)) {
            return e;
        }
        return e && e.fileList;
    };

    return (
        <section className='container w-50'>
            <Form form={form} onFinish={onFinish}>
                <Form.Item label="Tiêu đề" name="title" rules={[{ required: true, message:'Hãy nhập tiêu đề' }]}>
                    <Input />
                </Form.Item>
                <Form.Item label="Thành phố" name="city" rules={[{ required: true,message:'Hãy nhập thành phố' }]}>
                    <Input />
                </Form.Item>
                <Form.Item label="Địa chỉ" name="address" rules={[{ required: true, message:'Hãy nhập địa chỉ' }]}>
                    <Input />
                </Form.Item>
                <Form.Item label="Khoảng cách" name="distance" rules={[{ required: true, message:'Hãy nhập khoảng cách' }]}>
                    <InputNumber min={0} />
                </Form.Item>
                <Form.Item
                    label="Hình ảnh"
                    name="photo"
                    valuePropName="fileList"
                    getValueFromEvent={normFile}
                    rules={[{ message: 'Vui lòng tải lên hình ảnh' }]}
                >
                    <Upload
                        name="photo"
                        action="http://localhost:4000/api/v1/tours" // Thay đổi thành endpoint tải lên của bạn
                        listType="picture"
                    >
                        <Button icon={<UploadOutlined />}>Tải lên</Button>
                    </Upload>
                </Form.Item>
                <Form.Item label="Mô tả" name="desc" rules={[{ required: true, message:'Hãy nhập mô tả' }]}>
                    <Input.TextArea />
                </Form.Item>
                <Form.Item label="Giá" name="price" rules={[{ required: true, message:'Hãy nhập giá' }]}>
                    <InputNumber min={0} />
                </Form.Item>
                <Form.Item label="Số lượng người tối đa" name="maxGroupSize" rules={[{ required: true, message:'Hãy nhập số lượng người' }]}>
                    <InputNumber min={1} />
                </Form.Item>
                <Form.Item label="Nổi bật" name="featured" valuePropName="checked">
                    <Switch />
                </Form.Item>
                {/* Bạn có thể thêm thêm các Form.Item cho các trường khác */}
                <Form.Item className='d-flex align-items-center'>
                    <Button type="primary" htmlType="submit" loading={loading}>
                        Thêm Tour
                    </Button>
                </Form.Item>
            </Form>
        </section>
    );
};

export default NewTourForm;

