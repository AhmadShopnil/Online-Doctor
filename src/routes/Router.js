import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import About from "../Pages/About/About";
import Appoinment from "../Pages/Appoinment/Appoinment";
import Dasboard from "../Pages/Dasboard/Dasboard/Dasboard";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import Signup from "../Pages/Signup/Signup";
import Privaterouter from "./Privaterouter";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>,

            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/about',
                element: <About></About>
            },
            {
                path: '/appoinment',
                element: <Appoinment></Appoinment>
            },
            {
                path: '/signup',
                element: <Signup></Signup>
            }

        ]
    },
    {
        path: '/dasboard',
        element: <Privaterouter><Dasboard></Dasboard></Privaterouter>
    }
])
export default router