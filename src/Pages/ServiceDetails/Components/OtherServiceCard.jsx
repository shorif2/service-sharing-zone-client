import { Link } from "react-router-dom";


const OtherServiceCard = ({service}) => {
    const {_id, url, serviceName, area } = service;
    console.log(service);
    return (
        <div className=" p-8 sm:flex sm:space-x-6 dark:bg-gray-900 dark:text-gray-100">
                    <div className="flex-shrink-0 mb-6 h-44 sm:h-32 sm:w-32 sm:mb-0">
                        <img src={url} alt="" className="object-cover object-center w-full h-full rounded dark:bg-gray-500" />
                    </div>
                    <div className="flex flex-col space-y-4">
                        <div>
                            <h2 className="text-2xl font-semibold">{serviceName}</h2>
                            <span className="text-sm dark:text-gray-400">{area}</span>
                        </div>
                        <div className="space-y-1">
                            <span className="flex items-center space-x-2">
                            <Link to={`/service-details/${_id}`}
                            className="flex items-center gap-2 font-sans text-xs font-bold text-center text-red-500 uppercase align-middle transition-all rounded-lg select-none   active:bg-red-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
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
                            </span>
                        </div>
                    </div>
                </div>
    );
};

export default OtherServiceCard;