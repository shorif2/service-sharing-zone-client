
import Ser from "./Components/Ser";


const MyServices = () => {
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