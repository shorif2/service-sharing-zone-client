
import { useContext, useEffect, useState } from "react";

import { AuthContext } from "../../AuthProvider";
import axios from "axios";
import AddedServiceCard from "./Components/AddedServiceCard";


const MyServices = () => {
const[ myAddedService, setMyAddedService] = useState([])
    const {user} = useContext(AuthContext)

    const {email} = user;
    useEffect(()=> {
        axios.get(`https://service-sharing-server-eight.vercel.app/addedService?email=${email}`)
    .then(res => 
        setMyAddedService(res.data) )
    },[email])

console.log(email);
    console.log(myAddedService);
    return (
        <div>
            <div className="flex justify-center items-center h-[200px] bg-red-500">
            <h2 className="text-3xl font-medium">My Service</h2>
            </div>
            <p className="text-3xl font-medium text-center pt-20 pb-10">My all services here</p>

            <div className="grid grid-cols-3 gap-4">
            {myAddedService?.map(myService => <AddedServiceCard key={myService._id} myService={myService} myAddedService={myAddedService} setMyAddedService={setMyAddedService} ></AddedServiceCard>)}
            </div>
            
        </div>
    );
};

export default MyServices;