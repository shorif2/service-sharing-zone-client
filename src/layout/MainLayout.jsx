import { Outlet } from "react-router-dom";

import Navbar2 from "../components/Navbar/Navbar2";



const MainLayout = () => {
    return (
        <div className="">
            {/* <Navbar></Navbar> */}
            <Navbar2></Navbar2>
            <Outlet></Outlet>
        </div>
    );
};

export default MainLayout;