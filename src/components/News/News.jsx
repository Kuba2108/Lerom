import React from 'react'
import NewsOne from "../../assets/img/Rectangle 7.png"
import NewsTwo from "../../assets/img/Rectangle 8.png"
import NewsThree from "../../assets/img/Rectangle 12.png"
import Vactor from "../../assets/svg/Vactor.jsx";
import VectorTwo from "../../assets/svg/VectorTwo.jsx";
import {useNavigate} from "react-router";
import VectorThree from "../../assets/svg/VectorThree.jsx";

const News = () => {
    const navigate = useNavigate()

  return (
      <section className="flex">
        <div>
           <h1 className="text-[20px] text-center border py-[20px]">Информация</h1>
          <div className="flex items-center">
              <img src={NewsOne} className="w-[350px]" alt="img"/>
              <div className="pl-[30px]">
                  <h1 className="font-bold text-[18px] pb-[10px]">Доставка по всей России</h1>
                  <p className="text-[16px] w-[230px] pb-[50px]">Мини текст описания новости и ее актуальности</p>
                  <button className="w-[55px] h-[55px] rounded-[50%] border-[2px] border-[#BB2822] flex items-center justify-center">
                      <Vactor/>
                  </button>
              </div>
          </div>
          <div className="flex items-center">
              <div>
                  <div className="pl-[30px] pr-[90px]">
                      <h1 className="font-bold text-[18px] pb-[10px] w-[110px]">
                          <span className="text-[#BB2822]">Бесплатная</span> сборка
                      </h1>
                      <p className="text-[16px] w-[230px] pb-[50px]">Мини текст описания новости и ее актуальности</p>
                      <button className="w-[55px] h-[55px] rounded-[50%] border-[2px] border-[#BB2822] flex items-center justify-center">
                          <VectorThree/>
                      </button>
                  </div>
                  <h1 className="text-center text-[20px] font-bold py-[10px] text-[#BB282259]">лером</h1>
              </div>
             <div className="border-x">
                 <img src={NewsOne} className="w-[350px]" alt="img"/>
                 <button onClick={() => navigate("news")}
                     className="flex items-center gap-[20px] mx-auto text-[20px] py-[15px] hover:text-[#004583]">
                     показать еще новости <VectorTwo/>
                 </button>
             </div>
          </div>
        </div>
        <div>
           <h1 className="text-[20px] text-center border py-[20px]">Интересное</h1>
          <div className="flex items-center">
              <img src={NewsTwo} className="w-[350px]" alt="img"/>
              <div className="pl-[30px]">
                  <h1 className="font-bold text-[18px] pb-[10px]">Доставка по всей России</h1>
                  <p className="text-[16px] w-[230px] pb-[50px]">Мини текст описания новости и ее актуальности</p>
                  <button className="w-[55px] h-[55px] rounded-[50%] border-[2px] border-[#BB2822] flex items-center justify-center">
                      <Vactor/>
                  </button>
              </div>
          </div>
          <div className="flex items-center">
              <div>
                  <div className="pl-[30px] pr-[90px]">
                      <h1 className="font-bold text-[18px] pb-[10px] w-[110px]">
                          <span className="text-[#BB2822]">Бесплатная</span> сборка
                      </h1>
                      <p className="text-[16px] w-[230px] pb-[50px]">Мини текст описания новости и ее актуальности</p>
                      <button className="w-[55px] h-[55px] rounded-[50%] border-[2px] border-[#BB2822] flex items-center justify-center">
                          <VectorThree/>
                      </button>
                  </div>
                  <button onClick={() => navigate("news")}
                      className="flex items-center gap-[20px] text-[21px] py-[15px] mx-auto hover:text-[#004583]">
                      открыть раздел новости <VectorTwo/>
                  </button>
              </div>
              <div className="border-x">
                  <img src={NewsThree} className="w-[350px]" alt="img"/>
                  <h1 className="text-center text-[20px] py-[15px] font-bold text-[#8B93FF]">
                      лером
                  </h1>
              </div>
          </div>
        </div>
      </section>
  )
}

export default News