import './Gallery.css';
import gallery_1 from '../images/gallery-1.jpg';
import gallery_2 from '../images/gallery-2.jpg';
import gallery_3 from '../images/gallery-3.jpg';
import gallery_4 from '../images/gallery-4.jpg';
import gallery_5 from '../images/gallery-5.jpg';
import gallery_6 from '../images/gallery-6.jpg';
import gallery_7 from '../images/gallery-7.jpg';
import gallery_8 from '../images/gallery-8.jpg';

function Gallery() {
    return (
        <section>
            <div className="container mt-5 mb-5">
                <div className="row">
                    <div className="col-lg-12">
                        <h3 className="gallery_title">Gallery</h3>
                        <h2 className="gallery_sub">Visit our customers tour gallery</h2>
                    </div>
                    <div className="col-lg-12">
                        <div>
                            <div
                                style={{
                                    display: 'flex',
                                    flexDirection: 'row',
                                    justifyContent: 'stretch',
                                    alignItems: 'center',
                                    boxSizing: 'border-box',
                                    width: '100%',
                                    gap: '1rem',
                                }}
                            >
                                <div
                                    style={{
                                        display: 'flex',
                                        flexDirection: 'column',
                                        justifyContent: 'stretch',
                                        alignItems: 'flex-start',
                                        flex: '1 1 0%',
                                        width: '0px',
                                        gap: '1rem',
                                    }}
                                >
                                    <img
                                        classN
                                        className="masonry__img"
                                        ame="masonry__img"
                                        src={gallery_1}
                                        alt=""
                                        style={{ width: '100%', display: 'block', borderRadius: '10px' }}
                                    />
                                    <img
                                        className="masonry__img"
                                        src={gallery_2}
                                        alt=""
                                        style={{ width: '100%', display: 'block', borderRadius: '10px' }}
                                    />
                                </div>
                                <div
                                    style={{
                                        display: 'flex',
                                        flexDirection: 'column',
                                        justifyContent: 'stretch',
                                        alignItems: 'flex-start',
                                        flex: '1 1 0%',
                                        width: '0px',
                                        gap: '1rem',
                                    }}
                                >
                                    <img
                                        className="masonry__img"
                                        src={gallery_3}
                                        alt=""
                                        style={{ width: '100%', display: 'block', borderRadius: '10px' }}
                                    />
                                    <img
                                        className="masonry__img"
                                        src={gallery_4}
                                        alt=""
                                        style={{ width: '100%', display: 'block', borderRadius: '10px' }}
                                    />
                                </div>
                                <div
                                    style={{
                                        display: 'flex',
                                        flexDirection: 'column',
                                        justifyContent: 'stretch',
                                        alignItems: 'flex-start',
                                        flex: '1 1 0%',
                                        width: '0px',
                                        gap: '1rem',
                                    }}
                                >
                                    <img
                                        className="masonry__img"
                                        src={gallery_5}
                                        alt=""
                                        style={{ width: '100%', display: 'block', borderRadius: '10px' }}
                                    />
                                    <img
                                        className="masonry__img"
                                        src={gallery_6}
                                        alt=""
                                        style={{ width: '100%', display: 'block', borderRadius: '10px' }}
                                    />
                                </div>
                                <div
                                    style={{
                                        display: 'flex',
                                        flexDirection: 'column',
                                        justifyContent: 'stretch',
                                        alignItems: 'flex-start',
                                        flex: '1 1 0%',
                                        width: '0px',
                                        gap: '1rem',
                                    }}
                                >
                                    <img
                                        className="masonry__img"
                                        src={gallery_7}
                                        alt=""
                                        style={{ width: '100%', display: 'block', borderRadius: '10px' }}
                                    />
                                    <img
                                        className="masonry__img"
                                        src={gallery_8}
                                        alt=""
                                        style={{ width: '100%', display: 'block', borderRadius: '10px' }}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Gallery;
