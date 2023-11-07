import { Link } from "react-router-dom";


const ServiceCard = ({service}) => {
    // eslint-disable-next-line react/prop-types
    const {_id,serviceName, area, price, description, url, name} = service
    return (
        <div className="relative flex w-full flex-row rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
                <div className="relative w-2/5 m-0 overflow-hidden text-gray-700 bg-white rounded-r-none shrink-0 rounded-xl bg-clip-border">
                    <img
                        src={url}
                        alt="image"
                        className="object-cover w-full h-full"
                    />
                </div>
                <div className="p-6">
                    <h6 className="block mb-4 font-sans text-base antialiased font-semibold leading-relaxed tracking-normal text-pink-500 uppercase">
                        startups
                    </h6>
                    <h4 className="block mb-2 font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                        {serviceName}
                    </h4>
                    <p className="block mb-2 font-sans text-base antialiased font-normal leading-relaxed text-gray-700">
                    {description}
                    </p>
                    <h3 className="bg-red-200 w-fit px-4 py-2 font-medium">
                        Monthly ${price}
                    </h3>
                    <h3 className="bg-red-200 w-fit px-4 py-2 font-medium">
                        Monthly ${area}
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
                            className="flex items-center gap-2 px-6 py-3 font-sans text-xs font-bold text-center text-pink-500 uppercase align-middle transition-all rounded-lg select-none hover:bg-pink-500/10 active:bg-pink-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                            type="button"
                        >
                            Details
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"

                                stroke="currentColor"
                                aria-hidden="true"
                                className="w-4 h-4"
                            >
                                <path

                                    d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                                ></path>
                            </svg>
                        </button>
                        </Link>
                    </div>
                </div>
                </div>
                
            </div>
    );
};

export default ServiceCard;