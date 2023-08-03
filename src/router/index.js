import { Link} from 'react-router-dom';
function Navbar() {
    return (
        <div >
            <Link style={{textDecoration:'none'}} to="/">Home</Link>
            <Link style={{textDecoration:'none'}} to="/about">About</Link>
            <Link style={{textDecoration:'none'}} to="/tours">Tours</Link>
            {/* <Link style={{textDecoration:'none'}} to="/detail">Detail</Link> */}
        </div>
    );
}

export default Navbar;

