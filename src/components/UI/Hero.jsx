import React from 'react';
import { studying } from '../../assets/images';

const Hero = () => {
  return(
    <div className='w-full h-[90vh] flex flex-col md:flex-row p-5'>
      <div className="w-full h-full flex flex-col justify-center items-center ">
        <div className='flex flex-col gap-3'>
          <div className="flex flex-col gap-3 text-3xl sm:text-5xl">
            <h2 className="">Hi There, <span className="inline-block hand-rotate text-3xl sm:text-4xl">👋🏻</span></h2>
            <h2 className="">
              I'm <span className='text-[#ff4800] uppercase'>Alok Kumar</span>
            </h2>
          </div>
          <div className="text-xl sm:text-2xl text-[#ff4800]">
            <h3>{"{"} <span className="text-black">Frontend Developer</span> {"}"}</h3>
          </div>
        </div>
      </div>
      <div className="w-full h-full flex justify-center items-center">
        <div className="w-full max-w-[300px] flex justify-center items-center">
          <img src={studying} alt="" className="w-full relative animate" />
        </div>
      </div>
    </div>
  )
}

export default Hero;