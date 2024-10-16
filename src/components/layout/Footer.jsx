import React from 'react';
import Contact from '../UI/Contact';


const Footer = () => {
  return(
    <div className="">
      <div className="w-full h-[150px] sm:h-[70px] bg-[#0c0c0c] flex items-center justify-evenly flex-col sm:flex-row">
        <div className="text-white text-base sm:text-xl">
          <p>Designed and Developed by Alok kumar</p>
        </div>
        <Contact className="text-white" />
      </div>
    </div>
  )
}


export default Footer;