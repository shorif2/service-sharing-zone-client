import Banner from "./Components/Banner";
import Faq from "./Components/Faq";
import GetInTouch from "./Components/GetInTouch";
import HowItWork from "./Components/HowItWork";
import PopularService from "./Components/PopularService";



const Home = () => {
    return (
        <div className="container mx-auto">
        <Banner></Banner>
        <PopularService></PopularService>
        <HowItWork></HowItWork>
        <Faq></Faq>
        <GetInTouch></GetInTouch>
        </div>
    );
};

export default Home;