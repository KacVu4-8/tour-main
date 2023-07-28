import React from 'react';
import './Experience.css';
import img from '../images/experience-1.png';

function Experience() {
    const experienceItems = [
        {
            title: '12k+',
            text: 'Successful trip',
            key: '1',
        },
        {
            title: '2k+',
            text: 'Regular clients',
            key: '2',
        },
        {
            title: '15',
            text: 'Year experience',
            key: '3',
        },
    ];

    return (
        <section className="mb-5">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="experience_content">
                            <h3 className="experience_title">Experience</h3>
                            <h2>With Duong our all experience we will serve you</h2>
                            <p>Vu ipsum dolor sit consectetur. tempppppppppppppppppppppppppp</p>
                        </div>
                        <div className="experience_couter">
                            {experienceItems.map((item) => (
                                <div key={item.key} className="experience_box">
                                    <span>12k+</span>
                                    <h6>Successful trip</h6>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <img src={img} alt="" />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Experience;

