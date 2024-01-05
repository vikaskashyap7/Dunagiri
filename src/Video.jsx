import React from 'react'
import p1 from './assest/p1.png'
import p2 from './assest/p2.png'
import p3 from './assest/p3.png'
import p4 from './assest/p4.png'
import p5 from './assest/p5.png'
import p6 from './assest/p6.png'
import p7 from './assest/p7.png'
import p8 from './assest/p8.png'
import p9 from './assest/p9.png'

function Video() {
  return (
    <div className='  w-[100%] overflow-x-hidden '>
        <div className=' grid grid-cols-3 grid-rows-3 md:grid-cols-4 md:grid-rows-2 gap-2 mt-14 justify-items-center  overflow-hidden'>
            <img src={p1} alt="" className=' md:w-[300px] md:h-[300px] z-10 hover:z-20 md:ml-36 hover:opacity-60' />
            <img src={p2} alt="" className=' md:w-[300px] md:h-[300px] z-10 hover:z-20  hover:opacity-60'/>
            <img src={p3} alt="" className=' md:w-[300px] md:h-[300px] z-10 hover:z-20 md:ml-[-130px] hover:opacity-60' />
            <img src={p4} alt="" className=' md:w-[300px] md:h-[300px] z-10 hover:z-20  md:ml-[-270px] hover:opacity-60' />
            <img src={p5} alt="" className=' md:w-[300px] md:h-[300px] z-10 hover:z-20 md:ml-36  hover:opacity-60' />
            <img src={p6} alt="" className=' md:w-[300px] md:h-[300px] z-10 hover:z-20  hover:opacity-60' />
            <img src={p7} alt="" className=' md:w-[300px] md:h-[300px] z-10 hover:z-20 md:ml-[-130px] hover:opacity-60' />
            <img src={p8} alt="" className=' md:w-[300px] md:h-[300px] z-10 hover:z-20  md:ml-[-270px] hover:opacity-60' />
            <img src={p9} alt="" className=' md:hidden md:w-[300px] md:h-[300px] z-10 hover:z-20  md:ml-[-270px] hover:opacity-60' />
        </div>
        <div className=' mt-20 flex justify-center items-center '>
            <div className='border border-black w-[25%] md:w-[8%]  text-center  py-1 md:px-0 md:py-2  italic text-slate-400 font-thin'>
            <a href="/">Load More</a>
            </div>
        </div>
    </div>
  )
}
export default Video