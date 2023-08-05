import React, { useState, useEffect } from 'react';
import './Booking.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faLocationDot,
    faStar,
    faCircleDollarToSlot,
    faMapPin,
    faUsers,
    faXmark,
} from '@fortawesome/free-solid-svg-icons';
import { Input, DatePicker, InputNumber, Space,} from 'antd';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import AppHeader from '../Header';
import Footer from '../Footer';
import user from '../images/user.jpg';

function Booking() {
    const { id } = useParams();
    const [tour, setTour] = useState(null);
    const [guestCount, setGuestCount] = useState('');
    const [total, setTotal] = useState(0);
    const navigate = useNavigate();
    const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
    const [reviews, setReviews] = useState([]);
    const [selectedRating, setSelectedRating] = useState(0);
    const [comment, setComment] = useState('');

    const formatDate = (createdAt) => {
        const date = new Date(createdAt);
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return date.toLocaleDateString('en-US', options);
    };

    const totalRating = reviews.reduce((total, review) => total + review.rating, 0);
    const averageRating = reviews.length > 0 ? totalRating / reviews.length : 0;

    useEffect(() => {
        const checkUserLoggedIn = () => {
            const token = localStorage.getItem('token');
            return !!token; // Trả về true nếu token tồn tại, ngược lại trả về false.
        };

        const userLoggedIn = checkUserLoggedIn();
        setIsUserLoggedIn(userLoggedIn);
    }, []);

    useEffect(() => {
        const fetchTour = async () => {
            try {
                const response = await axios.get(`http://localhost:4000/api/v1/tours/${id}`);
                setTour(response.data.data);
                setReviews(response.data.data.reviews);
            } catch (error) {
                alert('Failed to fetch tour:' + error.message);
            }
        };

        fetchTour();
    }, [id]);

    useEffect(() => {
        if (tour) {
            setTotal(tour.price * guestCount);
        }
    }, [guestCount, tour]);

    if (!tour) {
        return <p>Tour not found</p>;
    }

    const handleRatingChange = (rating) => {
        setSelectedRating(rating);
    };

    const handleCommentChange = (event) => {
        setComment(event.target.value);
    };

    const handleAddReview = async () => {
        // Kiểm tra xem người dùng đã đăng nhập hay chưa
        if (!isUserLoggedIn) {
            alert('Bạn cần đăng nhập để thêm nhận xét.');
            navigate('/login');
            return;
        }

        const newReview = {
            rating: selectedRating,
            reviewText: comment,
            createdAt: new Date().toISOString(),
            username: 'User', // Thay thế 'User' bằng tên người dùng đăng nhập thực tế
        };

        try {
            // Gửi nhận xét mới lên máy chủ để lưu vào cơ sở dữ liệu
            await axios.post(`http://localhost:4000/api/v1/tours/${id}/reviews`, newReview);

            // Sau khi thành công, cập nhật lại danh sách nhận xét bằng cách thêm nhận xét mới vào state 'reviews'
            setReviews((prevReviews) => [...prevReviews, newReview]);
            setSelectedRating(0);
            setComment('');
        } catch (error) {
            alert('Failed to add review:' + error.message);
        }
    };

    const onChangeInputNumber = (value) => {
        setGuestCount(value);
    };

    const onChangeDatePicker = (date, dateString) => {
        console.log(date, dateString);
    };

    const handleBookClick = () => {
        if (isUserLoggedIn) {
            navigate('/detail');
        } else {
            alert('Bạn cần đăng nhập để thực hiện đặt tour.');
            navigate('/login');
        }
    };

    return (
        <div>
            <AppHeader />
            <section className="mt-5">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="booking_content">
                                <img src={tour.photo} alt="" />
                                <div className="booking_info">
                                    <h2>{tour.title}</h2>
                                    <div className="d-flex align-items-center gap-5">
                                        <span className="booking_rating d-flex align-items-center gap-1">
                                            <FontAwesomeIcon className="icon" icon={faStar} />
                                            <span>
                                                {averageRating.toFixed(1)} ({reviews.length})
                                            </span>
                                        </span>

                                        <span>
                                            <FontAwesomeIcon className="icon" icon={faLocationDot} />
                                            {tour.address}
                                        </span>
                                    </div>
                                    <div className="booking_extra">
                                        <span>
                                            <FontAwesomeIcon className="icon" icon={faLocationDot} />
                                            {tour.city}
                                        </span>
                                        <span>
                                            <FontAwesomeIcon className="icon" icon={faCircleDollarToSlot} />
                                            {tour.price}/per person
                                        </span>
                                        <span>
                                            <FontAwesomeIcon className="icon" icon={faMapPin} />
                                            {tour.distance} k/m
                                        </span>
                                        <span>
                                            <FontAwesomeIcon className="icon" icon={faUsers} />
                                            {tour.maxGroupSize} people
                                        </span>
                                    </div>
                                    <h5>Description</h5>
                                    <p>{tour.desc}</p>
                                </div>
                                <div className="booking_reviews mt-4">
                                    <h4>Reviews ({reviews.length} reviews)</h4>
                                    <form action="">
                                        <div className="d-flex align-items-center gap-3 mb-4 rating_group">
                                            <span onClick={() => handleRatingChange(1)}>
                                                1<FontAwesomeIcon className="icon" icon={faStar} />
                                            </span>
                                            <span onClick={() => handleRatingChange(2)}>
                                                2<FontAwesomeIcon className="icon" icon={faStar} />
                                            </span>
                                            <span onClick={() => handleRatingChange(3)}>
                                                3<FontAwesomeIcon className="icon" icon={faStar} />
                                            </span>
                                            <span onClick={() => handleRatingChange(4)}>
                                                4<FontAwesomeIcon className="icon" icon={faStar} />
                                            </span>
                                            <span onClick={() => handleRatingChange(4)}>
                                                5<FontAwesomeIcon className="icon" icon={faStar} />
                                            </span>
                                        </div>
                                        <div className="review_input">
                                            <input
                                                type="text"
                                                placeholder="Share your thoughts"
                                                value={comment}
                                                onChange={handleCommentChange}
                                            />
                                            <button
                                                className="btn_primary btn text-white "
                                                style={{ background: '#faa935' }}
                                                onClick={handleAddReview}
                                            >
                                                Submit
                                            </button>
                                        </div>
                                    </form>
                                    <ul className="user_reviews list-group">
                                        {reviews.map((review, index) => (
                                            <div className="review_item" key={review.index}>
                                                <img src={user} alt="" />
                                                <div className="w-100">
                                                    <div className="d-flex align-items-center justify-content-between ">
                                                        <div>
                                                            <h5>{review.username}</h5>
                                                            <p>{formatDate(review.createdAt)}</p>
                                                        </div>
                                                        <span className="d-flex align-items-center">
                                                            {review.rating}
                                                            <FontAwesomeIcon className="icon" icon={faStar} />
                                                        </span>
                                                    </div>
                                                    <h6>{review.reviewText}</h6>
                                                </div>
                                            </div>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="booking">
                                <div className="booking_top d-flex align-items-center justify-content-between">
                                    <h3>
                                        ${tour.price}
                                        <span>/per person</span>
                                    </h3>
                                    <span className="booking_rating d-flex align-items-center">
                                        <FontAwesomeIcon className="icon" icon={faStar} />
                                        <span>
                                            {averageRating.toFixed(1)} ({reviews.length})
                                        </span>
                                    </span>
                                </div>
                                <div className="booking_form">
                                    <h5>Information</h5>
                                    <div className="booking_info-form border-0">
                                        <Input bordered={false} placeholder="Full name" className="mb-3" />
                                        <Input bordered={false} placeholder="Phone" className="mb-3" />
                                        <div className="d-flex align-items-center gap-3 mb-3">
                                            <Space direction="vertical">
                                                <DatePicker
                                                    className="w-100"
                                                    bordered={false}
                                                    onChange={onChangeDatePicker}
                                                />
                                            </Space>
                                            <InputNumber
                                                className="w-50"
                                                bordered={false}
                                                min={0}
                                                // max={100}
                                                onChange={onChangeInputNumber}
                                                placeholder="Guest"
                                                value={guestCount}
                                                max={tour.maxGroupSize}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="booking_bottom">
                                    <ul className="list-group">
                                        <li className="border-0 px-0 list-group-item">
                                            <h5 className="d-flex align-items-center gap-1">
                                                {tour.price}
                                                <FontAwesomeIcon icon={faXmark} />1 person
                                            </h5>
                                            <span>${tour.price}</span>
                                        </li>

                                        <li className="border-0 px-0 list-group-item">
                                            <h5 className="d-flex align-items-center gap-1">Service charge</h5>
                                            <span>$10</span>
                                        </li>

                                        <li className="border-0 px-0 list-group-item ">
                                            <h5 className="d-flex align-items-center gap-1 total">Total</h5>
                                            <span className="total">${total + 10}</span>
                                        </li>
                                    </ul>

                                    <button
                                        className="btn primary__btn w-100 mt-4 btn btn-warning text-white"
                                        onClick={handleBookClick}
                                    >
                                        Book
                                    </button>
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

export default Booking;
