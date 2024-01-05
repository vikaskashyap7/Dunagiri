import React from 'react'
import { ImFacebook2 } from "react-icons/im";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { IoLogoOctocat } from "react-icons/io";
import paypal from '../src/assest/paypal.jpg'
import razor from './assest/razorpay.webp'


export const Footer = () => {
  return (
    <div className=' bg-emerald-900 md:w-[100%] h-screen md:h-[430px] mt-14 overflow-x-hidden md:px-0 px-8 bg-fixed'>
        <div className=' md:w-[100%] flex flex-col md:flex-row md:justify-center md:items-center gap-3 md:gap-[13rem] mt-9 overflow-x-hidden'>
            <div className=' flex flex-col items-baseline overflow-x-hidden '>
                <div className='  text-slate-300 font-semibold font-serif'>Contact Us</div>
                <div className=' text-slate-300 font-thin font-normal  mt-2'>TEL: +91 98102 67719</div>
                <div className=' text-slate-300 font-thin font-normal  mt-2'>
                +91 96901 32425
                </div>
                <div className=' text-slate-300 font-thin font-normal  mt-2'>WhatsApp: +91 98102 67719</div>
                <div className=' text-slate-300 font-thin font-normal  mt-2'>E-MAIL: delighted@dunagiri.com</div>
            </div>
            <div div className=' flex flex-col   items-baseline md:mt-0 mt-[-198px]overflow-x-hidden'>
              <div className='  text-slate-300 font-semibold font-serif'>Address</div>
              <div className=' text-slate-300 font-thin   mt-2'>Village Chari, Near Mahavatar</div>
              <div className=' text-slate-300 font-thin   mt-2'>Babaji's Cave, PO Dunagiri,</div>
              <div className=' text-slate-300 font-thin   mt-2'>Block Dwarahat, District</div>
              <div className=' text-slate-300 font-thin   mt-2'>Almora Uttarakhand, India </div>
            </div>
            <div className=' flex flex-row gap-5 md:gap-0 flex-col  md:mt-0 mt-[-195px]overflow-x-hidden'>
                 <div className='  text-slate-300 font-semibold font-serif'>Follow Us</div>
                 <div  className=' flex gap-4  md:mt-5 cursor-pointer'>
                 <ImFacebook2  className=' h-5 w-6'/>
                 <FaInstagram className=' h-5 w-6' />
                 <FaTwitter  className=' h-5 w-6'/>
                 <IoLogoOctocat  className=' h-5 w-6'/>
                 </div>
                 <div className='  text-slate-300 font-semibold font-serif md:mt-4' >We Accept</div>
                 <div>
                  <div className=' flex gap-3 md:mt-5 cursor-pointer'>
                      <img src={paypal} alt="" />
                      <img src={razor} alt="" />
                  </div>
                 </div>
            </div>
            
        </div>
        <div className=' flex flex-col md:flex-row md:justify-center gap-3 md:items-center md:gap-14 mt-3 md:mt-14 bottom-4 overflow-x-hidden'>
              <div className=' font-semibold text-white underline cursor-pointer'><a href="/">Privacy Pollicy </a></div>
              <div className=' font-semibold text-white underline cursor-pointer'><a href="/">Cancellation and Refund Policy</a></div>
              <div className=' font-semibold text-white underline cursor-pointer'><a href="/">Terms and Conditions</a></div>
              <div className=' font-semibold text-white underline cursor-pointer'><a href="/">FAQs </a></div>
              <div className=' font-semibold text-white underline cursor-pointer'><a href="/">Contact Us </a></div>
        </div>

    </div>
  )
}
