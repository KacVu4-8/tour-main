import AppHeader from '../Components/Header';
import Footer from '../Components/Footer';
import Booking from '../Components/Booking';
import { Link } from 'react-router-dom';

function Detail() {
    return (
        <div>
            <AppHeader />
            <section>
                <div className="container">
                    <div className="finish" style={{textAlign:'center'}}>
                        <h1>Chúc mừng bạn đã đặt thành công</h1>
                        <Link to="/" className="btn primary__btn w-50 mt-4 btn btn-warning text-white">
                            Back to home
                        </Link>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    );
}

export default Detail;
