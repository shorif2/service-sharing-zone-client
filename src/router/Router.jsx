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
import PrivetRouter from "./PrivetRouter";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";

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
        element: <PrivetRouter><Services></Services></PrivetRouter>
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
        element: <MyServices></MyServices>
        },
        {
        path: 'add-service',
        element: <AddService></AddService>
        },
        {
        path: 'my-schedules',
        element: <MySchedules></MySchedules>
        }
      ]
    },
  ]);
export default router;