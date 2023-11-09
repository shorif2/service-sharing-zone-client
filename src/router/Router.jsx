import {
    createBrowserRouter,
    
  } from "react-router-dom";
import Home from "../Pages/Home/Home";
import MainLayout from "../layout/MainLayout";
import Services from "../Pages/Services/Services";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import MyServices from "../Pages/MyServices/MyServices";
import AddService from "../Pages/AddService/AddService";
import MySchedules from "../Pages/MySchedules/MySchedules";
// import PrivetRouter from "./PrivetRouter";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import ServiceDetails from "../Pages/ServiceDetails/ServiceDetails";
import UpdateService from "../Pages/UpdateService/UpdateService";
import PrivetRouter from "./PrivetRouter";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
        path: '/',
        element: <Home></Home>
        },
        {
        path: 'services',
        element: <Services></Services>
        },
        {
        path: 'log-in',
        element: <Login></Login>
        },
        {
        path: 'sign-up',
        element: <SignUp></SignUp>
        },
        {
        path: 'my-services',
        element:<PrivetRouter><MyServices></MyServices></PrivetRouter> ,
        
        },
        {
        path: 'add-service',
        element: <PrivetRouter><AddService></AddService></PrivetRouter> 
        },
        {
        path: 'my-schedules',
        element: <PrivetRouter><MySchedules></MySchedules></PrivetRouter> 
        },
        {
          path: 'service-details/:id',
          element: <PrivetRouter><ServiceDetails></ServiceDetails></PrivetRouter> 
        },
        {
          path: 'update-service/:id',
          element: <PrivetRouter><UpdateService></UpdateService></PrivetRouter> 
        }
      ]
    },
  ]);
export default router;