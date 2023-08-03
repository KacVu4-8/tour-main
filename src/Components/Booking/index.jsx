// import './Booking.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import {
//     faLocationDot,
//     faStar,
//     faCircleDollarToSlot,
//     faMapPin,
//     faUsers,
//     faXmark,
// } from '@fortawesome/free-solid-svg-icons';
// import { Input, DatePicker, InputNumber, Space } from 'antd';
// import { Link, useParams } from 'react-router-dom';
// import { useState, useEffect } from 'react';
// import AppHeader from '../Header';
// import Footer from '../Footer';
// import axios from 'axios';

// function Booking() {
//     const { id } = useParams();

//     const onChangeDatePicker = (date, dateString) => {
//         console.log(date, dateString);
//     };

//     const [tour, setTour] = useState(null);

//     useEffect(() => {
//         const fetchTour = async () => {
//             try {
//                 const response = await axios.get(`http://localhost:4000/api/v1/tours/${id}`);
//                 setTour(response.data.data);
//             } catch (error) {
//                 console.error('Failed to fetch tour:', error);
//             }
//         };

//         fetchTour();
//     }, [id]);

//     if (!tour) {
//         return <p>Tour not found</p>;
//     }

//     return (
//         <div>
//             <AppHeader />
//             <section className="mt-5">
//                 <div className="container">
//                     <div className="row">
//                         <div className="col-lg-8">
//                             <div className="booking_content">
//                                 <img src={tour.photo} alt="" />
//                                 <div className="booking_info">
//                                     <h2>{tour.title}</h2>
//                                     <div className="d-flex align-items-center gap-5">
//                                         <span className="booking_rating d-flex align-items-center gap-1">
//                                             <FontAwesomeIcon className="icon" icon={faStar} />
//                                             <span>(0)</span>
//                                         </span>
//                                         <span>
//                                             <FontAwesomeIcon className="icon" icon={faLocationDot} />
//                                             {tour.address}
//                                         </span>
//                                     </div>
//                                     <div className="booking_extra">
//                                         <span>
//                                             <FontAwesomeIcon className="icon" icon={faLocationDot} />
//                                             {tour.city}
//                                         </span>
//                                         <span>
//                                             <FontAwesomeIcon className="icon" icon={faCircleDollarToSlot} />
//                                             {tour.price}/per person
//                                         </span>
//                                         <span>
//                                             <FontAwesomeIcon className="icon" icon={faMapPin} />
//                                             {tour.distance} k/m
//                                         </span>
//                                         <span>
//                                             <FontAwesomeIcon className="icon" icon={faUsers} />
//                                             {tour.maxGroupSize} people
//                                         </span>
//                                     </div>
//                                     <h5>Description</h5>
//                                     <p>{tour.desc}</p>
//                                 </div>
//                                 <div className="booking_reviews mt-4">
//                                     <h4>Reviews (0 reviews)</h4>
//                                     <form action="">
//                                         <div className="d-flex align-items-center gap-3 mb-4 rating_group">
//                                             <span>
//                                                 1<FontAwesomeIcon className="icon" icon={faStar} />
//                                             </span>
//                                             <span>
//                                                 2<FontAwesomeIcon className="icon" icon={faStar} />
//                                             </span>
//                                             <span>
//                                                 3<FontAwesomeIcon className="icon" icon={faStar} />
//                                             </span>
//                                             <span>
//                                                 4<FontAwesomeIcon className="icon" icon={faStar} />
//                                             </span>
//                                             <span>
//                                                 5<FontAwesomeIcon className="icon" icon={faStar} />
//                                             </span>
//                                         </div>
//                                         <div className="review_input">
//                                             <input type="text" placeholder="Share your thoughts" />
//                                             <button
//                                                 className="btn_primary btn text-white "
//                                                 style={{ background: '#faa935' }}
//                                             >
//                                                 Submit
//                                             </button>
//                                         </div>
//                                     </form>
//                                 </div>
//                             </div>
//                         </div>
//                         <div className="col-lg-4">
//                             <div className="booking">
//                                 <div className="booking_top d-flex align-items-center justify-content-between">
//                                     <h3>
//                                         ${tour.price}
//                                         <span>/per person</span>
//                                     </h3>
//                                     <span className="booking_rating d-flex align-items-center">
//                                         <FontAwesomeIcon className="icon" icon={faStar} />
//                                         <span>(0)</span>
//                                     </span>
//                                 </div>
//                                 <div className="booking_form">
//                                     <h5>Information</h5>
//                                     <div className="booking_info-form">
//                                         <Input placeholder="Full name" className="mb-3" />
//                                         <Input placeholder="Phone" className="mb-3" />
//                                         <div className="d-flex align-items-center gap-3 mb-3">
//                                             <Space direction="vertical">
//                                                 <DatePicker onChange={onChangeDatePicker} />
//                                             </Space>
//                                             <InputNumber min={0} max={100} placeholder="Guest" />
//                                         </div>
//                                     </div>
//                                 </div>
//                                 <div className="booking_bottom">
//                                     <ul className="list-group">
//                                         <li className="border-0 px-0 list-group-item">
//                                             <h5 className="d-flex align-items-center gap-1">
//                                                 {tour.price}
//                                                 <FontAwesomeIcon icon={faXmark} />1 person
//                                             </h5>
//                                             <span>${tour.price}</span>
//                                         </li>

