import { Outlet } from "react-router-dom";

import Navbar2 from "../components/Navbar/Navbar2";
import Footer from "../components/Footer/Footer";
import { Toaster } from "react-hot-toast";





const MainLayout = () => {
    return (
        <div className="container mx-auto">
            {/* <Navbar></Navbar> */}
            
            <Navbar2></Navbar2>
            <Outlet></Outlet>
            <Footer></Footer>
            <Toaster/>
           
        </div>
    );
};

export default MainLayout;