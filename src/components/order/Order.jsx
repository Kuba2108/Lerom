import React from 'react';
import Full from "../../assets/svg/Full.jsx";

const Order = () => {
    return (
       <section>
           <div className="container py-[60px]">
               <h1 className="text-[25px] text-[#071828] font-bold pb-[20px]">оформление заказа</h1>

               <div className="md:w-[1210px] md:h-[280px] w-[400px] h-[484px] shadow-xl rounded-[10px] px-[25px]">

                   <h1 className="text-[20px] text-[#071828] font-medium pt-[20px]">Информация о покупателе</h1>
                   <div className="md:flex items-center justify-between my-[15px]">
                       <input type="text" placeholder="Ф.И.О:" className="w-[350px] h-[64px] bg-[#F3F3F3] text-[20px] px-[20px]"/>
                       <input type="email" placeholder="E-mail:" className="w-[350px] h-[64px] bg-[#F3F3F3] text-[20px] px-[20px]"/>
                       <input type="tel" placeholder="Номер телефона:" className="w-[350px] h-[64px] bg-[#F3F3F3] text-[20px] px-[20px]"/>
                   </div>
                   <input type="text" placeholder="Комментарий:" className="md:w-[1160px] md:h-[110px] w-[280px] h-[207px] rounded bg-[#F3F3F3] text-[20px] text-[#BEBEBE] px-[20px] pb-[60px]"/>
               </div>

               <div className="flex gap-[30px] my-[30px]">
                   <div className="w-[399px] h-[287px] shadow-xl">
                       <h1 className="text-[20px] pl-[25px] py-[25px]">Информация о доставке:</h1>
                      <div className="flex gap-[10px] border-b-[2px] pb-[20px] px-[30px]">
                          <input type="radio" name="delivery" className="w-[28px] h-[28px] border-[1px] "/>
                          <p className="text-[18px] text-[#8A8F94] w-[291px]">Доставка по Москве и Московской области до подъезда</p>
                      </div>
                      <div className="flex gap-[10px] border-b-[2px] py-[20px] px-[30px]">
                          <input type="radio" name="delivery" className="w-[28px] h-[28px] border-[1px] solid "/>
                          <p className="text-[18px] text-[#8A8F94]">Доставка транспортной компанией</p>
                      </div>
                      <div className="flex gap-[10px] py-[20px] px-[30px]">
                          <input type="radio" name="delivery" className="w-[28px] h-[28px] border-[1px] solid "/>
                          <p className="text-[18px] text-[#8A8F94]">Самовывоз со склада в Москве</p>
                      </div>
                   </div>
                   <div className="md:w-[780px] md:h-[300px] w-[400px] h-[438px] px-[22px] shadow-xl">
                       <p className="text-[20px] py-[15px]">Адрес доставки:</p>
                       <div className="flex flex-wrap gap-[15px]">
                           <input type="text" placeholder="Регион:" className="w-[235px] h-[64px] bg-[#F3F3F3] text-[20px] px-[10px]"/>
                           <input type="text" placeholder="Город:" className="w-[235px] h-[64px] bg-[#F3F3F3] text-[20px] px-[10px]"/>
                           <input type="text" placeholder="Улица:" className="w-[235px] h-[64px] bg-[#F3F3F3] text-[20px] px-[10px]"/>
                           <input type="text" placeholder="Дом:" className="w-[235px] h-[64px] bg-[#F3F3F3] text-[20px] px-[10px]"/>
                           <input type="text" placeholder="Корпус:" className="w-[235px] h-[64px] bg-[#F3F3F3] text-[20px] px-[10px]"/>
                           <input type="text" placeholder="Подъезд:" className="w-[235px] h-[64px] bg-[#F3F3F3] text-[20px] px-[10px]"/>
                           <input type="text" placeholder="Этаж:" className="w-[235px] h-[64px] bg-[#F3F3F3] text-[20px] px-[10px]"/>
                           <input type="text" placeholder="Квартира:" className="w-[235px] h-[64px] bg-[#F3F3F3] text-[20px] px-[10px]"/>
                           <input type="password" placeholder="Код домофона:" className="w-[235px] h-[64px] bg-[#F3F3F3] text-[20px] px-[10px]"/>
                       </div >
                   </div>
               </div>

               <div className="flex items-center justify-between">
                   <div className="w-[399px] h-[287px]">
                       <h1 className="text-[20px] pl-[25px] py-[25px]">Информация об оплате:</h1>
                      <div className="flex gap-[10px] border-b-[2px] pb-[20px] px-[30px]">
                          <input type="radio" name="deliv" className="w-[28px] h-[28px] border-[1px] "/>
                          <p className="text-[18px] text-[#8A8F94] w-[291px]">Наличными при получении</p>
                      </div>
                      <div className="flex gap-[10px] border-b-[2px] py-[20px] px-[30px]">
                          <input type="radio" name="deliv" className="w-[28px] h-[28px] border-[1px] "/>
                          <p className="text-[18px] text-[#8A8F94]">Доставка транспортной компанией</p>
                      </div>
                      <div className="flex gap-[10px] py-[20px] px-[30px]">
                          <input type="radio" name="deliv" className="w-[28px] h-[28px] border-[1px] "/>
                          <p className="text-[18px] text-[#8A8F94]">Самовывоз со склада в Москве</p>
                      </div>
                   </div>

                   <div className="w-[260px] h-[287px] px-[22px]">
                       <h1 className="text-[20px] pl-[25px] py-[25px]">Лифт:</h1>
                       <div className="flex gap-[10px] border-b-[2px] pb-[20px] px-[30px]">
                           <input type="radio" name="del" className="w-[28px] h-[28px]"/>
                           <p className="text-[18px] text-[#8A8F94]">Малый</p>
                       </div>
                       <div className="flex gap-[10px] border-b-[2px] py-[20px] px-[30px]">
                           <input type="radio" name="del" className="w-[28px] h-[28px]"/>
                           <p className="text-[18px] text-[#8A8F94]">Грузовой</p>
                       </div>
                       <div className="flex gap-[10px] py-[20px] px-[30px]">
                           <input type="radio" name="del" className="w-[28px] h-[28px]"/>
                           <p className="text-[18px] text-[#8A8F94]">Нет лифта</p>
                       </div>
                   </div>

                   <div>
                       <div className="flex gap-[20px]">
                           <div className="w-[243px] h-[190px]">
                               <h1 className="text-[20px] pl-[25px] py-[25px]">Лифт:</h1>
                               <div className="flex gap-[8px] border-b-[2px] py-[10px] px-[30px]">
                                   <input type="radio" name="or" className="w-[28px] h-[28px]"/>
                                   <p className="text-[18px] text-[#8A8F94]">Да</p>
                               </div>
                               <div className="flex gap-[8px] py-[20px] px-[30px]">
                                   <input type="radio" name="or" className="w-[28px] h-[28px]"/>
                                   <p className="text-[18px] text-[#8A8F94]">Нет</p>
                               </div>
                           </div>
                           <div className="w-[243px] h-[190px]">
                               <h1 className="text-[20px] pl-[25px] py-[25px]">Сборка:</h1>
                               <div className="flex gap-[8px] border-b-[2px] py-[10px] px-[30px]">
                                   <input type="radio" name="flex" className="w-[28px] h-[28px]"/>
                                   <p className="text-[18px] text-[#8A8F94]">Да</p>
                               </div>
                               <div className="flex gap-[8px] py-[20px] px-[30px]">
                                   <input type="radio" name="flex" className="w-[28px] h-[28px]"/>
                                   <p className="text-[18px] text-[#8A8F94]">Нет</p>
                               </div>
                           </div>
                       </div>
                       <button className="text-[18px] font-medium shadow-lg w-[508px] py-[20px] mt-[23px] flex justify-around">
                           Итого: <span className="text-[#BB2822] text-[20px] font-bold">0</span>
                       </button>
                   </div>
               </div>

               <div className="flex items-center justify-end">
                   {/*<Full/>*/}
                   {/*<h1 className="text-[18px] text-[#BB2822] pr-[20px]">У вас остались поля обязательные к заполнению</h1>*/}
                   <button className="py-[15px] px-[50px] my-[35px] bg-[#004583] text-[25px] text-white animate-bounce">
                       Оформить
                   </button>
               </div>

           </div>
       </section>
    );
};

export default Order;

