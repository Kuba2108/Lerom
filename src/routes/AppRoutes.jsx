// import React from 'react'
import Header from '../components/Header/Header'
// import {Outlet, Route, Routes} from 'react-router'
import HomePage from '../page/HomePage/HomePage'
import Footer from '../components/Footer/Footer'
import HomeNews from "../components/News/HomeNews.jsx";
import About_Us from "../components/about_us/About_Us.jsx";
<<<<<<< HEAD
import To_buyer from "../components/to_buyer/To_buyer.jsx";
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
=======
import Order from '../components/order/Order.jsx'
import Threed_modeling from "../page/threed_modeling/Threed_modeling.jsx";
import To_buyer from "../page/to_buyer/To_buyer.jsx";


// const Root = () => {
//     return (
//         <>
//             {/*<Header />*/}
//             {/*<Outlet />*/}
//             {/*<Footer/>*/}
//         </>
//     )
// }


// const AppRoutes = () => {
//     return (
//         <Routes>
//
//                 {/*<Route path='/' element={<HomePage/>}/>*/}
//                 {/*<Route path='/news' element={<HomeNews/>}/>*/}
//                 {/*<Route path='/about_us' element={<About_Us/>}/>*/}
//                 {/*<Route path='/Payment' element={<Order/>}/>*/}
//                 {/*<Route path='/3D-моделирование' element={<Threed_modeling/>}/>*/}
//                 {/*<Route path='/to_buyer' element={<To_buyer/>}/>*/}
//
//         </Routes>
//     )
// }
//
// export default AppRoutes
>>>>>>> 22e02f34a721d757bb8e381b045912b7cb3fd154
