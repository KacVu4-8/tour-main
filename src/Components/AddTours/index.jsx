// import React, { useState } from 'react';
// import { Form, Input, Button, InputNumber, notification, Switch, Upload } from 'antd'; // Đã thêm InputNumber
// import axios from 'axios';
// import { UploadOutlined } from '@ant-design/icons';

// const NewTourForm = () => {
//     const [form] = Form.useForm();
//     const [loading, setLoading] = useState(false);

//     const openSuccessNotification = () => {
//         notification.success({
//             message: 'Thành công',
//             description: 'Tour đã được thêm thành công!',
//         });
//     };

//     const openErrorNotification = (message) => {
//         notification.error({
//             message: 'Lỗi',
//             description: message,
//         });
//     };

//     const onFinish = async (values) => {
//         try {
//             setLoading(true);
//             const response = await axios.post('http://localhost:4000/api/v1/tours', values);
//             if (response.data.success) {
//                 form.resetFields();
//                 openSuccessNotification();
//             } else {
//                 openErrorNotification('Thêm tour thất bại. Vui lòng thử lại.');
//             }
//         } catch (error) {
//             console.error(error);
//             openErrorNotification('Đã xảy ra lỗi. Vui lòng thử lại.');
//         } finally {
//             setLoading(false);
//         }
//     };

//     const normFile = (e) => {
//         if (Array.isArray(e)) {
//             return e;
//         }
//         return e && e.fileList;
//     };

//     return (
//         <Form form={form} onFinish={onFinish}>
//             <Form.Item label="Tiêu đề" name="title" rules={[{ required: true }]}>
//                 <Input />
//             </Form.Item>
//             <Form.Item label="Thành phố" name="city" rules={[{ required: true }]}>
//                 <Input />
//             </Form.Item>
//             <Form.Item label="Địa chỉ" name="address" rules={[{ required: true }]}>
//                 <Input />
//             </Form.Item>
//             <Form.Item label="Khoảng cách" name="distance" rules={[{ required: true }]}>
//                 <InputNumber min={0} />
//             </Form.Item>
//             <Form.Item
//                 label="Hình ảnh"
//                 name="photo"
//                 valuePropName="fileList"
//                 getValueFromEvent={normFile}
//                 rules={[{ message: 'Vui lòng tải lên hình ảnh' }]}
//             >
//                 <Upload
//                     name="photo"
//                     action="http://localhost:4000/api/v1/tours" // Thay đổi thành endpoint tải lên của bạn
//                     listType="picture"
//                 >
//                     <Button icon={<UploadOutlined />}>Tải lên</Button>
//                 </Upload>
//             </Form.Item>
//             <Form.Item label="Mô tả" name="desc" rules={[{ required: true }]}>
//                 <Input.TextArea />
//             </Form.Item>
//             <Form.Item label="Giá" name="price" rules={[{ required: true }]}>
//                 <InputNumber min={0} />
//             </Form.Item>
//             <Form.Item label="Số lượng tối đa" name="maxGroupSize" rules={[{ required: true }]}>
//                 <InputNumber min={1} />
//             </Form.Item>
//             <Form.Item label="Nổi bật" name="featured" valuePropName="checked">
//                 <Switch />
//             </Form.Item>
//             {/* Bạn có thể thêm thêm các Form.Item cho các trường khác */}
//             <Form.Item>
//                 <Button type="primary" htmlType="submit" loading={loading}>
//                     Thêm Tour
//                 </Button>
//             </Form.Item>
//         </Form>
//     );
// };

// export default NewTourForm;

import React, { useState } from 'react';
import axios from 'axios';

function ThemTourMoi() {
    const [tourInfo, setTourInfo] = useState({
        title: '',
        city: '',
        address: '',
        distance: 0,
        photo: '',
        desc: '',
        price: 0,
        maxGroupSize: 0,
        featured: false,
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setTourInfo((prevInfo) => ({
            ...prevInfo,
            [name]: value,
        }));
    };

    const handleImageUpload = (event) => {
        const imageFile = event.target.files[0];
        const formData = new FormData();
        formData.append('image', imageFile);

        axios
            .post('http://localhost:4000/api/v1/upload', formData)
            .then((response) => {
                if (response.data.success) {
                    setTourInfo((prevInfo) => ({
                        ...prevInfo,
                        photo: response.data.imageName, // Lưu tên tệp hình ảnh vào trạng thái
                    }));
                }
            })
            .catch((error) => {
                console.error('Lỗi khi tải lên hình ảnh:', error);
            });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await axios.post('http://localhost:4000/api/v1/tours', tourInfo);

            if (response.data.success) {
                console.log('Tour đã được thêm thành công!');
                // Thực hiện hành động nào đó sau khi thêm tour thành công
            }
        } catch (error) {
            console.error('Lỗi khi thêm tour:', error);
            // Xử lý lỗi khi thêm tour thất bại
        }
    };

    return (
        <div>
            <h2>Thêm Tour Mới</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Tiêu đề:
                    <input type="text" name="title" value={tourInfo.title} onChange={handleChange} />
                </label>
                <label>
                    Thành phố:
                    <input type="text" name="city" value={tourInfo.city} onChange={handleChange} />
                </label>
                <label>
                    Địa chỉ:
                    <input type="text" name="address" value={tourInfo.address} onChange={handleChange} />
                </label>
                <label>
                    Khoảng cách:
                    <input type="number" name="distance" value={tourInfo.distance} onChange={handleChange} />
                </label>
                <label>
                    Ảnh:
                    <input type="file" accept="image/*" onChange={handleImageUpload} />
                </label>
                <label>
                    Mô tả:
                    <textarea name="desc" value={tourInfo.desc} onChange={handleChange} />
                </label>
                <label>
                    Giá:
                    <input type="number" name="price" value={tourInfo.price} onChange={handleChange} />
                </label>
                <label>
                    Kích thước nhóm tối đa:
                    <input type="number" name="maxGroupSize" value={tourInfo.maxGroupSize} onChange={handleChange} />
                </label>
                <label>
                    Tour nổi bật:
                    <input
                        type="checkbox"
                        name="featured"
                        checked={tourInfo.featured}
                        onChange={() =>
                            setTourInfo((prevInfo) => ({
                                ...prevInfo,
                                featured: !prevInfo.featured,
                            }))
                        }
                    />
                </label>
                <button type="submit">Thêm Tour</button>
            </form>
        </div>
    );
}

export default ThemTourMoi;
