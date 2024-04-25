import React, {useRef, useState} from 'react';
import {AiOutlineCaretDown} from "react-icons/ai";
import {useLinkClickHandler} from "react-router-dom";

const Modal = () => {
    const [isOpen, setIsOpen] = useState(false);

    const openModal = () => {
        setIsOpen(true);
    };

    const closeModal = () => {
        setIsOpen(false);
    };
    const handleBackdropClick = (e) => {
        if (e.target === e.currentTarget) {
            closeModal();
        }
    };

    return (
        <div className="">

            <button
                onClick={openModal}
                className=" text-black font-bold flex items-center">
                Каталог <AiOutlineCaretDown className="ml-[10px]"/>
            </button>


            {isOpen && (
                <div className="w-[268px] h-[400px] absolute top-[50px] border-[1px] border-t-red-50 rounded-[15px] bg-white" onClick={handleBackdropClick}>

                   <div>

                       <nav className="flex flex-col">
                           <div>
                               <a href="#" className="text-left text-[16px] text-black font-semibold mt-[14px] ml-[24px] flex items-center justify-between">
                                   Новинки <AiOutlineCaretDown className="mr-[10px]"/>

                               </a>
                               <hr className="mt-[10px]"/>
                           </div>
                           <div>
                               <a href="#" className="text-left text-[16px] text-black font-semibold mt-[14px] ml-[24px] flex items-center justify-between">
                                   Гостинные   <AiOutlineCaretDown className="mr-[10px]"/>

                               </a>
                               <hr className="mt-[10px]"/>
                           </div>
                           <div>
                           <a href="#" className="text-left text-[16px] text-black font-semibold mt-[14px] ml-[24px] flex items-center justify-between">
                               Прихожие    <AiOutlineCaretDown className="mr-[10px]"/>

                           </a>
                           <hr className="mt-[10px]"/>
                       </div>
                           <div>
                           <a href="#" className="text-left text-[16px] text-black font-semibold mt-[14px] ml-[24px] flex items-center justify-between">
                               Спальни   <AiOutlineCaretDown className="mr-[10px]"/>

                           </a>
                           <hr className="mt-[10px]"/>
                       </div>
                           <div>
                           <a href="#" className="text-left text-[16px] text-black font-semibold mt-[14px] ml-[24px] flex items-center justify-between">
                               Детские   <AiOutlineCaretDown className="mr-[10px]"/>

                           </a>
                           <hr className="mt-[10px]"/>
                       </div>
                           <div>
                           <a href="#" className="text-left text-[16px] text-black font-semibold mt-[14px] ml-[24px] flex items-center justify-between">
                               Кровати    <AiOutlineCaretDown className="mr-[10px]"/>

                           </a>
                           <hr className="mt-[10px]"/>
                       </div>
                           <div>
                           <a href="#" className="text-left text-[16px] text-black font-semibold mt-[14px] ml-[24px] flex items-center justify-between">
                               Матрасы   <AiOutlineCaretDown className="mr-[10px]"/></a>
                           <hr className="mt-[10px]"/>
                       </div>

                       </nav>

                   </div>

                    <div className="absolute text-red font-bold pt-[25px] pl-[190px] ">
                        <button
                            onClick={closeModal}
                            className=""
                            type="button"
                            style={{transition: 'all .15s ease'}}>
                            Закрыть
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Modal;


