import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faMapLocation, faUsers, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { Input, InputNumber } from 'antd';
import { useState } from 'react';
// import AppHeader from '../Header';
import Footer from '../Footer';
import Letter from '../Letter';
import Explore from '../Explore';
import './Tours.css';

function Tours() {
    const [filterCity, setFilterCity] = useState('');

    const handleCityFilterChange = (event) => {
        setFilterCity(event.target.value);
    };

    return (
        <div>
            {/* <AppHeader /> */}
            <section className="tours-img">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <h1>All Tours</h1>
                        </div>
                    </div>
                </div>
            </section>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="search-bar">
                            <div className="d-flex align-items-center gap-4">
                                <div className="d-flex gap-3 group__form group__form-first">
                                    <span className="align-items-center">
                                        <FontAwesomeIcon icon={faLocationDot} />
                                    </span>
                                    <div>
                                        <h6>Location</h6>
                                        <Input
                                            bordered={false}
                                            className="input_distance"
                                            placeholder="Where are you doing ? "
                                            value={filterCity}
                                            onChange={handleCityFilterChange}
                                        />
                                    </div>
                                </div>
                                <div className="d-flex gap-3 group__form group__form-first">
                                    <span className="align-items-center">
                                        <FontAwesomeIcon icon={faMapLocation} />
                                    </span>
                                    <div className='distance'>
                                        <h6>Distance</h6>
                                        <InputNumber
                                            className="input_distance"
                                            bordered={false}
                                            min={0}
                                            max={100}
                                            placeholder="k/m"
                                            
                                        />
                                    </div>
                                </div>
                                <div className="d-flex gap-3 group__form group__form-first">
                                    <span className="align-items-center">
                                        <FontAwesomeIcon icon={faUsers} />
                                    </span>
                                    <div>
                                        <h6>Max People</h6>
                                        <InputNumber className="input_distance" bordered={false} min={0} max={100} placeholder="Guest" />
                                    </div>
                                    <span className="icon-search">
                                        <i>
                                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                                        </i>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Explore filterCity={filterCity} />
            <Letter />
            <Footer />
        </div>
    );
}

export default Tours;
