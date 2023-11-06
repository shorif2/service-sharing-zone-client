import { Link } from "react-router-dom";


const Ser = () => {
  return (
    <div className="grid grid-cols-3 pb-28">
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
              brand name dao
            </h5>
            <p className="flex items-center font-bold text-xl gap-1.5 font-sans leading-relaxed text-blue-gray-900 antialiased">
              {/* <span className="text-red-500 font-extrabold"><HiOutlineCurrencyDollar></HiOutlineCurrencyDollar></span> */}
              price
            </p>
          </div>
          <p className="block font-sans text-base antialiased font-light leading-relaxed text-gray-700">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis neque autem provident atque saepe, labore explicabo laboriosam, libero iusto quaerat aut sit, fugiat ab natus officiis quia nesciunt ex sequi.
          </p>
          {/* button */}

        </div>

        {/* end button */}
        <div className="p-6 space-y-3">
        <Link to='/update-service'>
        <button
            className="block w-full select-none rounded-lg bg-red-500 py-3.5 px-7 text-center align-middle font-sans text-sm font-bold uppercase text-white shadow-md shadow-red-500/20 transition-all hover:shadow-lg hover:shadow-red-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            type="button"
            data-ripple-light="true"
          >
            Update
          </button>
        </Link>

          <button
            className="block w-full select-none rounded-lg bg-red-500 py-3.5 px-7 text-center align-middle font-sans text-sm font-bold uppercase text-white shadow-md shadow-red-500/20 transition-all hover:shadow-lg hover:shadow-red-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            type="button"
            data-ripple-light="true"
          >
            DELETE
          </button>

        </div>
      </div>
    </div>
    {/* div 2 */}
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
              brand name dao
            </h5>
            <p className="flex items-center font-bold text-xl gap-1.5 font-sans leading-relaxed text-blue-gray-900 antialiased">
              {/* <span className="text-red-500 font-extrabold"><HiOutlineCurrencyDollar></HiOutlineCurrencyDollar></span> */}
              price
            </p>
          </div>
          <p className="block font-sans text-base antialiased font-light leading-relaxed text-gray-700">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis neque autem provident atque saepe, labore explicabo laboriosam, libero iusto quaerat aut sit, fugiat ab natus officiis quia nesciunt ex sequi.
          </p>
          {/* button */}

        </div>

        {/* end button */}
        <div className="p-6 space-y-3">
          <button
            className="block w-full select-none rounded-lg bg-red-500 py-3.5 px-7 text-center align-middle font-sans text-sm font-bold uppercase text-white shadow-md shadow-red-500/20 transition-all hover:shadow-lg hover:shadow-red-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            type="button"
            data-ripple-light="true"
          >
            Update
          </button>

          <button
            className="block w-full select-none rounded-lg bg-red-500 py-3.5 px-7 text-center align-middle font-sans text-sm font-bold uppercase text-white shadow-md shadow-red-500/20 transition-all hover:shadow-lg hover:shadow-red-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            type="button"
            data-ripple-light="true"
          >
            DELETE
          </button>

        </div>
      </div>
    </div>
    {/* div 3 */}
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
              brand name dao
            </h5>
            <p className="flex items-center font-bold text-xl gap-1.5 font-sans leading-relaxed text-blue-gray-900 antialiased">
              {/* <span className="text-red-500 font-extrabold"><HiOutlineCurrencyDollar></HiOutlineCurrencyDollar></span> */}
              price
            </p>
          </div>
          <p className="block font-sans text-base antialiased font-light leading-relaxed text-gray-700">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis neque autem provident atque saepe, labore explicabo laboriosam, libero iusto quaerat aut sit, fugiat ab natus officiis quia nesciunt ex sequi.
          </p>
          {/* button */}

        </div>

        {/* end button */}
        <div className="p-6 space-y-3">
          <button
            className="block w-full select-none rounded-lg bg-red-500 py-3.5 px-7 text-center align-middle font-sans text-sm font-bold uppercase text-white shadow-md shadow-red-500/20 transition-all hover:shadow-lg hover:shadow-red-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            type="button"
            data-ripple-light="true"
          >
            Update
          </button>

          <button
            className="block w-full select-none rounded-lg bg-red-500 py-3.5 px-7 text-center align-middle font-sans text-sm font-bold uppercase text-white shadow-md shadow-red-500/20 transition-all hover:shadow-lg hover:shadow-red-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            type="button"
            data-ripple-light="true"
          >
            DELETE
          </button>

        </div>
      </div>
    </div>
    </div>
  );
};

export default Ser;