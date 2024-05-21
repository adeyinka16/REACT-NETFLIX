import React, { useState } from 'react'
import { PiTranslateBold } from "react-icons/pi";
import { IoMdArrowDropdown } from "react-icons/io";

const Footer = () => {
  const [isOpen, setisOpen] = useState(false);
  const [SelectedOpt, setSelectedOpt] = useState('English');

  const toggleDropdown = () => setisOpen(!isOpen);
  const handleDropdown = (option) => {
    setSelectedOpt(option);
    setisOpen(false);
  }


  return (
    <div className=' bg-black border-t-[6px] border-gray-600'>
        <div className='h-[70vh] mt-[4%]  '>
          <div className='text-stone-300 w-[80vw] m-[auto] mt-20 mr-[20px] flex justify-between items-center underline'>
            <a href="#" >Questions? Contact us.</a>
          </div>
            <div className='flex justify-evenly items-center  w-[80vw] m-[auto]  '>
            <div className='text-stone-300 flex gap-3 mt-6 flex-col '>
              
              <a href="" className='underline'>Faqs</a>
              <a href="" className=' underline'>Investor Relations</a>
              <a href="" className='underline'>Privacy</a>
              <a href="" className='underline'>Speed Test</a>
      <div className="w-full m-auto mt-8 flex justify-center items-center">
         <div className="relative w-full max-w-lg">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3">
               <PiTranslateBold size={20} className="text-white" />
            </span>
           <div className="p-[5px] pl-10 w-[100%] text-white rounded-md bg-transparent border appearance-none" onClick={toggleDropdown}>
                {/* <option value="en">English</option> */}
                {SelectedOpt}
           </div>
            <IoMdArrowDropdown size={35} className="text-white absolute inset-y-0 right-0  pl-2 flex items-center pr-2 cursor-pointer" onClick={toggleDropdown} />
            {isOpen && (
          <div className="absolute mt-1 w-full rounded-md shadow-lg bg-blue-600 z-10">
            <div
              className="text-white p-[5px] pl-10 cursor-pointer hover:bg-blue-600"
              onClick={() => handleDropdown('English')}
            >
              English
              Spanish
              Chinese
            </div>
          </div>
        )}
         </div>
      </div >
      <div className='mt-4'>
      <span>Netflix Nigeria</span>

      </div>
     

 
</div>
           


      
            <div className=' text-stone-300 flex gap-3 mb-[100px] flex-col underline'>
              <a href="" className=''>Help Center</a>
              <a href="" className=''>Jobs</a>
              <a href="" className=''>Cookie Preferencesy</a>
              <a href="" className=''>Legal Notices</a>
            </div>
            <div className='text-stone-300 flex gap-3  mb-[100px] flex-col underline'>
              <a href="" className=''>Account</a>
              <a href="" className=''>Ways to Watch</a>
              <a href="" className=''>Corporate Information</a>
              <a href="" className=''>Only on Netflix</a>
            </div>
            <div className='text-stone-300 flex gap-3  mb-[150px] flex-col underline'>
              <a href="" className=''>Media Center</a>
              <a href="" className=''>Terms of Use</a>
              <a href="" className=''>Contact Us</a>
            </div>

            </div>


        </div>
        {/* <p className='text-white font-bold'>Questions? Contact us.</p> */}
    </div>
  )
}

export default Footer