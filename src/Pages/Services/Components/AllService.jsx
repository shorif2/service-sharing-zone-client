import { useContext } from "react";
import { AuthContext } from "../../../AuthProvider";
import ServiceCard from "./ServiceCard";


const AllService = () => {

    const  {buttonClicked, filterService} = useContext(AuthContext)

    console.log(filterService.length);

    return (
        <div className="mb-28">
            <h3 className="text-[44px] font-medium text-center pt-28">All Service</h3>
            <hr className='font-extrabold text-5xl border border-red-500 mb-28 w-[130px] mt-2  mx-auto' />
            <div className="grid grid-col-1">
                {/* div 1 */}
            {
                filterService.map(service => <ServiceCard key={service._id} service={service} > </ServiceCard>)
            }
            </div>
        <div onClick={buttonClicked} className={filterService.length > 6 ? 'hidden': 'flex justify-center py-10'}>
        <button className="bg-red-500 text-xl text-white font-medium py-2 px-6 rounded-lg">
            See All
            </button>
        </div>
        </div>
        // "flex justify-center py-10"
    );
};

export default AllService;