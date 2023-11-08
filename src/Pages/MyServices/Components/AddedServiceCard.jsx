
import axios from 'axios';
import { useContext,} from 'react';
import toast from 'react-hot-toast';
// import { Link } from 'react-router-dom';
import { AuthContext } from '../../../AuthProvider';
import { Link } from 'react-router-dom';



const AddedServiceCard = ({ myService, myAddedService, setMyAddedService }) => {


    const { user } = useContext(AuthContext)

    const { _id, name, email, review, url, serviceName, area, price, category, description } = myService;

    console.log(serviceName, name);

    const handleDelete = (id) => {

        axios.delete(`https://service-sharing-server-eight.vercel.app/service/${id}`)
            .then(() => {
                toast.success('Deleted succeed')
            })
        console.log(id);
    }
   
    return (
        <div>
            <div className="py-6 md:py-10">
                <div className="relative flex  w-full  flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-lg">
                    <div className="relative mx-4 mt-4 overflow-hidden text-white shadow-lg rounded-xl bg-blue-gray-500 bg-clip-border shadow-blue-gray-500/40">
                        <img className="block"
                            src='https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80'
                            alt="ui/ux review check"
                        />
                    </div>
                    <div className="p-6">
                        <div className="flex items-center justify-between mb-3">
                            <h5 className="block font-sans text-xl antialiased font-medium leading-snug tracking-normal text-blue-gray-900">
                                {serviceName}
                            </h5>
                            <p className="flex items-center font-bold text-xl gap-1.5 font-sans leading-relaxed text-blue-gray-900 antialiased">
                                {/* <span className="text-red-500 font-extrabold"><HiOutlineCurrencyDollar></HiOutlineCurrencyDollar></span> */}
                                {price}
                            </p>
                        </div>
                        <p className="block font-sans text-base antialiased font-light leading-relaxed text-gray-700">
                            {description}
                        </p>
                        {/* button */}

                    </div>

                    {/* end button */}
                    <div className="p-6 space-y-3">

                        <Link to={`/update-service/${_id}`}
            className="block w-full select-none rounded-lg bg-red-500 py-3.5 px-7 text-center align-middle font-sans text-sm font-bold uppercase text-white shadow-md shadow-red-500/20 transition-all hover:shadow-lg hover:shadow-red-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            
            data-ripple-light="true"
          >
            Update
          </Link>


                        <button onClick={() => { handleDelete(_id) }}
                            className="block w-full select-none rounded-lg bg-red-500 py-3.5 px-7 text-center align-middle font-sans text-sm font-bold uppercase text-white shadow-md shadow-red-500/20 transition-all hover:shadow-lg hover:shadow-red-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
                            DELETE
                        </button>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddedServiceCard;