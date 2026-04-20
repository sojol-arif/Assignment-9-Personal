import { createBrowserRouter } from "react-router";
import HomeLayout from "../layouts/HomeLayout";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register"; 
import AuthenticationLayout from "../layouts/AuthenticationLayout";
import PrivateRoute from "../provider/PrivateRoute";
import ToyDetails from "../pages/ToyDetails";

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
        path: "/toy-details/:toyId",
        element: <PrivateRoute><ToyDetails></ToyDetails></PrivateRoute>,
        loader: () => fetch('/toys.json'),
    },
    {
        path: "/*",
        element: <h2>Error 404</h2>
    }
]);

export default router;