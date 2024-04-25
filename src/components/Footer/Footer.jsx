import React from 'react'
import Logo from "../../assets/img/logo.png"
import ESV from "../../assets/svg/ESV.jsx";
import one from "../../assets/img/image 1.png"
import two from "../../assets/img/image 2.png"

const Footer = () => {
  return (
    <footer className="bg-[#FAFAFA] p-[30px]">
        <div className="flex items-center justify-between mb-[30px]">
            <p className="text-[#BEBEBE]">© ООО "Мебельная компания "Лером" 2021</p>
            <img src={Logo} alt="img"/>
            <div className="flex items-center gap-[5px]">
                <p className="text-[#BEBEBE]">Сайт разработан -</p>
                <h1 className="flex items-center gap-[8px]">
                    <span className="font-bold text-[#004583]">E S V</span>
                    <ESV/> digital
                </h1>
            </div>
        </div>
        <hr/>
        <div className="flex justify-between my-[30px]">
            <div>
                <h3 className="font-bold pb-[10px]">О компании</h3>
                <p className="text-[#656D75]">Производство</p>
                <p className="text-[#656D75] py-[10px]">Награды</p>
                <p className="text-[#656D75]">Сертификаты</p>
            </div>
            <div>
                <h3 className="font-bold pb-[10px]">Покупателю</h3>
                <p className="text-[#656D75]"> Как сделать заказ</p>
                <p className="text-[#656D75] py-[10px]">Рекомендации по сборке</p>
                <p className="text-[#656D75]">Договор публичной оферты</p>
            </div>
            <div>
                <h3 className="font-bold pb-[10px]"> Полезная информация</h3>
                <p className="text-[#656D75]">Всё о фасадах</p>
                <p className="text-[#656D75] py-[10px]">Всё о фурнитуре</p>
                <p className="text-[#656D75]"> Всё о ЛДСП</p>
            </div>
            <div>
                <h3 className="font-bold">3D-моделирование</h3>
                <p className="w-[160px] text-[#656D75] py-[8px]">Запустить онлайн, от 2 Мбит/с</p>
                <p className="w-[180px] text-[#656D75]">Скачать на компьютер, 606 Мб</p>
            </div>
            <div className="text-center">
                <p className="font-bold text-[#004583] border-b-[2px] w-[200px] pb-[10px]">Рассрочка</p>
                <p className="font-bold text-[#004583] py-[15px]">Гарантия</p>
                <p className="font-bold text-[#004583] border-t-[2px] w-[200px] pt-[10px]">Контакты</p>
            </div>
            <div className="flex items-center gap-[20px]">
                <img src={one} alt="img"/>
                <img src={two} alt="img"/>
            </div>
        </div>
        <hr/>
        <h1 className="text-[18px] text-[#BEBEBE] pt-[10px]">Все права защищены. Любое копирование и использование материалов сайта разрешено только с письменного согласия правообладателя. Не является публичной офертой.</h1>
    </footer>
  )
}

export default Footer