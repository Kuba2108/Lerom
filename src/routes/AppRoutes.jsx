import React from 'react'
import Header from '../components/Header/Header'
import { Outlet, Route, Routes} from 'react-router'
import HomePage from '../page/HomePage/HomePage'
import Footer from '../components/Footer/Footer'
import HomeNews from "../components/News/HomeNews.jsx";
import About_Us from "../components/about_us/About_Us.jsx";
import Threed_modeling from "../page/threed_modeling/Threed_modeling.jsx";
import To_buyer from "../page/to_buyer/To_buyer.jsx";
import Delivery from "../components/delivery/Delivery.jsx";


const Root = () => {
    return (
        <>
            <Header />
            <Outlet />
            <Footer/>
        </>
    )
}


const AppRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<Root />}>
            <Route path='/' element={<HomePage />} />
            <Route path='/news' element={<HomeNews />} />
            <Route path='/about_us' element={<About_Us />} />
            <Route path='/3D-моделирование' element={<Threed_modeling />} />
            <Route path='/to_buyer' element={<To_buyer />} />
            <Route path='/delivery' element={<Delivery />} />


        </Route>
    </Routes>
  )
}

export default AppRoutes