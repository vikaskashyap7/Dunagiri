import React from 'react'
import { SlLocationPin } from "react-icons/sl";
import { BsTelephone } from "react-icons/bs";
import { GoMail } from "react-icons/go";
import { SlLike } from "react-icons/sl";
import { FaInstagram } from "react-icons/fa";
import { CiFacebook } from "react-icons/ci";
import { FaLinkedinIn } from "react-icons/fa";
import Form from './Form';

function ContactUs() {
  return (
    <div className=' w-[375px] md:w-[100%] flex flex-col md:flex-row md:items-center md:justify-center overflow-x-hidden'>
        <div className='  md:w-[60%]  flex flex-col items-center '>
            <div className=' font-serif text-4xl md:text-6xl text-slate-800'>
              Contact Us
            </div >
            <div className=' flex flex-col flex-wrap items-baseline'>
            <div className='flex gap-5 md:gap-10 mt-14 justify-center items-center'>
               <SlLocationPin />
               <p className=' italic font-thin text-wrap text-nowrap'>Dunagiri Retreat, Village Chari, Near<br/> Mahavatar Babaji's Cave, Block, Dwarahat,<br/>Uttarakhand 263653 India</p>
            </div>
            <div className=' flex gap-5 md:gap-10 mt-14 justify-center items-center'>
            <BsTelephone />
             <div className=' italic font-thin'>+91 98102 67719 </div>
            </div>
            <div className=' flex gap-5 md:gap-10 mt-14  cursor-pointer justify-center items-center'>
              <GoMail />
              <div className=' italic font-thin'>delighted@dunagiri.com</div>
            </div>
            <div className=' flex gap-5 md:gap-10 mt-14 justify-center items-center cursor-pointer'>
            <SlLike className=' w-[28px] h-[28px]'/>
            <div className=' flex gap-5 md:gap-5'>
            <CiFacebook  className=' w-[28px] h-[28px]'/>
            <FaInstagram className=' w-[28px] h-[28px]' />
            <FaLinkedinIn className=' w-[28px] h-[28px]'/>
            </div>
            </div>
            </div>
        </div>
        <div className='  md:w-[40%] flex  '>
            <Form/>
        </div>
        
   </div>
  )
}

export default ContactUs