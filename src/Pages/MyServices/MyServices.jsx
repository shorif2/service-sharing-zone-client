
import { useContext, useEffect, useState } from "react";
import Ser from "./Components/Ser";
import { AuthContext } from "../../AuthProvider";
import axios from "axios";


const MyServices = () => {
const[ myAddedService, setMyAddedService] = useState([])
    const {user} = useContext(AuthContext)

    const {email} = user;
    useEffect(()=> {
        axios.get(`http://localhost:5000/addedService?email=${email}`)
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
            <Ser></Ser>
        </div>
    );
};

export default MyServices;