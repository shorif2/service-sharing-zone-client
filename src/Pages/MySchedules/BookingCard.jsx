import { Link } from "react-router-dom";


const BookingCard = ({booked}) => {
    const {_id, date, area, serviceName, serviceImage} = booked;


    return (
        <div>
            <div className="max-w-md border p-8 sm:flex sm:space-x-6 dark:bg-gray-900 dark:text-gray-100">
                    <div className="flex-shrink-0 w-full mb-6 h-44 sm:h-32 sm:w-32 sm:mb-0">
                        <img src={serviceImage} alt="" className="object-cover object-center w-full h-full rounded dark:bg-gray-500" />
                    </div>
                    <div className="flex flex-col">
                        <div>
                            <h2 className="text-2xl font-semibold">{serviceName}</h2>
                            <span className="text-sm dark:text-gray-400">{area}</span>
                        </div>
                        <div className="">
                            <h2 className="py-2">{date}</h2>
                        <div className="flex text-sm divide-x">
						<button className="flex items-center px-2 py-1 pl-0 space-x-1">
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-4 h-4 fill-current">
								<path d="M96,472a23.82,23.82,0,0,0,23.579,24H392.421A23.82,23.82,0,0,0,416,472V152H96Zm32-288H384V464H128Z"></path>
								<rect width="32" height="200" x="168" y="216"></rect>
								<rect width="32" height="200" x="240" y="216"></rect>
								<rect width="32" height="200" x="312" y="216"></rect>
								<path d="M328,88V40c0-13.458-9.488-24-21.6-24H205.6C193.488,16,184,26.542,184,40V88H64v32H448V88ZM216,48h80V88H216Z"></path>
							</svg>
							<span>Remove</span>
						</button>
						<Link to={`/service-details/${_id}`} type="button" className="flex items-center px-2 py-1 space-x-1">
							<span>Details</span>
						</Link>
					</div>
                        </div>
                    </div>
                </div>
        </div>
    );
};

export default BookingCard;