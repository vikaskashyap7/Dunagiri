import React from 'react'
import mountain from './assest/new.png'
function Img() {
  return (
    <div className=' md:w-[100%]  h-[425px] relative md:flex md:justify-center md:items-center md:h-[669px] z-10 mt-2 fixed  md:mt-5 overflow-x-hidden'>
        <div className=' md:w-[90%]  fixed'>
        <img src={mountain} className=' h-[425px] w-[380px] md:w-screen  md:h-[669px] overflow-x-hidden'/>
        </div>
    </div>
  )
}

export default Img