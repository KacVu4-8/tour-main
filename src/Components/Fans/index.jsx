// import './Fans.css';
// import './app.js';
// import Slider from 'react-slick';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';
// import DATA from '../data/data';

// function Fans() {

//     const isMobile = window.innerWidth <= 768;

//     const settings = {
//         dots: true,
//         infinite: true,
//         speed: 500,
//         autoplay: true,
//         autoplaySpeed: 2000,
//         // slidesToShow: 3,
//         // slidesToScroll: 1,
//         slidesToShow: isMobile ? 1 : 3,
//         slidesToScroll: isMobile ? 1 : 1,
//     };
//     return (
//         <section>
//             <div className="container">
//                 <div className="row">
//                     <div className="col-lg-12">
//                         <h3 className="fans-title">Fans Love</h3>
//                         <h2 className="fans_sub">What our fans say about us</h2>
//                     </div>
//                     <div className="col-lg-12">
//                         <div>
//                             <Slider {...settings}>
//                                 {DATA.fans.map((data) => (
//                                     <div className='fans-slick py-3 px-3'>
//                                         <p >{data.text}</p>
//                                         <div className='d-flex align-items-center gap-4 mt-3'>
//                                             <img className='w-25 h-25 rouded-2' src={data.img} alt="" />
//                                             <div>
//                                                 <h6 className='mb-0 mt-3'>{data.name}</h6>
//                                                 <p >{data.level}</p>
//                                             </div>
//                                         </div>
//                                     </div>
//                                 ))}
//                             </Slider>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </section>
//     );
// }

// export default Fans;

import './Fans.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import DATA from '../data/data';

function Fans() {
    const isMobile = window.innerWidth <= 844;

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 2000,
        slidesToShow: isMobile ? 1 : 3,
        slidesToScroll: 1,
    };

    return (
        <section>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <h3 className="fans-title">Fans Love</h3>
                        <h2 className="fans_sub">What our fans say about us</h2>
                    </div>
                    <div className="col-lg-12">
                        <div className="fans-group">
                            <Slider {...settings}>
                                {DATA.fans.map((data) => (
                                    <div className="fans-slick py-3 px-3" key={data.id}>
                                        <p>{data.text}</p>
                                        <div className="d-flex align-items-center gap-4 mt-3">
                                            <img className="w-25 h-25 rounded-2" src={data.img} alt="" />
                                            <div>
                                                <h6 className="mb-0 mt-3">{data.name}</h6>
                                                <p>{data.level}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </Slider>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Fans;
