import { useContext } from "react";
import { AuthContext } from "../../../AuthProvider";
import PopularServiceCard from "./PopularServiceCard";

const PopularService = () => {
    const  {allService} = useContext(AuthContext)
    console.log(allService);
    return (
        <div className="py-36">
            <h2 className="text-[44px] font-medium text-center ">Popular Service</h2>
            <hr className='font-extrabold text-5xl border border-red-500 mt-3 w-[170px] mx-auto mb-24' />
        
            {/* div 1 */}
        <div className="grid grid-cols-2 gap-6">
                
                {
                allService.map(popularService => <PopularServiceCard key={popularService._id} popularService={popularService}></PopularServiceCard> )
            }
            </div>
        
        </div>
    );
};

export default PopularService;