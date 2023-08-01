import './Booking.css';
import dayjs from 'dayjs';
import type { DatePickerProps } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faLocationDot,
    faStar,
    faCircleDollarToSlot,
    faMapPin,
    faUsers,
    faXmark,
} from '@fortawesome/free-solid-svg-icons';
import img from '../images/tour-1.jpg';
import { Input, DatePicker, InputNumber, Space } from 'antd';

function Booking() {
    const onChange = (value: number) => {
        console.log('changed', value);
        const onChange: DatePickerProps['onChange'] = (date, dateString) => {
            console.log(date, dateString);
        };
    };
    return (
        <section className="mt-5">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8">
                        <div className="booking_content">
                            <img src={img} alt="" />
                            <div className="booking_info">
                                <h2>Bali, Indonesia</h2>
                                <div className="d-flex align-items-center gap-5">
                                    <span className="booking_rating d-flex align-items-center gap-1">
                                        <FontAwesomeIcon className="icon" icon={faStar} />
                                        <span>(0)</span>
                                    </span>
                                    <span>
                                        <FontAwesomeIcon className="icon" icon={faLocationDot} />
                                        Somewhere in Indonesia
                                    </span>
                                </div>
                                <div className="booking_extra">
                                    <span>
                                        <FontAwesomeIcon className="icon" icon={faLocationDot} />
                                        Bali
                                    </span>
                                    <span>
                                        <FontAwesomeIcon className="icon" icon={faCircleDollarToSlot} />
                                        99/per person
                                    </span>
                                    <span>
                                        <FontAwesomeIcon className="icon" icon={faMapPin} />
                                        44 k/m
                                    </span>
                                    <span>
                                        <FontAwesomeIcon className="icon" icon={faUsers} />8 people
                                    </span>
                                </div>
                                <h5>Description</h5>
                                <p>this is the description</p>
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
                                    $99
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
                                            <DatePicker onChange={onChange} />
                                        </Space>
                                        <InputNumber
                                            min={0}
                                            max={100}
                                            defaultValue={3}
                                            onChange={onChange}
                                            placeholder="Guest"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="booking_bottom">
                                <ul className="list-group">
                                    <li className="border-0 px-0 list-group-item">
                                        <h5 className="d-flex align-items-center gap-1">
                                            $99
                                            <FontAwesomeIcon icon={faXmark} />1 person
                                        </h5>
                                        <span>$99</span>
                                    </li>

                                    <li className="border-0 px-0 list-group-item">
                                        <h5 className="d-flex align-items-center gap-1">Service charge</h5>
                                        <span>$10</span>
                                    </li>

                                    <li className="border-0 px-0 list-group-item ">
                                        <h5 className="d-flex align-items-center gap-1 total">Total</h5>
                                        <span className='total'>$10</span>
                                    </li>
                                </ul>
                                <button className='btn primary__btn w-100 mt-4 btn btn-warning text-white'>Book Now</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Booking;
