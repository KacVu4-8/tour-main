import './GioiThieu.css';
import video from './video.mp4';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faMapLocation, faUsers, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

const GioiThieu = () => {
    return (
        <section className="mt-5 p-50">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="content-hero">
                            <div className="subtitle align-items-center">
                                <h3 className="sub-children">Know Before You Go</h3>
                                <img
                                    src="https://doan-eta.vercel.app/static/media/world.12b28835610f2449f5e9.png"
                                    alt=""
                                />
                            </div>
                            <h1>
                                Traveling opens the door to creating <span>memories with duong</span>
                            </h1>
                            <p>
                                Our Vietnam is a beautiful country. We have a variety of landscapes which are widely
                                well-known such as Ha Long Bay, Hoi An Old quarter and Phong Nha Ke Bang cave. A long
                                coast with many attractive beaches is also our recognized reputation. Although Vietnam
                                was a rich traditional culture country, it has undergone a great change since 1945 due
                                to the war. But you can still find spiritual values in traditional arts performances
                                such as singing Tru, Cheo, Tuong, water puppet, ancient artifacts at the museums at the
                                cultural centers in Hanoi and Saigon.
                            </p>
                        </div>
                    </div>
                    <div className="col-lg-2">
                        <div className="section__img-box ">
                            <img
                                src="https://doan-eta.vercel.app/static/media/hero-img01.cdfa5451ce66d17ee1f8.jpg"
                                alt=""
                            />
                        </div>
                    </div>
                    <div className="col-lg-2">
                        <div className="section__img-box section__video mt-4">
                            <video controls>
                                <source src={video} type="video/mp4" />
                            </video>
                        </div>
                    </div>
                    <div className="col-lg-2">
                        <div className="section__img-box mt-5">
                            <img
                                src="https://doan-eta.vercel.app/static/media/hero-img02.c5c2185a4223b66365fb.jpg"
                                alt=""
                            />
                        </div>
                    </div>
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
        </section>
    );
};

export default GioiThieu;
