import AppHeader from '../Components/Header';
import GioiThieu from '../Components/GioiThieu';
import Offer from '../Components/Offer';
import Explore from '../Components/Explore';
import Experience from '../Components/Experience';
import Gallery from '../Components/Gallery';
import Fans from '../Components/Fans';
import Letter from '../Components/Letter';
import Footer from '../Components/Footer';

function Home() {
    return (
        <div>
            <AppHeader />
            <GioiThieu />
            <Offer />
            <Explore/>
            <Experience />
            <Gallery />
            <Fans />
            <Letter />
            <Footer />
        </div>
    );
}

export default Home;
