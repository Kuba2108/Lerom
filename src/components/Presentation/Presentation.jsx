import React from 'react'
import Shop from '../../assets/page/Shop.png'  
import Play from '../../assets/svg/Play.svg'

const Presentation = () => {
  return (
    <div >
      <div className='flex justify-center'>
    <h2 className='z-20 absolute text-white text-3xl pt-[71px] font-semibold '>Видеопрезентация </h2>
    <h2 className='z-20 absolute text-white mt-8 text-3xl pt-[71px] font-semibold '>«Лером»</h2>
    <button className=' z-20 bg-white p-[25px] mt-[200px] rounded-full absolute'><img src={Play} alt="" /></button>
        <button className=" z-20 mt-[400px] bg-transparent text-white font-semibold absolute py-2 px-9 border border-white rounded-3xl">
        Читать о комании
</button>
      </div>
      <img className='z-10 w-[100%] relative ' src={Shop} alt="" />
        

          </div>
  )
}

export default Presentation