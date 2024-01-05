import React from 'react'

function Form() {
  return (
    <div className=' w-[375px] md:w-[40%] mt-8 md:mt-0 ml-4 md:ml-0 '>
        <form className=' flex flex-col gap-4'>
            <div className=' flex flex-col md:flex-row gap-6'>
                <label className=' font-thin '>
                    First Name
                    <input type="text" name='name'  className=' border border-slate-500  h-8 mt-2 w-[20rem] md:w-[10rem]' />
                </label>
                <label className=' font-thin ' >Last Name
                    <input type="text"   className=' border border-slate-500 h-8 mt-2 w-[20rem] md:w-[11rem]'/>
                </label>
            </div>
            <div className=' flex flex-col'>
                <label  className=' flex flex-col font-thin'>
                    Email *
                    <input type="email"  className=' border border-slate-500 h-9 mt-2 w-[20rem] md:w-[22.9rem]'/>
                </label>
            </div>
                <div>
                    <label className=' flex flex-col font-thin'>
                        Phone
                        <input type="text" placeholder='Phone '  className=' border border-slate-500 mt-2 h-9  w-[20rem] md:w-[22.9rem]'/>
                    </label>
                </div>
                <div>
                    <label className=' flex flex-col font-thin'>
                        Message
                        <input type="text" className=' border border-slate-500 h-20 mt-2 w-[20rem] md:w-[22.9rem]' />
                    </label>
                </div>
                <div className='flex justify-end w-[20rem] md:w-[22.9rem]' >
                    <a href="/">
                        <div className=' flex border border-black p-1 w-24 justify-center items-center bg-emerald-900 text-white'>
                            Send
                        </div>
                    </a>
                </div>
        </form>
    </div>
  )
}

export default Form