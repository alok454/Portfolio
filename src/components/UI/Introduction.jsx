import React from 'react'
import { man_working } from '../../assets/images'
import Contact from './Contact'
import Aos from 'aos'

const Introduction = () => {

  Aos.init({ offset: 200, duration: 1000 })

  return (
    <>
    <div data-aos="fade-out" className="w-full flex flex-col md:flex-row itmes-center p-5 sm:p-10 gap-10">
      <div className="w-full md:w-3/5 flex flex-col items-center gap-10">
        <div className="text-2xl md:text-3xl lg:text-4xl font-semibold">
          <h2 className=''>LET ME <span className="text-[#ff4800]">INTRODUCE</span> MYSELF</h2>
        </div>

        <div className="flex flex-col text-xl sm:text-2xl gap-3 lg:pl-10">
          <p className="">I am fluent in in <span className="text-[#ff4800]">HTML, CSS, Javascript and Tailwind.</span></p>
          <p className="">My field of Interest's are building new <span className="text-[#ff4800]">Web Technologies and Products.</span></p>
          <p className="">My ability to apply logic and creativity to <span className="text-[#ff4800]">Web Development.</span></p>
          <p className="">Currently, I'm expanding my skill set in <span className="text-[#ff4800]">React & Redux</span></p>
        </div>
      </div>
      <div className="w-full md:w-2/5 flex items-center justify-center">
        <img src={man_working} alt="working-man" className="w-[200px] sm:w-[300px] rounded-md" style={{boxShadow:"0 0 20px 0px black"}} />
      </div>
    </div>

    <div className="w-full flex flex-col items-center justify-center">
      <div className="w-[300px] h-[200px] flex flex-col items-center gap-5">
        <div className="flex flex-col items-center gap-3">
          <p className="text-3xl font-semibold">FIND ME ON</p>
          <p className="text-xl">Feel free to <span className="text-[#ff4800]">connect</span> with me</p>
        </div>
        <Contact/>
      </div>
    </div>
    </>
  )
}

export default Introduction