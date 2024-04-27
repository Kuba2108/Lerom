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
                    ">


                    <div>

                        <nav className="flex flex-col ">
                            <div>
                                <a href="#"
                                   className="text-left text-[16px] text-black font-semibold mt-[14px] ml-[24px] flex items-center justify-between
                                  ">
                                    Новинки <AiOutlineCaretDown className="mr-[10px]"/>

                                </a>
                                <hr className="mt-[10px]"/>
                            </div>
                            <div>
                                <a href="#"
                                   className="text-left text-[16px] text-black font-semibold mt-[14px] ml-[24px] flex items-center justify-between
                                   ">
                                    Гостинные <AiOutlineCaretDown className="mr-[10px] "/>

                                </a>
                                <hr className="mt-[10px]"/>
                            </div>
                            <div>
                                <a href="#"
                                   className="text-left text-[16px] text-black font-semibold mt-[14px] ml-[24px] flex items-center justify-between
                                ">
                                    Прихожие <AiOutlineCaretDown className="mr-[10px] "/>

                                </a>
                                <hr className="mt-[10px]"/>
                            </div>
                            <div>
                                <a href="#"
                                   className="text-left text-[16px] text-black font-semibold mt-[14px] ml-[24px] flex items-center justify-between
                                  ">
                                    Спальни <AiOutlineCaretDown className="mr-[10px]"/>

                                </a>
                                <hr className="mt-[10px]"/>
                            </div>
                            <div>
                                <a href="#"
                                   className="text-left text-[16px] text-black font-semibold mt-[14px] ml-[24px] flex items-center justify-between
                                 ">
                                    Детские <AiOutlineCaretDown className="mr-[10px] "/>

                                </a>
                                <hr className="mt-[10px]"/>
                            </div>
                            <div>
                                <a href="#"
                                   className="text-left text-[16px] text-black font-semibold mt-[14px] ml-[24px] flex items-center justify-between
                                   ">
                                    Кровати <AiOutlineCaretDown className="mr-[10px] "/>

                                </a>
                                <hr className="mt-[10px]"/>
                            </div>
                            <div>
                                <a href="#"
                                   className="text-left text-[16px] text-black font-semibold mt-[14px] ml-[24px] flex items-center justify-between
                                   ">
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


