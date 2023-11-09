import { Link } from "react-router-dom";


const ServiceCard = ({service}) => {
    // eslint-disable-next-line react/prop-types
    const {_id,serviceName, area, price, description, url, name} = service
    return (
        <div className="relative  px-28 w-full mx-auto">
                <div className="flex justify-start items-center px-4 w-3/4 h-[300px] flex-row gap-6 border-b-[1px] hover:border-1 hover:shadow-md">
                <div className="relative overflow-hidden text-gray-700 bg-white rounded-r-none shrink-0 rounded-xl">
                    <img
                        src={url}
                        alt="image"
                        className="object-cover w-[220px] h-[220px]"
                    />
                </div>
                <div className="w-full">
                    <h4 className="block mb-2 font-sans text-3xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                        {serviceName}
                    </h4>
                    <p className="block mb-2 font-sans text-base antialiased font-normal leading-relaxed text-gray-700">
                    {description}
                    </p>
                    <h3 className="font-medium">
                    Monthly service Charge ${price}
                    </h3>
                    <h3 className="font-medium">Service area {area}
                    </h3>
                    
                    <div className="flex justify-between items-center mt-10">
                <div className="flex items-center">
                <img className="h-[2.375rem] w-[2.375rem] rounded-full" src="https://images.unsplash.com/photo-1486299267070-83823f5448dd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80" alt="" />
                <h3 className="ml-3 group-hover:text-blue-600 font-semibold text-gray-800 dark:group-hover:text-gray-400 dark:text-gray-200">
                {name}
              </h3>
                </div>
              <div className="inline-block items-end">
                        <Link to={`http://localhost:5173/service-details/${_id}`}>
                        <button
                            className="flex btn btn-outline items-center gap-2 px-6 py-3 font-sans text-xs font-bold text-center text-red-500 uppercase align-middle transition-all rounded-lg select-none hover:bg-red-500/10 active:bg-red-500/30 disabled:pointer-events-none "
                            type="button"
                        >
                            Details
                        </button>
                        </Link>
                    </div>
                </div>
                </div>
                </div>
                
            </div>
    );
};

export default ServiceCard;