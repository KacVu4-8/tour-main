// import './Explore.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faLocationDot, faStar } from '@fortawesome/free-solid-svg-icons';
// import { Link } from 'react-router-dom';
// import { useState, useEffect } from 'react';
// import axios from 'axios';

// function Explore() {
//     const [tours, setTours] = useState([]);

//     useEffect(() => {
//         const fetchTours = async () => {
//             try {
//                 const response = await axios.get('http://localhost:4000/api/v1/tours');
//                 setTours(response.data.data);
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
//                         <div key={tour._id} className="mb-4 col-sm-6 col-md-4 col-lg-3">
//                             <div className="tour_card">
//                                 <div className="card">
//                                     <div className="tour_img">
//                                         <img src={tour.photo} alt="" />
//                                     </div>
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
//                                             <Link to={`/booking/${tour.id}`}>{tour.title}</Link>
//                                         </h5>
//                                         <div className="card_bottom d-flex align-items-center justify-content-between mt-3">
//                                             <h5>
//                                                 ${tour.price} <span>/per person</span>
//                                             </h5>
//                                             {/* <Link to={`/detail/${tour._id}`} style={{ color: '#0b2727' }}>
//                                                 <button className="booking_btn">Book Now</button>
//                                             </Link> */}
//                                             {/* <Link to={`/booking/${tour.id}`} style={{ color: '#0b2727' }}>
//                                                 <button className="booking_btn">Book Now</button>
//                                             </Link> */}
//                                             <Link to={`/booking/${tour._id}`} style={{ color: '#0b2727' }}>
//                                                 <button className="booking_btn">Book Now</button>
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
import { useState, useEffect } from 'react';
import axios from 'axios';

function Explore() {
    const [tours, setTours] = useState([]);

    useEffect(() => {
        const fetchTours = async () => {
            try {
                const response = await axios.get('http://localhost:4000/api/v1/tours');
                setTours(response.data.data);
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
                        <div key={tour._id} className="mb-4 col-sm-6 col-md-4 col-lg-3">
                            <div className="tour_card">
                                <div className="card">
                                    <div className="tour_img">
                                        <img src={tour.photo} alt="" />
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
                                            <Link to={`/booking/${tour._id}`}>{tour.title}</Link>
                                        </h5>
                                        <div className="card_bottom d-flex align-items-center justify-content-between mt-3">
                                            <h5>
                                                ${tour.price} <span>/per person</span>
                                            </h5>
                                            <Link to={`/booking/${tour._id}`} style={{ color: '#0b2727' }}>
                                                <button className="booking_btn">Book Now</button>
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
