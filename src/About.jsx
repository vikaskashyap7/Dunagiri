import React from 'react'
import AboutImage from './AboutImage'
import Cofounder from './components/Cofounder'
import Contactus from './ContactUs'
import "./App.css";
import { Footer } from './Footer';
import Video from './Video';


function About() {
  return (
    <div className=' w-[375px] md:w-[100%] flex flex-col justify-center items-center absolute z-50 bg-white overflow-x-hidden  md:full'>
     <div className=' md:max-w-screen-sm md:max-w-screen-2xl md:max-w-screen-md md:max-w-screen-lg font-serif mt-9 text-4xl md:text-6xl tetx-center '>ABOUT US</div>
      <div className=' md:w-[100%] md:w-[70%] w-[285px] mt-9 overflow-x-hidden'>
        <p className='  md:ml-4  md:font-thin  md:w-[100%] text-slate-500'>
          <span className='font-semibold text-lg text-black'>Dunagiri Retreat </span> offers freedom from the madness and pressures of modern life. We offer a space where reflection and refreshment of the soul take place as people leave their busy routines behind. Meant for nature lovers and spiritual seekers who value peace, and appreciate the natural grandeur of their surroundings, your stay with us will leave you refreshed, renewed, and uplifted.</p>
          <p className='md:font-thin mt-4 md:ml-0  text-slate-500'>  
           Inspired by the idea that it’s love and not money that makes the world go around, Piyush Kumar founded <span className=' font-semibold text-lg text-black'>Dunagiri Retreat </span> in 2005 after leaving a lucrative career at the World Bank. He wanted to create a different kind of resort—one that benefits the ecology and the local population as much as it does the visitor. As a result, <span className=' font-semibold'>Dunagiri Retreat </span> is entirely served by the villagers of this area; everyone working here is a farmer and a resident of the three villages that surround us. And together—visitor and villager alike—we attempt to realize the four guiding principles that form the heart of <span className=' font-semibold'>Dunagiri Retreat :</span>
          </p>
          <p className=' ml-6 md:font-thin mt-4 md:ml-4 text-slate-500 overflow-x-hidden'>
               <li >To generate sustainable livelihoods with dignity for residents;</li>
               <li>To supplement educational resources of the area;</li>
               <li>To provide primary and preventive healthcare to residents and;</li>
               <li>To examine how - from stones to insects to plants, humans, and birds – how can we all joyously coexist together as we believe it is possible.</li>
          </p>
          <p className='ml-4 md:ml-0 md:font-thin mt-4 text-slate-500'>
          During your stay here, we pray you will discover all of the reasons that make <span className=' font-semibold text-lg text-black'>Dunagiri Retreat </span> such a special place—from its ancient and sacred history to its pristine natural beauty, and the positive influence of your visit on the local population. You will arrive as a guest, but leave as family having discovered “the road less traveled," as Robert Frost expressed, has made all the difference.
          </p>
     </div>
     <div className=' bg-emerald-900 w-[375px]  mt-4 md:mt-16 md:w-[100%] flex flex-col md:flex-row justify-center items-center h-[392px] md:px-0 px-4 overflow-x-hidden'>
      <div className='md:w-[473.6px] text-white text-3xl md:text-6xl text font-serif  '>
      Reconnect  with your body, mind,and soul.
      </div>
      <div className='w-[368px] lg:md:w-[710.4px] flex flex-col text-white mt-3  md:mt-0 overflow-x-hidden'>
         <p className=' font-xs md:font-extralight  w-[368px] ml-3  md:ml-0 md:w-[710.4px]'>
            "You ask me why I dwell in the green mountain;<br/>
            I smile and make no reply for my heart is free to care.<br/>
            As the peach blossom flows down the stream and into the unknown,<br/>
            I have a world apart that is among no one."
         </p>
         <div className='w-[65px] h-[2px] bg-slate-200 mt-6 ml-3 md:ml-0'></div>
         <div className=' font-serif mt-6 ml-3 md:ml-0'>
            Li Po, Chinese Poet 8th...
         </div>
      </div>
     </div>
     <div className=' w-[370 ] md:w-[100%] flex flex-col mt-10 overflow-x-hidden'>
      <div className='flex flex-col justify-center items-center overflow-x-hidden'>
        <div className=' font-serif  text-2xl md:text-6xl'>
            The Retreat
        </div>
        <div className=' w-[70px]  bg-black h-[1px] mt-8'></div>
        </div>
        <div className=' text-center font-sans  text-gray-600 text-lg text-wrap md:text-nowrap  font-semibold mt-6 overflow-x-hidden'>
        <span className=' font-extrabold text-zinc-900'>Dunagiri Retreat </span> offers a "rustic-deluxe" experience—modern facilities within very <br/> remote and rural surroundings in the Himalayan wilderness. While maintaining a close <br/> relationship with nature, your comfort is our utmost concern. Our hospitality is genuine <br/> and refined—yet down to earth. Pure deshi. Right down to the fresh cow’s milk, naturally <br/> sweet from its diet of mountain herbs. 
        </div>
        <div className='mt-8 overflow-x-hidden'>
          <AboutImage/>
        </div>
      </div>
      <div className=' w-[100%] overflow-x-hidden'>
         <Video/>
      </div>
       <div className='mt-8 w-[100%]'>
       <Cofounder/>
       </div>
       
       <div className=' mt-4 w-[100%] overflow-x-hidden'>
       <Contactus/>
       </div>
       <div className='w-[375px] md:w-[100%] overflow-x-hidden mt-7'>
        <div className=' flex justify-center items-center '>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1774210.0768706459!2d77.99383058972843!3d29.71239924213984!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39a7a42959841089%3A0x5678a19e7749750!2sDunagiri%2C%20Uttarakhand%20246443!5e0!3m2!1sen!2sin!4v1704351771941!5m2!1sen!2sin" width="1380" height="450"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
       </div>
       <div className='w-[375px] md:w-[100%]   md:mt-6 overflow-hidden'>
        <Footer/>
       </div>
       
    </div>
  )
}

export default About