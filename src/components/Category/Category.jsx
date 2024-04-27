import React from "react";
import LivingRoom from "../../assets/page/LivingRoom.png";
import ArrowLeft from "../../assets/svg/ArrowLeft.svg";
import ArrowRight from "../../assets/svg/ArrowRight.svg";
import Bedroom from "../../assets/page/bedroom.png";
import Children from "../../assets/page/Children.png";
import Hallway from "../../assets/page/Hallway.png";
import Bed from "../../assets/page/Bed.png";
import { useNavigate } from "react-router-dom";

const Category = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="flex xl:w-[1200px] lg:w-[1024px] md:w-[768px] sm:w-[640px] box-border">
        <img className="w-[390px]" src={LivingRoom} alt="" />
        <div className="ml-[40px] box-border text-slate-900 mt-[54px]">
          <h1 className="text-4xl  font-semibold ">ГОСТИННЫЕ</h1>
          <p className="mt-[7px] w-[350px] text-lg">
            Мини текст описания и преимущества покупки данного направления.
          </p>
          <p className="text-blue-700 mt-4 text-lg">
            Товары под заказ в наличии: 2030шт
          </p>
          <p className="text-slate-900 text-xl mt-5">Цены от: 42.000р</p>
          <button  onClick={() => {
              navigate(`/about_us`);
            }} className="border-blue-950 border-[1px] rounded-full p-4 mt-6 mb-6 ">
            <img src={ArrowLeft} alt="img" />
          </button>
        </div>

        <img className="w-[390px] " src={Bedroom} alt="" />
        <div className="ml-[40px] text-slate-900 mt-[54px]">
          <h1 className="text-4xl  font-semibold ">СПАЛЬНИ</h1>
          <p className="mt-[7px] w-[350px] text-lg">
            Мини текст описания и преимущества покупки данного направления.
          </p>
          <p className="text-blue-700 mt-4 text-lg">
            Товары под заказ в наличии: 2030шт
          </p>
          <p className="text-slate-900 text-xl mt-5">Цены от: 42.000р</p>
          <button
            className="border-blue-950 border-[1px] rounded-full p-4 mt-6"
          >
            <img src={ArrowLeft} alt="" />
          </button>
        </div>
      </div>

      <div className="flex">
        <div className="ml-[25px] text-slate-900 mt-[54px]">
          <h1 className="text-4xl  font-semibold ">ДЕТСКИЕ</h1>
          <p className="mt-[7px] w-[350px] text-lg">
            Мини текст описания и преимущества покупки данного направления.
          </p>
          <p className="text-blue-700 mt-4 text-lg">
            Товары под заказ в наличии: 2030шт
          </p>
          <p className="text-slate-900 text-xl mt-4">Цены от: 42.000р</p>
          <button className="border-blue-950 border-[1px] rounded-full p-4 mt-2">
            <img src={ArrowRight} alt="" />
          </button>
        </div>
        <img className="w-[390px]" src={Children} alt="" />



        <div className="ml-[40px] text-slate-900 mt-[54px]">
          <h1 className="text-4xl  font-semibold ">ПРИХОЖИЕ</h1>
          <p className="mt-[7px] w-[350px] text-lg">
            Мини текст описания и преимущества покупки данного направления.
          </p>
          <p className="text-blue-700 mt-4 text-lg">
            Товары под заказ в наличии: 2030шт
          </p>
          <p className="text-slate-900 text-xl mt-4">Цены от: 42.000р</p>
          <button className="border-blue-950 border-[1px] rounded-full p-4 mt-2">
            <img src={ArrowRight} alt="" />
          </button>
        </div>
        <img className="w-[390px]" src={Hallway} alt="" />
      </div>



      <div className="flex">
        <img src={Bed} alt="" />
        <div className="ml-[40px] text-slate-900 mt-[54px]">
          <h1 className="text-4xl  font-semibold ">КРОВАТИ</h1>
          <p className="mt-[7px] w-[350px] text-lg">
            Мини текст описания и преимущества покупки данного направления.
          </p>
          <p className="text-blue-700 mt-4 text-lg">
            Товары под заказ в наличии: 2030шт
          </p>
          <p className="text-slate-900 text-xl mt-5">Цены от: 42.000р</p>
          <button className="border-blue-950 border-[1px] rounded-full p-4 mt-2">
            <img src={ArrowLeft} alt="" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Category;
