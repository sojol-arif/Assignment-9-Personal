import { createBrowserRouter } from "react-router";
import HomeLayout from "../layouts/HomeLayout";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register"; 
import AuthenticationLayout from "../layouts/AuthenticationLayout";
import PrivateRoute from "../provider/PrivateRoute";
import ToyDetails from "../pages/ToyDetails";
import Error from "../pages/Error";
import MyProfile from "../pages/MyProfile";
import ForgetPassword from "../pages/ForgetPassword";

const router = createBrowserRouter([
    {
        path:"/",
        element: <HomeLayout></HomeLayout>,
        children:[
            {
                path: "/",
                element: <Home></Home>,
                loader: () => fetch('/toys.json')
            }
        ]
    },
    {
        path:"/auth/",
        element: <AuthenticationLayout></AuthenticationLayout>,
        children:[
            {
                path: "/auth/login",
                element: <Login></Login>,
            },
            {  
                path: "/auth/register",
                element: <Register></Register>,
            }
        ]
    },
    {
        path:"/profile",
        element: <PrivateRoute><MyProfile></MyProfile></PrivateRoute>,
    },
    {
        path:"/forget-password",
        element: <ForgetPassword></ForgetPassword>,
    },
    {
        path: "/toy-details/:toyId",
        element: <PrivateRoute><ToyDetails></ToyDetails></PrivateRoute>,
        loader: () => fetch('/toys.json'),
    },
    {
        path: "/*",
        element: <Error></Error>
    }
]);

export default router;