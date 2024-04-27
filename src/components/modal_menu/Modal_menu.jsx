import React, {useRef, useState} from 'react';
import {AiOutlineCaretDown} from "react-icons/ai";

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
                onClick={openModal}
                className=" text-black font-bold flex items-center">
                Каталог  className="ml-[10px]"/>
            </button>
                <button
                    onClick={toggleModal}
                    className=" text-red-700 font-bold flex items-center">
                    Каталог <AiOutlineCaretDown className="ml-[10px]"/>
                </button>



            {isOpen && (
                <div onClick={handleOutsideClick}
                     className="w-[268px] h-[400px] absolute top-[50px] border-[1px] border-t-red-50 rounded-[15px] bg-white
                    sm:top-[30px] w-[168px] h-[311px] ">

                    <div>

                        <nav className="flex flex-col">
                            <div>
                                <a href="#"
                                   className="text-left text-[16px] text-black font-semibold mt-[14px] ml-[24px] flex items-center justify-between
                                   sm:text-[13px] mt-[5px]">
                                    Новинки <AiOutlineCaretDown className="mr-[10px] sm:text-[10px]"/>

                                </a>
                                <hr className="mt-[10px]"/>
                            </div>
                            <div>
                                <a href="#"
                                   className="text-left text-[16px] text-black font-semibold mt-[14px] ml-[24px] flex items-center justify-between
                                   sm:text-[13px]">
                                    Гостинные <AiOutlineCaretDown className="mr-[10px] sm:text-[10px]"/>

                                </a>
                                <hr className="mt-[10px]"/>
                            </div>
                            <div>
                                <a href="#"
                                   className="text-left text-[16px] text-black font-semibold mt-[14px] ml-[24px] flex items-center justify-between
                                   sm:text-[13px]">
                                    Прихожие <AiOutlineCaretDown className="mr-[10px] sm:text-[10px]"/>

                                </a>
                                <hr className="mt-[10px]"/>
                            </div>
                            <div>
                                <a href="#"
                                   className="text-left text-[16px] text-black font-semibold mt-[14px] ml-[24px] flex items-center justify-between
                                   sm:text-[13px]">
                                    Спальни <AiOutlineCaretDown className="mr-[10px] sm:text-[10px]"/>

                                </a>
                                <hr className="mt-[10px]"/>
                            </div>
                            <div>
                                <a href="#"
                                   className="text-left text-[16px] text-black font-semibold mt-[14px] ml-[24px] flex items-center justify-between
                                   sm:text-[13px]">
                                    Детские <AiOutlineCaretDown className="mr-[10px] sm:text-[10px]"/>

                                </a>
                                <hr className="mt-[10px]"/>
                            </div>
                            <div>
                                <a href="#"
                                   className="text-left text-[16px] text-black font-semibold mt-[14px] ml-[24px] flex items-center justify-between
                                   sm:text-[13px]">
                                    Кровати <AiOutlineCaretDown className="mr-[10px] sm:text-[10px]"/>

                                </a>
                                <hr className="mt-[10px]"/>
                            </div>
                            <div>
                                <a href="#"
                                   className="text-left text-[16px] text-black font-semibold mt-[14px] ml-[24px] flex items-center justify-between
                                   sm:text-[13px]">
                                    Матрасы <AiOutlineCaretDown className="mr-[10px] sm:text-[10px] "/></a>
                                <hr className="mt-[10px]"/>
                            </div>

                        </nav>

                    </div>

                    {/*<div className="absolute text-red font-bold pt-[25px] pl-[190px] sm: ">*/}
                    {/*    <button*/}
                    {/*        onClick={closeModal}*/}
                    {/*        className=""*/}
                    {/*        type="button"*/}
                    {/*        style={{transition: 'all .15s ease'}}>*/}
                    {/*        Закрыть*/}
                    {/*    </button>*/}
                    {/*</div>*/}

                </div>
            )}

        </div>
    );
};

export default Modal;


