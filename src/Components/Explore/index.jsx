// import './Explore.css';
// import tour_7 from '../images/tour-7.jpg';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faLocationDot, faStar, } from '@fortawesome/free-solid-svg-icons';
// import { Link } from 'react-router-dom';
// import { Button } from 'antd';

// function Explore() {
//     return (
//         <section>
//             <div className="container">
//                 <div className="row">
//                     <div className="mb-5 col-lg-12">
//                         <h3 className="explore_title">Explore</h3>
//                         <h2 className="explore_sub">Our featured tours</h2>
//                     </div>
//                     <div className="mb-4 col-sm-6 col-md-4 col-lg-3">
//                         <div className="tour_card">
//                             <div className="card">
//                                 <div className="tour_img">
//                                     <img src={tour_7} alt="" />
//                                     <span>Featured</span>
//                                 </div>
//                                 <div className="card-body">
//                                     <div className="card_top d-flex align-items-center justify-content-between">
//                                         <span className="tour_location d-flex align-items-center gap-1">
//                                             <FontAwesomeIcon className="icon" icon={faLocationDot} />
//                                             Paris
//                                         </span>

//                                         <span className="tour_rating d-flex align-items-center gap-1">
//                                             <FontAwesomeIcon className="icon" icon={faStar} />
//                                             Not rated
//                                         </span>
//                                     </div>
//                                     <h5 className="tour_title">
//                                         <Link>Holmen Lofoten, France</Link>
//                                     </h5>
//                                     <div className="card_bottom d-flex align-items-center justify-content-between mt-3">
//                                         <h5>
//                                             $99 <span>/per person</span>
//                                         </h5>
//                                         <Link style={{color:'#0b2727'}}>
//                                             <Button className="booking_btn">Book Now</Button>
//                                         </Link>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </section>
//     );
// }

// export default Explore;

//---------------------
// import './Explore.css';
// import tour_7 from '../images/tour-7.jpg';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faLocationDot, faStar } from '@fortawesome/free-solid-svg-icons';
// import { Link } from 'react-router-dom';
// import { Button } from 'antd';
// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import DATA from '../data/data';

// function Explore() {
//     const [tours, setTours] = useState([]);

//     useEffect(() => {
//         const fetchTours = async () => {
//             try {
//                 const response = await axios.get('http://localhost:4000/api/v1/tours');
//                 setTours(response.data.data); // data là mảng chứa thông tin các tour từ API
//             } catch (error) {
//                 console.error('Failed to fetch tours:', error);
//             }
//         };

//         fetchTours();
//     }, []);

//     return (
//         <section>
//             <div className="container">
//                 <div className="row">
//                     <div className="mb-5 col-lg-12">
//                         <h3 className="explore_title">Explore</h3>
//                         <h2 className="explore_sub">Our featured tours</h2>
//                     </div>
//                     {tours.map((tour) => (
//                         <div key={tour.id} className="mb-4 col-sm-6 col-md-4 col-lg-3">
//                             <div className="tour_card">
//                                 <div className="card">
//                                     {DATA.tour_img.map((data) => {
//                                         <div className="tour_img">
//                                             <img src={data.img} alt={tour.name} />
//                                             <span>Featured</span>
//                                         </div>;
//                                     })}

//                                     <div className="card-body">
//                                         <div className="card_top d-flex align-items-center justify-content-between">
//                                             <span className="tour_location d-flex align-items-center gap-1">
//                                                 <FontAwesomeIcon className="icon" icon={faLocationDot} />
//                                                 {tour.city}
//                                             </span>

//                                             <span className="tour_rating d-flex align-items-center gap-1">
//                                                 <FontAwesomeIcon className="icon" icon={faStar} />
//                                                 {tour.rating ? `${tour.rating} stars` : 'Not rated'}
//                                             </span>
//                                         </div>
//                                         <h5 className="tour_title">
//                                             <Link to={`/tours/${tour.id}`}>{tour.title}</Link>
//                                         </h5>
//                                         <div className="card_bottom d-flex align-items-center justify-content-between mt-3">
//                                             <h5>
//                                                 ${tour.price} <span>/per person</span>
//                                             </h5>
//                                             <Link to={`/tours/${tour.id}`} style={{ color: '#0b2727' }}>
//                                                 <Button className="booking_btn">Book Now</Button>
//                                             </Link>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </section>
//     );
// }

// export default Explore;

import './Explore.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faStar } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { Button } from 'antd';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import DATA from '../data/data';

function Explore() {
    const [tours, setTours] = useState([]);

    useEffect(() => {
        const fetchTours = async () => {
            try {
                const response = await axios.get('http://localhost:4000/api/v1/tours');
                setTours(response.data.data); // data là mảng chứa thông tin các tour từ API
            } catch (error) {
                console.error('Failed to fetch tours:', error);
            }
        };

        fetchTours();
    }, []);

    return (
        <section>
            <div className="container">
                <div className="row">
                    <div className="mb-5 col-lg-12">
                        <h3 className="explore_title">Explore</h3>
                        <h2 className="explore_sub">Our featured tours</h2>
                    </div>
                    {tours.map((tour) => (
                        <div key={tour.id} className="mb-4 col-sm-6 col-md-4 col-lg-3">
                            <div className="tour_card">
                                <div className="card">
                                    <div className="tour_img">
                                        {/* Sử dụng tour.id để tìm ảnh phù hợp từ DATA.tour_content */}
                                        <img
                                            src={DATA.tour_content.find((data) => data.key === tour.id)?.img}
                                            alt={tour.name}
                                        />
                                        <span>Featured</span>
                                    </div>

                                    <div className="card-body">
                                        <div className="card_top d-flex align-items-center justify-content-between">
                                            <span className="tour_location d-flex align-items-center gap-1">
                                                <FontAwesomeIcon className="icon" icon={faLocationDot} />
                                                {tour.city}
                                            </span>

                                            <span className="tour_rating d-flex align-items-center gap-1">
                                                <FontAwesomeIcon className="icon" icon={faStar} />
                                                {tour.rating ? `${tour.rating} stars` : 'Not rated'}
                                            </span>
                                        </div>
                                        <h5 className="tour_title">
                                            <Link to={`/tours/${tour.id}`}>{tour.title}</Link>
                                        </h5>
                                        <div className="card_bottom d-flex align-items-center justify-content-between mt-3">
                                            <h5>
                                                ${tour.price} <span>/per person</span>
                                            </h5>
                                            <Link to={`/tours/${tour.id}`} style={{ color: '#0b2727' }}>
                                                <Button className="booking_btn">Book Now</Button>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Explore;
