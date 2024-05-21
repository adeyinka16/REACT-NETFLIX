import React from 'react'
import { GoDownload } from "react-icons/go";
import mobile from "./../assets/images/mobile-0819.jpg"
import boxshot from "./../assets/images/boxshotnetflix.png"


const Mobile = () => {
  return (
    <div className='h-[75vh] bg-cover bg-black'>
      <div className='bg-black border-t-[6px] border-gray-600 '>
        <div className='flex justify-between items-center py-[24px] m-[auto]'>
            <div className=' relative  basis-1/2  left-[100px] '>
                 <img src={mobile} alt="" className=' w-[80%] ' /> 
                 <div className=' bg-black absolute top-[260px]  right-[420px] flex justify-between items-center border-[2px] border-gray-600 p-[10px] 
             w-[40%] mx-[-165px] rounded-[15px]'>
              
              <img src={boxshot} alt='' className='w-[50px]'/>
              
              <h5 className='text-white'>Stranger Things <p className=' text-blue-600'>Downloading... </p></h5>
              <GoDownload size={20} className='text-white' />

            </div>
            </div >
            {/* <div className=' bg-red-600 absolute mt-[20%]  flex justify-between items-center border-[2px] border-gray-600 p-[30px] 
             w-[30%] m-[auto] rounded-[15px]'>
              
              <img src={boxshot} alt='' className=' absolute    w-[50px]'/>
              
              <p className='text-white'>Stranger Things <span className=' text-blue-600'>Downloading... </span></p>

            </div> */}
            <div className='basis-1/3 m-[auto] right-[180px]'>
                <h1 className='text-white text-[52px] font-bold'>Download your shows to watch offline.</h1>
                <p className='text-white text-[20px] font-regular'>Save your favorites easily and always have something to watch.</p>

            </div>
            {/* <img src={mobile} alt="" /> */}
            
        </div>
    </div>
    </div>
  )
}

export default Mobile