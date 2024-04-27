import React, {useState} from 'react'
import SvgClock from "../../assets/svg/SvgClock.jsx";
import SvgCompos from "../../assets/svg/SvgCompos.jsx";
import Logo from "../../assets/img/Logo 1.png"
import SvgCall from "../../assets/svg/SvgCall.jsx";
import SvgSearch from "../../assets/svg/SvgSearch.jsx";
import SvgTreegol from "../../assets/svg/SvgTreegol.jsx";
import Modal_menu from "../modal_menu/Modal_menu.jsx";

import {NavLink,Outlet} from "react-router-dom";

const Header = () => {
    const [open, setOpen] = useState(false)
    return (

        <>
                <div>
                    <div className="flex justify-around m-0 pt-[8px] bg-white ">

                        <div className="flex flex-col">

                            <div className="flex">
                                <h1 className=""><SvgClock/></h1>
                                <p className="font-normal pl-[10px] text-[16px] sm:text-[30px]">Пн-Пт с 10:00 до 20:00 <br/>
                                    Сб-Вс с 10:00 до 19:00</p>
                            </div>


                            <div className="flex items-center gap-2 pt-[8px] ">
                                <h2><SvgCompos/></h2>
                                <p className="font-normal underline text-[#316087] text-[16px] sm:text-[30px]">Наши салоны</p>
                            </div>

                        </div>


                        <div>
                            <img src={Logo} alt="img_logo" className="w-[185px] h-[92px] sm:w-[390px] h-[200px]  "/>
                        </div>



                        <div className="">
                            <div className="flex ">
                                <h3 className="text-[14px] font-normal sm:text-[30px] ">Отдел продаж:</h3>

                                <h1 className="pt-[6px] px-[9px]">
                                    <SvgCall/>
                                </h1>

                                <p className="text-[14px] font-normal sm:text-[30px]">
                                    8 (495) 664-54-57 <br/>
                                    8 (929) 928-86-35
                                </p>
                            </div>

                            <div>


                                <div className="flex pt-[12px]">
                                    <h1 className="font-normal text-[14px] sm:text-[30px]">Звонки по Росии:</h1>
                                    <p className="pt-[6px] px-[5px] font-normal text-[14px]"><SvgCall/></p>

                                    <p className="font-normal text-[14px] sm:text-[30px]">8-800-000-00-00 <br/> <span
                                        className="text-red-700 pl-[10px] text-[14px] sm:text-[30px]">
                                    Бесплатно
                                </span>
                                    </p>
                                </div>
                            </div>


                        </div >


                    </div>

                    <div className="w-full my-[20px] ">
                        <hr/>
                    </div>




                    <div className="flex justify-around items-center mb-[20px]">




                        <nav className="flex gap-[43px] text-[16px] font-normal">

                            <button onClick={() => setOpen(!open)}
                                    className="flex items-center gap-2 text-red-700 active:text-blue-500 relative">
                                <Modal_menu/>
                            </button>


                            <NavLink to="">Главная</NavLink>
                            <NavLink to="/3D-моделирование">3D-моделирование</NavLink>
                            <NavLink to="/to_buyer">Покупателю</NavLink>
                            <NavLink to="/Payment">Доставка и оплата</NavLink>

                        </nav>

                        <div className="flex items-center border border-blue-500 rounded-[20px] ">

                            <input className="w-[330px] h-[35px] px-[20px] py-[10px] border-0 bg-transparent focus:outline-none
                           "
                                type="text"
                                placeholder="Поиск по сайту..."/>
                            <p className="pr-[3px] ">
                                <SvgSearch/>
                            </p>

                        </div>

                    </div>
                    <hr/>

                </div>
        </>


    )
}

export default Header