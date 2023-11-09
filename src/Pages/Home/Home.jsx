import { Helmet } from "react-helmet";
import Banner from "./Components/Banner";
import Faq from "./Components/Faq";
import GetInTouch from "./Components/GetInTouch";
import HowItWork from "./Components/HowItWork";
import PopularService from "./Components/PopularService";



const Home = () => {
    return (
        <div className="container mx-auto">

            <Helmet>
                <meta charSet="utf-8" />
                <title>ServiSwap Home</title>
                <link rel="canonical" href="https://service-sharing-client.web.app" />
            </Helmet>
            <Banner></Banner>
            <PopularService></PopularService>
            <HowItWork></HowItWork>
            <Faq></Faq>
            <GetInTouch></GetInTouch>
        </div>
    );
};

export default Home;