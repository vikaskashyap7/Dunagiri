import React from 'react'
import cofounder from '../assest/cofounder.webp'
import { FaInstagram } from "react-icons/fa";
import { CiFacebook } from "react-icons/ci";
import { FaLinkedinIn } from "react-icons/fa";

function Cofounder() {
  return (
    <div className=' flex flex-col md:flex-row justify-around md:h-[669px] w-[375px] md:w-[100%]'>
        <div className=' wd:w-[60%] flex flex-col justify-center items-center '>
           <p className=' font-serif text-3xl  md:text-6xl '>
                Meet Our Founder<br/>
                Piyush Kumar
           </p>
           <p className=' font-thin text-slate-500 mt-6 ml-7 md:ml-0'>
           Guided by the philosophy that love transcends monetary value, Piyush<br/>Kumar, a former World Bank professional, established Dunagiri Retreat in<br/> 2005. His vision was to create a retreat that harmonizes with nature and <br/> nurtures the local community, fostering a unique synergy between guests <br/>and villagers under the retreat's guiding principles.
           </p>
           <div className=' mt-16 flex gap-6'>
           <FaLinkedinIn  className=' w-[27px] h-[27px] cursor-pointer'/>
           <FaInstagram className=' w-[27px] h-[27px] cursor-pointer'/>
           <CiFacebook className=' w-[27px] h-[27px] cursor-pointer'/>
           </div>
        </div>
        
        <div className=' w-[375px] md:w-[40%] flex flex-col md:justify-center md:items-center  md:ml-0 mt-8 md:mt-0 overflow-hidden'>
            <img src={cofounder} alt="" />
        </div>
        
    </div>
  )
}

export default Cofounder