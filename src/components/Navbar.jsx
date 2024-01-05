import React, { useState } from 'react'
import Logo from '../assest/logo.webp'
import { CiMenuBurger } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";
import Navlink from './Navlink'




function Navbar() {
    const [isOpen,setIsOpen]=useState(false);
    const toggleNavbar=()=>{
        setIsOpen(!isOpen);
    };

  return (
    <>
    <div className=' w-[300px]  md:w-screen overflow-hidden overflow-x-hidden  '>
        
        <div className=' md:flex md:justify-center overflow-x-hidden   md:gap-6' >
        
            <div className='  md:mt-0 md:mt-3 flex justify-between md:justify-center md:items-center relative over-x-hidden'>
                <img src={Logo}  className=' md:w-[156px] md:h-[34px] ' />
            </div>
            <div className='md:hidden absolute top-2 left-[320px]'>
            <button onClick={toggleNavbar} >
                {isOpen?<IoMdClose className=' w-8 h-9'/>: <CiMenuBurger  className=' w-8 h-9'/>}
            </button>
        </div>
            <div className=' hidden md:flex md:gap-3'>
                <div className='flex flex-col '>
                <div className='w-[99px] h-[2px]  mt-3 md:bg-black'></div>
                <div className='mt-[6px]  ml-2 font-[Arial,Helvetica,sans-serif]   font-light'><a href="/aboutus">ABOUT US</a></div>
                </div>
                <div className='flex flex-col  w-[140px] '>
                    <div className='w-[140px] h-[0.5px] md:bg-black mt-3'>
                    </div>
                    <div className='mt-[10px] ml-2 font-[Arial,Helvetica,sans-serif] text-[12px] text-sm' >
                    <a href="/"> ACCOMODATIONS</a>
                    </div>
                </div>
                
                    <div className='flex flex-col '>
                        <div className=' h-[0.5px] w-[100px] md:bg-black mt-3'>
                        </div>
                        <div className='mt-[10px] ml-3 font-[Arial,Helvetica,sans-serif] text-[12px] text-sm'><a href="/">RETREATS</a></div>
                    </div>
                    <div className='flex flex-col  '>
                        <div className=' h-[0.5px] w-[100px] md:bg-black mt-3'></div>
                        <div className='mt-[10px] ml-3 font-[Arial,Helvetica,sans-serif] text-[12px] text-sm'><a href="/">ACTIVITIES</a></div>
                    </div>
                    <div className='flex flex-col '>
                        <div className=' h-[0.5px] w-[90px] md:bg-black mt-3'>
                        </div>
                        <div className='mt-[10px] ml-3 font-[Arial,Helvetica,sans-serif] text-[12px] text-sm'><a href="/">GALLERY</a></div>
                    </div>
                    <div className='flex flex-col  '>
                        <div className='h-[0.5px] w-[80px] md:bg-black mt-3'>
                        </div>
                        <div className='mt-[10px] ml-5 font-[Arial,Helvetica,sans-serif] text-[12px] text-sm'><a href="/">BLOG</a></div>
                    </div>
                    <div className='flex flex-col'>
                        <div className=' h-[0.5px] w-[120px] md:bg-black mt-3'>
                        </div>
                        <div className='mt-[10px] ml-3 font-[Arial,Helvetica,sans-serif] text-[12px] text-sm'><a href="/">CONTACT US</a></div>
                    </div>  
                
            </div>
     </div>
   </div>
   {isOpen&&(
     <div>
        <Navlink/>
     </div>
   )}
   </> 
  )
}

export default Navbar;
