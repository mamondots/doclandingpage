import Address from "../Address/Address";
import Banner from "../Banner/Banner";
import ExportDoctor from "../ExportDoctor/ExportDoctor";
import Footer from "../Footer/Footer";
import Services from "../Services/Services";
import Testimonal from "../Testimonal/Testimonal";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <Address></Address>
            <Testimonal></Testimonal>
            <ExportDoctor></ExportDoctor>
            <Footer></Footer>
        </div>
    );
};

export default Home;