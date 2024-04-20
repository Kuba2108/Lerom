import React from 'react'
import Header from '../components/Header/Header'
import { Outlet, Route, Routes } from 'react-router'
import HomePage from '../page/HomePage/HomePage'
import Footer from '../components/Footer/Footer'


const Root = () => {
    return(
        <>
        <Header/>
        <Outlet/>
        <Footer/>
        </>
    )
}


const AppRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<Root/>}>
            <Route path='/' element={<HomePage/>} />
        </Route>

    </Routes>
  )
}

export default AppRoutes