"use strict"
import { useState } from 'react'
import { CgMenuRightAlt } from "react-icons/cg";
import { GrClose } from "react-icons/gr";
import { Link } from 'react-router-dom';
import logo from '/ak_logo1.png'


const Header = () => {

  const [sideNav, setSideNav] = useState(false);

  const resumeLink = "https://drive.google.com/file/d/14ZY4s-ltBoq-MXwScQ7IlSsqN07UXYXc/view?usp=drive_link"


  return (
    <header className='w-screen bg-black bg-opacity-5 backdrop-blur-[2px] flex justify-between items-center py-2 pl-5 sm:pl-20 pr-20 text-[1.2rem] shadow shadow-black sticky top-0 z-10'>
      <div className="w-14 h-14 flex justify-center items-center rounded-full">
        <Link to="/"><img src={logo} alt="logo" className="h-full w-full" /></Link>
      </div>

      {
        sideNav ? (
          <div className={`w-full h-screen absolute top-0 right-0 bg-white bg-opacity-90 text-center flex justify-center items-center  duration-300 z-10`}>
            <div className="">
              <GrClose 
                size={30} 
                className='absolute top-6 right-6 text-[#000] cursor-pointer' 
                onClick={()=>setSideNav(false)}
              />
            </div>
            <nav className="text-[#ff4800] flex flex-col items-center gap-8 font-sans font-medium ">
              <Link to="/" className="hover:cursor-pointer hover:text-[#c60796]"  onClick={()=>setSideNav(false)}>Home</Link>
              <Link to="/about" className="hover:cursor-pointer hover:text-[#c60796]"  onClick={()=>setSideNav(false)}>About</Link>
              <Link to="/project" className="hover:cursor-pointer hover:text-[#c60796]"  onClick={()=>setSideNav(false)}>Project</Link>
              <a href={resumeLink} className="hover:cursor-pointer hover:text-[#c60796]">Resume</a>
            </nav>
          </div>
        ) : (
          <div className="text-[#ff4800] ">
            <nav className="hidden sm:flex gap-10 font-sans font-medium">
              <Link to="/" className="hover:cursor-pointer relative bottom-border" onClick={()=>setSideNav(false)}>Home</Link>
              <Link to="/about" className="hover:cursor-pointer relative bottom-border" onClick={()=>setSideNav(false)}>About</Link>
              <Link to="/project" className="hover:cursor-pointer relative bottom-border" onClick={()=>setSideNav(false)}>Project</Link>
              <a href={resumeLink} className="hover:cursor-pointer relative bottom-border">Resume</a>
            </nav>
          </div>
        )
      }

      <div className="absolute right-5 top-5">
        <CgMenuRightAlt 
          size={35} 
          className="block sm:hidden text-[#ff4800] cursor-pointer" 
          onClick={()=>setSideNav(true)}
        />
      </div>
    </header>
  )
}

export default Header
