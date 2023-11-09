
import { useContext, useEffect, useState } from "react";

import { AuthContext } from "../../AuthProvider";
import axios from "axios";
import AddedServiceCard from "./Components/AddedServiceCard";
import { Helmet } from "react-helmet";


const MyServices = () => {
const[ myAddedService, setMyAddedService] = useState([])
    const {user} = useContext(AuthContext)

    const {email} = user;
    useEffect(()=> {
        axios.get(`https://service-sharing-server-eight.vercel.app/addedService?email=${email}`)
    .then(res => 
        setMyAddedService(res.data) )
    },[email])
    return (
        <div>
             <Helmet>
                <meta charSet="utf-8" />
                <title>ServiSwap | My Services</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
            <div className="flex justify-center items-center h-[200px] bg-red-500">
            <h2 className="text-3xl text-white font-medium">My Service</h2>
            </div>
            {/* <p className="text-3xl font-medium text-center pt-20 pb-10">My all services</p> */}

            <div className="grid grid-cols-3 gap-4 pb-28">
            {myAddedService?.map(myService => <AddedServiceCard key={myService._id} myService={myService} myAddedService={myAddedService} setMyAddedService={setMyAddedService} ></AddedServiceCard>)}
            </div>
            
        </div>
    );
};

export default MyServices;