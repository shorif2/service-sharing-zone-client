import { Helmet } from "react-helmet";
import MyBookings from "./MyBookings";
import Schedules from "./Schedules";


const MySchedules = () => {
    
    return (
        <div>
             <Helmet>
                <meta charSet="utf-8" />
                <title>ServiSwap | My Schedules</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
            <div className="flex justify-center items-center h-[200px] bg-red-500 mb-16">
            <h2 className="text-3xl font-medium text-white">Schedules</h2>
            </div>
            <MyBookings></MyBookings>
            <Schedules></Schedules>
        </div>
    );
};

export default MySchedules;