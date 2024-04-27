import React, {useRef, useState} from 'react';
import {AiOutlineCaretDown} from "react-icons/ai";
import {useLinkClickHandler} from "react-router-dom";

const Modal = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleModal=()=>{
        setIsOpen(!isOpen)
    }

    const closeModal = () => {
        setIsOpen(false);
    };

    const handleOutsideClick = (event) => {
        if (!event.target.closest('.modal-content')) {
            closeModal();
        }
    };



    return (
        <div className="z-50">

                <button
                    onClick={toggleModal}
                    className=" text-red-700 font-bold flex items-center">
                    Каталог <AiOutlineCaretDown className="ml-[10px]"/>
                </button>



            {isOpen && (
                <div onClick={handleOutsideClick}
                     className="w-[268px] h-[400px] absolute top-[50px] border-[1px] border-t-red-50 rounded-[15px] bg-white
                    sm:top-[70px] sm:bg-blue-400 sm:w-[368px] sm:h-[511px] ">


                    <div>

                        <nav className="flex flex-col ">
                            <div>
                                <a href="#"
                                   className="text-left text-[16px] text-black font-semibold mt-[14px] ml-[24px] flex items-center justify-between
                                   sm:text-[30px] sm:text-white">
                                    Новинки <AiOutlineCaretDown className="mr-[10px]"/>

                                </a>
                                <hr className="mt-[10px]"/>
                            </div>
                            <div>
                                <a href="#"
                                   className="text-left text-[16px] text-black font-semibold mt-[14px] ml-[24px] flex items-center justify-between
                                   sm:text-[30px] sm:text-white">
                                    Гостинные <AiOutlineCaretDown className="mr-[10px] "/>

                                </a>
                                <hr className="mt-[10px]"/>
                            </div>
                            <div>
                                <a href="#"
                                   className="text-left text-[16px] text-black font-semibold mt-[14px] ml-[24px] flex items-center justify-between
                                  sm:text-[30px] sm:text-white">
                                    Прихожие <AiOutlineCaretDown className="mr-[10px] "/>

                                </a>
                                <hr className="mt-[10px]"/>
                            </div>
                            <div>
                                <a href="#"
                                   className="text-left text-[16px] text-black font-semibold mt-[14px] ml-[24px] flex items-center justify-between
                                   sm:text-[30px] sm:text-white">
                                    Спальни <AiOutlineCaretDown className="mr-[10px]"/>

                                </a>
                                <hr className="mt-[10px]"/>
                            </div>
                            <div>
                                <a href="#"
                                   className="text-left text-[16px] text-black font-semibold mt-[14px] ml-[24px] flex items-center justify-between
                                  sm:text-[30px] sm:text-white">
                                    Детские <AiOutlineCaretDown className="mr-[10px] "/>

                                </a>
                                <hr className="mt-[10px]"/>
                            </div>
                            <div>
                                <a href="#"
                                   className="text-left text-[16px] text-black font-semibold mt-[14px] ml-[24px] flex items-center justify-between
                                   sm:text-[30px] sm:text-white">
                                    Кровати <AiOutlineCaretDown className="mr-[10px] "/>

                                </a>
                                <hr className="mt-[10px]"/>
                            </div>
                            <div>
                                <a href="#"
                                   className="text-left text-[16px] text-black font-semibold mt-[14px] ml-[24px] flex items-center justify-between
                                   sm:text-[30px] sm:text-white">
                                    Матрасы <AiOutlineCaretDown className="mr-[10px]"/></a>
                                <hr className="mt-[10px]"/>
                            </div>

                        </nav>

                    </div>


                </div>
            )}

        </div>
    );
};

export default Modal;


