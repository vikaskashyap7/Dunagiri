import React from 'react'

function Navlink() {
  return (
    <div>
        <div className='  md:flex md:gap-3 overflow-x-hidden'>
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
                <nav>
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
                </nav>
            </div>
    </div>
  )
}

export default Navlink