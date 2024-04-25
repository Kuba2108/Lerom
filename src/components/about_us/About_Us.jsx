import React from 'react';
import zal from '../../assets/img/Rectangle 12 (1.png'
import Vactor from "../../assets/svg/Vactor.jsx";
import VectorThree from "../../assets/svg/VectorThree.jsx";
import zal2 from "../../assets/img/Rectangle 12 (2).png"
import zal3 from "../../assets/img/Rectangle 12 (3).png"
import SvgSky from "../../assets/svg/SvgSky.jsx";
import Prosent from "../../assets/img/unsplash__XlhZVsKykw.png"

const AboutUs = () => {
    return (
        <div className="w-full m-0 p-0">
            <div className="text-black flex gap-1 justify-center p-2 pr-[493px] text-[13px] ">
                <p className="active:font-bold">Главная >></p>
                <p className="active:font-bold">Гостиные >></p>
                <p className="active:font-bold">Коллекции</p>
            </div>


            <div className="flex justify-center pl-[70px] ">
                <img src={zal} alt="img" className="w-[456px] h-[275px] "/>


                <div className="ml-[31px]">
                    <h1 className="text-[24px] font-bold">Мелисса 2021</h1>
                    <p className="text-[16px] font-normal">Мини текст описания и преимущества <br/>
                        покупки данного направления.</p>

                    <div className="flex gap-3 items-center mt-[99px]">
                        <button className="py-[20px] px-[20px] bg-white border-blue-500 border rounded-[50%] "><Vactor/>
                        </button>
                        <p className="text-[12px] font-normal text-blue-500">Смотреть варианты композиций</p>
                    </div>
                </div>
            </div>

            <div className="flex justify-center ">

                <div className="absolute right-[1174px] top-[601px]">
                    <button
                        className="py-[15px] px-[30px] rounded bg-blue-800 text-white flex items-center gap-5 mt-[100px] ml-[80px]">Скачать
                        каталог <SvgSky/></button>

                </div>

                <div className="ml-[310px] mr-[70px]">
                    <h1 className="text-[24px] font-bold pt-[20px] text-right">Карина</h1>
                    <p className="text-[16px] font-normal">Мини текст описания и преимущества <br/> <span
                        className=" pl-[57px]">
                        покупки данного направления.
                    </span>

                    </p>

                    <div className="flex gap-3 items-center mt-[99px]">
                        <p className="text-[12px] font-normal text-blue-500">Смотреть варианты композиций</p>
                        <button className="py-[20px] px-[20px] bg-white border-blue-500 border rounded-[50%]">
                            <VectorThree/></button>


                    </div>
                </div>

                <img src={zal2} alt="img" className="w-[456px] h-[275px] "/>


            </div>


            <div className="flex justify-center pl-[70px] ">

                <div className="w-[268px] h-[380px] absolute right-[1145px]">
                    <h1 className="absolute text-[50px] p-1 text-white ">Рассрочка <br/> <span
                        className="text-[90px] font-bold text-white ">
                         Без %</span></h1>


                    <button
                        className="text-[14px] font-semibold absolute mt-[330px] ml-[50px] py-[10px] px-[50px] bg-white rounded text-blue-500">Подробнее
                    </button>
                    <img src={Prosent} alt="img"/>


                </div>

                <img src={zal3} alt="img" className="w-[456px] h-[275px] "/>


                <div className="ml-[31px] ">

                    <h1 className="text-[24px] font-bold pt-[20px]">Спальни</h1>
                    <p className="text-[16px] font-normal">Мини текст описания и преимущества <br/>
                        покупки данного направления.</p>

                    <div className="flex gap-3 items-center mt-[99px]">
                        <button className="py-[20px] px-[20px] bg-white border-blue-500 border rounded-[50%] "><Vactor/>
                        </button>
                        <p className="text-[12px] font-normal text-blue-500">Смотреть варианты композиций</p>
                    </div>


                </div>
            </div>


        </div>
    );
};

export default AboutUs;