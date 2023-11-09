import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AuthContext } from "../../../AuthProvider";
import toast from "react-hot-toast";
import OtherServiceCard from "./OtherServiceCard";


const Card = () => {
    const { user, otherService } = useContext(AuthContext)
    const [serviceDetails, setServiceDetails] = useState([])
    const params = useParams()
    const { id } = params;


    useEffect(() => {
        axios.get(`https://service-sharing-server-eight.vercel.app/service/${id}`)
            .then(res => {
                setServiceDetails(res.data)
            })
    }, [id])

    const { name, serviceName, description, price, email, url
    } = serviceDetails

    const handleSubmit = (e) => {
        e.preventDefault()
        const serviceName = e.target.name.value
        const email = e.target.email.value
        const userEmail = e.target.userEmail.value
        const serviceImage = e.target.serviceImage.value
        const date = e.target.date.value
        const area = e.target.area.value
        const price = e.target.name.value
        console.log(date);
        const orderInfo = { serviceName, email, userEmail, serviceImage, date, area, price, user };
        console.log(orderInfo);

        axios.post('http://localhost:5000/order', orderInfo)
            .then(() => {
                toast.success('Service Booking Successful !!')
            })
        
    }

    return (
        <div className="flex gap-6 mt-16 mb-28">
            {/* card */}
            <div className="border w-3/4">
                <div className="flex flex-col p-6 space-y-6 overflow-hidden rounded-lg shadow-md dark:bg-gray-900 dark:text-gray-100">
                    <div className="flex space-x-4">
                        <img alt="" src="https://source.unsplash.com/100x100/?portrait" className="object-cover w-12 h-12 rounded-full shadow dark:bg-gray-500" />
                        <div className="flex flex-col space-y-1">
                            <a rel="noopener noreferrer" href="#" className="text-sm font-semibold">{name}</a>
                            <span className="text-xs dark:text-gray-400">New York, NY</span>
                        </div>
                    </div>
                    <div>
                        <img src="https://source.unsplash.com/random/100x100/?5" alt="" className="object-cover w-full mb-4 h-full sm:h-96 dark:bg-gray-500" />
                        <h2 className="mb-1 text-xl font-semibold">{serviceName}</h2>
                        <p className="text-sm dark:text-gray-400">{description}</p>
                    </div>
                    <div className="flex flex-wrap justify-between items-center">
                        <button className="self-center px-8 py-3 font-semibold rounded border  border-red-500 text-red-500">Monthly ${price}</button>
                        {/* <button className="self-center px-8 py-3 font-semibold rounded bg-red-500 text-white">Order Now</button> */}
                        <div>
                        {/* The button to open modal */}
                        <label htmlFor="my_modal_6" className="px-8 py-4 font-semibold rounded bg-red-500  text-white">Order Now</label>

                        {/* Put this part before </body> tag */}
                        <input type="checkbox" id="my_modal_6" className="modal-toggle" />
                        <div className="modal">
                            <div className="modal-box">
                                <form onSubmit={handleSubmit} className=" flex flex-col">
                                    <div className="grid gap-4 mb-4 sm:grid-cols-2">
                                        <div>
                                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Service Name</label>
                                            <input type="text" name="name" defaultValue={user?.displayName} disabled className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Type your name" required />
                                        </div>
                                        <div>
                                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Provider Email</label>
                                            <input type="text" name="email" defaultValue={email} disabled className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Type your email" required />
                                        </div>
                                        <div>
                                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Customer Email</label>
                                            <input type="text" name="userEmail" defaultValue={user.email} disabled className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="User Email" required />
                                        </div>
                                        <div>
                                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Service Picture URL</label>
                                            <input type="text" name="serviceImage" defaultValue={url} disabled className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Service picture URL" required />
                                        </div>
                                        <div>
                                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Date</label>
                                            <input type="date" name="date" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Date" required />
                                        </div>
                                        <div>
                                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Requirement</label>
                                            <input type="text" name="area" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Service area" required />
                                        </div>
                                        <div>
                                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Price</label>
                                            <input type="number" name="price" defaultValue={user.price} disabled className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="$2999" required />
                                        </div>
                                        {/* <div>
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Category</label>
                        <select name="category" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
                            <option defaultValue="">Select category</option>
                            <option value="TV">TV/Monitors</option>
                            <option value="PC">PC</option>
                            <option value="GA">Gaming/Console</option>
                            <option value="PH">Phones</option>
                        </select>
                    </div> */}

                                    </div>

                                    <button type="submit" className="bg-red-500 text-white text-center w-max items-center   focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5">
                                        Purchase
                                    </button>

                                </form>
                                <div className="modal-action">
                                    <label htmlFor="my_modal_6" className="btn">Close!</label>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
                    
                </div>
            </div>

            {/* sidebar 2nd div */}
            <div className="border w-1/3">
                <h2 className="text-3xl font-medium text-center pt-6">Others Service</h2>
                <hr className='font-extrabold text-5xl mt-2 mb-2 border border-red-500 w-[100px] mx-auto ' />
                {
                    otherService?.map(service => <OtherServiceCard key={service._id} service={service}></OtherServiceCard>)
                }
                
            </div>
            {/* div 1 */}
            {/* <div>

                <div className="relative flex w-full max-w-[48rem] flex-row rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
                    <div className="relative w-2/5 m-0 overflow-hidden text-gray-700 bg-white rounded-r-none shrink-0 rounded-xl bg-clip-border">
                        <img
                            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1471&amp;q=80"
                            alt="image"
                            className="object-cover w-full h-full"
                        />
                    </div>
                    <div className="p-6">
                        <h6 className="block mb-4 font-sans text-base antialiased font-semibold leading-relaxed tracking-normal text-pink-500 uppercase">
                            startups
                        </h6>
                        <h4 className="block mb-2 font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                            Lyft launching cross-platform service this week
                        </h4>
                        <p className="block mb-2 font-sans text-base antialiased font-normal leading-relaxed text-gray-700">
                            Like so many organizations these days, Autodesk is a company in transition. It was until recently
                        </p>
                        <h3 className="bg-red-200 w-fit px-4 py-2 font-medium">
                            Monthly $299
                        </h3>

                        <div className="flex justify-between items-center mt-10">
                            <div className="flex items-center">
                                <img className="h-[2.375rem] w-[2.375rem] rounded-full" src="https://images.unsplash.com/photo-1486299267070-83823f5448dd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80" alt="" />
                                <h3 className="ml-3 group-hover:text-blue-600 font-semibold text-gray-800 dark:group-hover:text-gray-400 dark:text-gray-200">
                                    Shorif Ahamed
                                </h3>
                            </div>
                            <div className="inline-block items-end">
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
                            </div>
                        </div>
                    </div>

                </div>
            </div> */}
        </div>
    );
};

export default Card;