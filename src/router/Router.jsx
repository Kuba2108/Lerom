import {createBrowserRouter} from "react-router-dom";
import Layout from "./Layout.jsx";
import ErrorElement from "../components/errorElement/ErrorElement.jsx";
import HomePage from "../page/HomePage/HomePage.jsx";
import HomeNews from "../components/News/HomeNews.jsx";
import About_Us from "../components/about_us/About_Us.jsx";
import Order from "../components/order/Order.jsx";
import Threed_modeling from "../page/threed_modeling/Threed_modeling.jsx";
import To_buyer from "../page/to_buyer/To_buyer.jsx";
import React from "react";


export const router=createBrowserRouter([


    {
        path:'/',
        element:<Layout/>,
        errorElement:<ErrorElement/>,
        children:[
            {
                path:'/',
                element:<HomePage/>
            },
            {
                path:'/news',
                element:<HomeNews/>
            },
            {
                path:'/about_us',
                element:<About_Us/>
            },
            {
                path:'/Payment',
                element:<Order/>
            },
            {
                path:'/3D-моделирование',
                element:<Threed_modeling/>
            },
            {
                path:'/to_buyer',
                element:<To_buyer/>
            },

        ]
    }

])


