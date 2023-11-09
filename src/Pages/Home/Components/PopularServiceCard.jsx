import { Link } from "react-router-dom";


const PopularServiceCard = ({popularService}) => {

    const {_id, url,serviceName, description, price } = popularService;
    console.log(popularService);
    return (
        <div className="relative flex w-full max-w-[48rem] flex-row rounded-xl bg-white bg-clip-border text-gray-700 shadow-md" >
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
                        Monthly Charge {price}
                    </h3>
                    
                    <div className="flex justify-between items-center mt-10">
                <div className="flex justify-end items-center">
                <div className="flex gap-2 justify-center items-center">
                <img alt="" className="w-10 h-10 rounded-full hover:border-2 hover:border-red-500" src={url} />
                <h3 className="ml-3 group-hover:text-blue-600 font-semibold text-gray-800 dark:group-hover:text-gray-400 dark:text-gray-200">
                Shorif Ahamed
              </h3>
                </div>
                </div>
              <div className="">
                        <Link to={`/service-details/${_id}`}
                            className="flex items-center gap-2 px-6 py-3 font-sans text-xs font-bold text-center text-red-500 uppercase align-middle transition-all rounded-lg select-none hover:bg-red-300 hover:text-white active:bg-red-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
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
                        </Link>
                    </div>
                </div>
                </div>
        </div>
    );
};

export default PopularServiceCard;