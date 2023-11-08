import { useContext } from "react";
import { AuthContext } from "../../../AuthProvider";
import PopularServiceCard from "./PopularServiceCard";
import { Link } from "react-router-dom";

const PopularService = () => {
    const  {popularService} = useContext(AuthContext)

    return (
        <div className="py-36">
            <h2 className="text-[44px] font-medium text-center ">Popular Service</h2>
            <hr className='font-extrabold text-5xl border border-red-500 mt-3 w-[170px] mx-auto mb-24' />
        
            {/* div 1 */}
        <div className="grid grid-cols-2 gap-6">
                
                {
                popularService.map(popularService => <PopularServiceCard key={popularService._id} popularService={popularService}></PopularServiceCard> )
            }
            </div>
            <div className="flex justify-center items-center py-16 ">
            <Link to='/services' className="bg-red-500 rounded-lg text-white font-medium py-[14px] px-8 ml-2">Show all Service</Link>
            </div>
        </div>
    );
};

export default PopularService;