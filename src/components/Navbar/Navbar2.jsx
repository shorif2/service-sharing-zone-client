import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../AuthProvider";
import toast from "react-hot-toast";


const Navbar2 = () => {
    const { user, logout } = useContext(AuthContext)
    console.log(user);

    const handleLogout = () => {
        logout()
            .then(() => {
                toast.success('Logout Successful')
            })

    }

    return (
        <div className="container mx-auto ">
            <div className="navbar bg-base-100 items-center ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <Link to='/' className="font-medium " >Home</Link>
                            <Link to='/services' className="font-medium " >Services</Link>
                            <Link to='/' className="font-medium " >About</Link>


                            <li className="dropdown">
                                <label tabIndex={1}>
                                    <p>Dashboard</p>
                                </label>
                                <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                                    <NavLink to='/my-services' className="flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300" href="#">
                                        My Services
                                    </NavLink>
                                    <NavLink to='/add-service' className="flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300" href="#">
                                        Add Services
                                    </NavLink>
                                    <NavLink to='/my-schedules' className="flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300" href="#">
                                        My Schedules
                                    </NavLink>
                                </ul>
                            </li>



                        </ul>
                    </div>
                    <div className="flex items-center gap-2">
                        <img src="/wrench.svg" alt="" />
                        <Link aria-label="Brand" to='/' className="text-xl font-bold">ServiSwap</Link>
                    </div>
                </div>
                {/* menu for lg */}
                <div className="navbar-center hidden lg:flex">
                    <div className=" menu menu-horizontal flex items-center px-1 gap-8 ">
                        <div className="flex gap-4">
                            <Link to='/' className="font-medium " >Home</Link>
                            <Link to='/services' className="font-medium " >Services</Link>
                        </div>
                        {/* Dropdown */}
                        <div className="hs-dropdown [--strategy:static] sm:[--strategy:fixed] [--adaptive:none] sm:[--trigger:hover] sm:py-4">
                            <button type="button" className="flex items-center w-full font-medium">
                                Dashboard
                                <svg className="ml-2 w-2.5 h-2.5 text-gray-600" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5" stroke="currentColor"  ></path>
                                </svg>
                            </button>

                            <div className="hs-dropdown-menu transition-[opacity,margin] duration-[0.1ms] sm:duration-[150ms] hs-dropdown-open:opacity-100 opacity-0 sm:w-48 hidden z-10 bg-white sm:shadow-md rounded-lg p-2 dark:bg-gray-800 sm:dark:border dark:border-gray-700 dark:divide-gray-700 before:absolute top-full sm:border before:-top-5 before:left-0 before:w-full before:h-5">
                                <NavLink to='/my-services' className="flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300" href="#">
                                    My Services
                                </NavLink>
                                <NavLink to='/add-service' className="flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300" href="#">
                                    Add Services
                                </NavLink>
                                <NavLink to='/my-schedules' className="flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300" href="#">
                                    My Schedules
                                </NavLink>

                            </div>
                        </div>
                    </div>
                </div>
                <div className="navbar-end">

                    <div>
                        {
                            user ? <div className="flex  items-center  gap-4">
                                <div>
                                    <button onClick={handleLogout} className="font-medium">Logout</button >
                                </div>
                                <div className="item-center">
                                    <div className="flex flex-col items-center">
                                        <img className="rounded-full w-[40px] h-[40px] border border-red-500" src={user.photoURL} alt="" />
                                        <p className="font-medium">{user.displayName}</p>
                                    </div>
                                </div>


                            </div> : <div><NavLink to='/log-in' className="flex items-center gap-x-2 font-medium text-gray-500 hover:text-blue-600 sm:border-l sm:border-gray-300 sm:my-6 sm:pl-6 dark:border-gray-700 dark:text-gray-400 dark:hover:text-blue-500" href="#">
                                <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                    <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" />
                                </svg>
                                Log in
                            </NavLink></div>

                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar2;