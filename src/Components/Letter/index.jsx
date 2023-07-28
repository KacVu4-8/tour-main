import './Letter.css';
import img from '../images/male-tourist.png'

function Letter() {
    return (
        <section className="mt-5 mb-5">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="letter_content">
                            <h2>Subcribe DUONG now to get useful traveling information</h2>
                            <div className="letter_input">
                                <input type="emali" placeholder="Enter your email" />
                                <button className="btn btn-warning letter_btn">Subcribe</button>
                            </div>
                            <p>WE SO CHIPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPP</p>
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

export default Letter;
