import React from 'react';
import Logo0 from "../../assets/img/Global.png"
import SvgCamera from "../../assets/svg/SvgCamera.jsx";
import SvgMan from "../../assets/svg/SvgMan.jsx";
import SvgZvizda from "../../assets/svg/SvgZvizda.jsx";
import Logo1 from "../../assets/img/Group_swiper 1.png"
import Logo2 from "../../assets/img/Group_swiper 2.png"
import Logo3 from "../../assets/img/Group_swiper 3.png"

import color1 from "../../assets/img/color1.svg"
import color2 from "../../assets/img/color2.svg"
import color3 from "../../assets/img/color3.svg"
import color4 from "../../assets/img/color4.svg"
import SvgStatus from "../../assets/svg/SvgStatus.jsx";
import SvgLega from "../../assets/svg/SvgLega.jsx";


import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';

import { Navigation } from 'swiper/modules';


const Slider = () => {
    return (
        <div className="sm:w-[740px] ml-[15px] h-[400px]">

            <Swiper navigation={true} modules={[Navigation]} className="mySwiper" loop={true}>
                <SwiperSlide>
                    <div>
                        <div className="absolute flex flex-col ml-[260px] mt-[50px] sm: mt-[25px] flex ">
                            <h1 className="font-bold text-[38px] text-white sm:text-[25px] ">Производим мебель <br/>
                                с 1997 года</h1>

                            <p className="text-[18px] font-normal text-white mt-[22px] sm:text-[14px] mt-[0]">Мы готовы принять и передать ваш заказ
                                на мебель <br/>
                                региональному представительству.</p>

                            <p className="text-[16px] font-light text-white mb-[39px] mt-[15px] sm: mt-[1px] text-[12px]">Для этого пришлите ваши
                                пожелания и контактную <br/>
                                информацию нам на почту
                                zakaz@lerom.ru</p>

                            <div className="flex gap-[36px]">

                                <div className="flex items-center gap-5">

                                    <div className="py-[20px] px-[20px] bg-white rounded-[50%]"><SvgCamera/></div>
                                    <div className="flex flex-col">
                                        <h1 className="text-[21px] font-semibold text-white">>100 000 м2</h1>
                                        <p className="text-[12px] font-normal text-white">Производственная <br/> площадь.</p>
                                    </div>

                                </div>

                                <div className="flex items-center gap-5">
                                    <div className="py-[20px] px-[20px] bg-white rounded-[50%]"><SvgMan/></div>
                                    <div className="flex flex-col">
                                        <h1 className="text-[21px] font-semibold text-white">>1 100 чел</h1>
                                        <p className="text-[12px] font-normal text-white">Рабочий <br/> коллектив.</p>
                                    </div>

                                </div>

                                <div className="flex items-center gap-5">
                                    <div className="py-[20px] px-[20px] bg-white rounded-[50%]"><SvgZvizda/></div>
                                    <div className="flex flex-col">
                                        <h1 className="text-[21px] font-semibold text-white">Официально</h1>
                                        <p className="text-[12px] font-normal text-white">Мы находимся в национальном <br/>
                                            реестре промышленных предприятий.</p>
                                    </div>

                                </div>
                            </div>


                        </div>
                        <img src={Logo0} alt="img"/>
                    </div>
                </SwiperSlide>

       <SwiperSlide>
                    <div>
                        <div className="absolute ml-[260px] mt-[50px]">
                            <h1 className="font-extrabold text-[50px] text-white">обновлёная <br/> “мелисса” “камелия”</h1>
                            <p className="font-light text-[25px] text-white tracking-[0.60em]">с новыми декорами</p>

                            <div className="flex my-[20px]">
                                <div>
                                    <div className="flex gap-3 mb-[14px] ">
                                        <img src={color1} alt=""/>
                                        <p className="text-white font-light ">Снежный ясень</p>
                                    </div>
                                    <div className="flex gap-3">
                                        <img src={color2} alt=""/>
                                        <p className="text-white font-light">Акация молдау</p>
                                    </div>
                                </div>
                                <div>
                                    <div className="flex gap-3 mb-[14px] ml-[30px]">
                                        <img src={color3} alt=""/>
                                        <p className="text-white font-light">Грикори джексон светлый</p>
                                    </div>
                                    <div className="flex gap-3 ml-[30px]">
                                        <img src={color4} alt=""/>
                                        <p className="text-white font-light">Ясень асахи</p>
                                    </div>
                                </div>
                            </div>

                            <button className="py-[19px] px-[25px] border-[2px] rounded-[40px] text-white text-[21px] font-medium">Подробнее</button>

                        </div>
                        <img src={Logo1} alt="img"/>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div>
                        <div className="absolute ml-[260px] mt-[50px]">
                            <h1 className="font-extrabold text-[50px] text-white">обновлёная <br/> “мелисса” “камелия”</h1>
                            <p className="font-light text-[25px] text-white tracking-[0.60em]">с новыми декорами</p>

                            <div className="flex my-[20px]">
                                <div>
                                    <div className="flex gap-3 mb-[14px] ">
                                        <img src={color3} alt=""/>
                                        <p className="text-white font-light ">Снежный ясень</p>
                                    </div>
                                    <div className="flex gap-3">
                                        <img src={color2} alt=""/>
                                        <p className="text-white font-light">Акация молдау</p>
                                    </div>
                                </div>
                                <div>
                                    <div className="flex gap-3 mb-[14px] ml-[30px]">
                                        <img src={color3} alt=""/>
                                        <p className="text-white font-light">Грикори джексон светлый</p>
                                    </div>
                                    <div className="flex gap-3 ml-[30px]">
                                        <img src={color4} alt=""/>
                                        <p className="text-white font-light">Ясень асахи</p>
                                    </div>
                                </div>
                            </div>

                            <button className="py-[19px] px-[25px] border-[2px] rounded-[40px] text-white text-[21px] font-medium">Подробнее</button>

                        </div>
                        <img src={Logo2} alt="img"/>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div>
                        <div className="absolute ml-[260px] mt-[50px]">
                            <h1 className="font-bold text-[50px] text-white">Бесплатно</h1>

                            <div className="flex gap-10 my-[30px]">
                                <div className="flex items-center gap-5">

                                    <div className="py-[20px] px-[20px] bg-white rounded-[50%]"><SvgStatus/></div>
                                    <div className="flex flex-col">
                                        <h1 className="text-[21px] font-semibold text-white">ПОДЪЕМ</h1>
                                        <p className="text-[12px] font-normal text-white">Бесплатно произведём <br/>подъем на ваш этаж.</p>
                                    </div>

                                </div>

                                <div className="flex items-center gap-5">

                                    <div className="py-[20px] px-[20px] bg-white rounded-[50%]"><SvgLega/></div>
                                    <div className="flex flex-col">
                                        <h1 className="text-[21px] font-semibold text-white">СБОРКА</h1>
                                        <p className="text-[12px] font-normal text-white">Бесплатно соберём <br/>мебель любой сложности и конфигурации.</p>
                                    </div>

                                </div>
                            </div>


                            <button className="py-[19px] px-[25px] border-[2px] rounded-[40px] text-white text-[21px] font-medium">Подробнее</button>

                        </div>
                        <img src={Logo3} alt="img"/>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div>
                        <div className="absolute ml-[260px] mt-[50px]">
                            <button className="font-bold text-[50px] text-white py-[10px] px-[20px] bg-amber-600 rounded-[50px]">Бесплатно</button>

                            <div className="flex gap-10 my-[30px]">
                                <div className="flex items-center gap-5">

                                    <div className="py-[20px] px-[20px] bg-white rounded-[50%]"><SvgStatus/></div>
                                    <div className="flex flex-col">
                                        <h1 className="text-[21px] font-semibold text-white">ПОДЪЕМ</h1>
                                        <p className="text-[12px] font-normal text-white">Бесплатно произведём <br/>подъем на ваш этаж.</p>
                                    </div>

                                </div>

                                <div className="flex items-center gap-5">

                                    <div className="py-[20px] px-[20px] bg-white rounded-[50%]"><SvgLega/></div>
                                    <div className="flex flex-col">
                                        <h1 className="text-[21px] font-semibold text-white">СБОРКА</h1>
                                        <p className="text-[12px] font-normal text-white">Бесплатно соберём <br/>мебель любой сложности и конфигурации.</p>
                                    </div>

                                </div>
                            </div>


                            <button className="py-[19px] px-[25px] border-[2px] rounded-[40px] text-white text-[21px] font-medium">Подробнее</button>

                        </div>
                        <img src={Logo3} alt="img"/>
                    </div>
                </SwiperSlide>
            </Swiper>

        </div>
    );
};

export default Slider ;