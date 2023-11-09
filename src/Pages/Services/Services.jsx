
import { Helmet } from "react-helmet";
import AllService from "./Components/AllService";

// import SearchBox from "./Components/SearchBox";

const Services = () => {
    
    
    return (
        <div>
            
            <Helmet>
                <meta charSet="utf-8" />
                <title>ServiSwap | Service</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
           {/* <SearchBox></SearchBox> */}
           <AllService></AllService>
        </div>
    );
};

export default Services;