//                                         <li className="border-0 px-0 list-group-item">
//                                             <h5 className="d-flex align-items-center gap-1">Service charge</h5>
//                                             <span>$10</span>
//                                         </li>

//                                         <li className="border-0 px-0 list-group-item ">
//                                             <h5 className="d-flex align-items-center gap-1 total">Total</h5>
//                                             <span className="total">$10</span>
//                                         </li>
//                                     </ul>
//                                     <Link to="" className="btn primary__btn w-100 mt-4 btn btn-warning text-white">
//                                         Book
//                                     </Link>
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

// export default Booking;

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
import { Input, DatePicker, InputNumber, Space } from 'antd';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import AppHeader from '../Header';
import Footer from '../Footer';

function Booking() {
    const { id } = useParams();
    const [tour, setTour] = useState(null);
    const [guestCount, setGuestCount] = useState(0);
    const [total, setTotal] = useState(0);

    useEffect(() => {
        const fetchTour = async () => {
            try {
                const response = await axios.get(`http://localhost:4000/api/v1/tours/${id}`);
                setTour(response.data.data);
            } catch (error) {
                console.error('Failed to fetch tour:', error);
            }
        };

        fetchTour();
    }, [id]);

    useEffect(() => {
        // Tính toán lại giá trị Total khi số lượng khách (guestCount) thay đổi
        if (tour) {
            setTotal(tour.price * guestCount);
        }
    }, [guestCount, tour]);

    if (!tour) {
        return <p>Tour not found</p>;
    }

    // Hàm xử lý sự kiện khi số lượng khách thay đổi
    const onChangeInputNumber = (value) => {
        setGuestCount(value);
    };

    const onChangeDatePicker = (date, dateString) => {
        console.log(date, dateString);
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
                                            <span>(0)</span>
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
                                    <h4>Reviews (0 reviews)</h4>
                                    <form action="">
                                        <div className="d-flex align-items-center gap-3 mb-4 rating_group">
                                            <span>
                                                1<FontAwesomeIcon className="icon" icon={faStar} />
                                            </span>
                                            <span>
                                                2<FontAwesomeIcon className="icon" icon={faStar} />
                                            </span>
                                            <span>
                                                3<FontAwesomeIcon className="icon" icon={faStar} />
                                            </span>
                                            <span>
                                                4<FontAwesomeIcon className="icon" icon={faStar} />
                                            </span>
                                            <span>
                                                5<FontAwesomeIcon className="icon" icon={faStar} />
                                            </span>
                                        </div>
                                        <div className="review_input">
                                            <input type="text" placeholder="Share your thoughts" />
                                            <button
                                                className="btn_primary btn text-white "
                                                style={{ background: '#faa935' }}
                                            >
                                                Submit
                                            </button>
                                        </div>
                                    </form>
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
                                        <span>(0)</span>
                                    </span>
                                </div>
                                <div className="booking_form">
                                    <h5>Information</h5>
                                    <div className="booking_info-form">
                                        <Input placeholder="Full name" className="mb-3" />
                                        <Input placeholder="Phone" className="mb-3" />
                                        <div className="d-flex align-items-center gap-3 mb-3">
                                            <Space direction="vertical">
                                                <DatePicker onChange={onChangeDatePicker} />
                                            </Space>
                                            <InputNumber
                                                min={0}
                                                max={100}
                                                onChange={onChangeInputNumber}
                                                placeholder="Guest"
                                                value={guestCount}
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
                                    <Link to="" className="btn primary__btn w-100 mt-4 btn btn-warning text-white">
                                        Book
                                    </Link>
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
