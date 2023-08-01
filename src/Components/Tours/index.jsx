import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faMapLocation, faUsers, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

import AppHeader from '../Header';
import Footer from '../Footer';
import Letter from '../Letter';
import Explore from '../Explore';
import Booking from '../Booking';
import './Tours.css'

function Tours() {
    return (
        <div>
            <AppHeader />
            <section className='tours-img'>
                <div className="container">
                    <div className="row">
                        <div className='col-lg-12'>
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
                                        <input type="text" placeholder="Where are you doing ? " />
                                    </div>
                                </div>
                                <div className="d-flex gap-3 group__form group__form-first">
                                    <span className="align-items-center">
                                        <FontAwesomeIcon icon={faMapLocation} />
                                    </span>
                                    <div>
                                        <h6>Distance</h6>
                                        <input type="text" placeholder="Distance k/m " />
                                    </div>
                                </div>
                                <div className="d-flex gap-3 group__form group__form-first">
                                    <span className="align-items-center">
                                        <FontAwesomeIcon icon={faUsers} />
                                    </span>
                                    <div>
                                        <h6>Max People</h6>
                                        <input type="text" placeholder="0" />
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
            <Explore/>
            <Booking/>
            <Letter />
            <Footer/>
        </div>
    );
}

export default Tours;
