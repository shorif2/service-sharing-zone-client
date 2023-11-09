import { useContext, useEffect, useState, } from "react";
import { AuthContext } from "../../../AuthProvider";
import ServiceCard from "./ServiceCard";


const AllService = () => {
    const  {buttonClicked, filterService, handleSearch} = useContext(AuthContext)
    const[filterSearchItem, setFilterSearchItem] = useState([])
    // 
    

useEffect(()=>{
    setFilterSearchItem(filterService)
},[])


    return (
        <div className="mb-28">
            <div>
        <div>
        <div className="hero-content flex flex-col items-start bg-white p-14 rounded-lg">

<div className="flex flex-col w-full items-start">
    <h2 className="text-[44px] font-medium">
        Find The perfect
    </h2>
    <h2 className="text-[44px] font-medium">
    professional for you
    </h2>
    <h3 className="text-2xl font-medium text-gray-400 mb-6">
        Get free quotes within minutes
    </h3>
</div>

<form onSubmit={handleSearch}>
    <div className="join  border">
        <input type="text" name='text' className="w-[300px] py-3 font-medium" placeholder="What service are you looking for?" />
        <input type="text" className="py-3 font-medium" placeholder="Postcode" />
    </div>
    <button type='submit' className="bg-red-500 text-white font-medium py-[14px] px-8 ml-2">Search</button>
</form>
<p className="font-medium">Popular: House Cleaning, Web Design, Personal Trainers</p>

</div>
        </div>
            </div>
            <div>
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
        </div>
        // "flex justify-center py-10"
    );
};

export default AllService;