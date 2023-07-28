

import './Offer.css';
import React from 'react';
import offer_1 from '../images/offer-1.png';
import offer_2 from '../images/offer-2.png';
import offer_3 from '../images/offer-3.png';

function Offer() {
    const offerItems = [
        {
            title: 'Calculate Weather',
            img: offer_1,
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
            key: '1',
        },
        {
            title: 'Best Tour Guide',
            img: offer_2,
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
            key: '2',
        },
        {
            title: 'Customization',
            img: offer_3,
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
            key: '3',
        },
    ];

    return (
        <section>
            <div className="container mt-5 mb-5">
                <div className="row">
                    <div className="col-lg-3 ">
                        <h5 className="offer-title" style={{ fontFamily: 'Island Moments' }}>
                            What we serve
                        </h5>
                        <h2 className="offer-title">We offer our best services</h2>
                    </div>
                    {offerItems.map((item) => {
                        return (
                            <div key={item.key} className="col-sm-12 col-lg-3 col-md-6">
                                <div className="offer-item">
                                    <div className="offer-img">
                                        <img src={item.img} alt={item.title} />
                                    </div>
                                    <h6>{item.title}</h6>
                                    <p>{item.text}</p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

export default Offer;
