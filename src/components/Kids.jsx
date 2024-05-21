import React from 'react'
import kids from "./../assets/images/kids.png"

const Kids = () => {
  return (
    <div className='bg-black border-t-[6px] border-gray-600'>
        <div className='flex justify-between items-center w-[80%] m-[auto]'>
            <div className='basis-1/2'>
                 <img src={kids} alt="" /> 

            </div>
            <div className='basis-1/2'>
                <h2 className='text-white text-[48px] font-bold'>Create profiles for kids.</h2>
                <p className='text-white text-[22px] font-regular'>Send kids on adventures with their favorite characters in a space made just for them—free with your membership.</p>
            </div>
            {/* <img src={mobile} alt="" /> */}
            
        </div>
    </div>
  
  )
}

export default Kids