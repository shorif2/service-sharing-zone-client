import Banner from "./Components/Banner";
import Faq from "./Components/Faq";
import HowItWork from "./Components/HowItWork";



const Home = () => {
    return (
        <div className="container mx-auto">
        <Banner></Banner>
        <HowItWork></HowItWork>
        <Faq></Faq>
        </div>
    );
};

export default Home;