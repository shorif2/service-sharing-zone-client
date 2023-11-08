import { useContext } from "react";
import { AuthContext } from "../../../AuthProvider";
import ServiceCard from "./ServiceCard";


const AllService = () => {

    const  {buttonClicked, filterService} = useContext(AuthContext)

    console.log(filterService.length);

    return (
        <div className="mb-28">
            <h3 className="text-[44px] font-medium text-center py-28">All Service</h3>

            <div className="grid grid-col-1 gap-6">
                {/* div 1 */}
            {
                filterService.map(service => <ServiceCard key={service._id} service={service} > </ServiceCard>)
            }
            </div>
        <div onClick={buttonClicked} className={filterService.length > 6 ? 'hidden': 'flex justify-center py-10'}>
        <button className="bg-red-500 text-2xl text-white font-medium py-2 px-4 rounded-lg">
            See All Service
            </button>
        </div>
        </div>
        // "flex justify-center py-10"
    );
};

export default AllService;