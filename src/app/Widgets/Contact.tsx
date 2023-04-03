import React from 'react'
import Wrapper from '../Shared/Wrapper'
import Image from 'next/image'
import maps from '../../../public/Map.png'
export default function () {
  return <>

    <div className='mt-16 w-[1010px] mx-auto mb-20'>

    <h1 className='text-center font-medium text-3xl'>Contact me</h1>
    <div className='flex justify-evenly'>
    <div className='flex   justify-start '>
        <div >
   
   <div className='flex gap-5 mt-10 '>
    <div>
    <label htmlFor="first-name" className='text-lg'>First Name</label>
    <br />
<input  placeholder={'Enter your first name'}   className='w-56 h-10 rounded-md placeholder-opacity-50 px-2 rounded-sm outline-none border border-slate-400'/> 

    </div>
    <div>
    <label htmlFor="last-name" className='text-lg'>last Name</label>
    <br />
<input  placeholder={'Enter your last name'}   className='w-56 h-10 rounded-md placeholder-opacity-50 px-2 rounded-sm outline-none border border-slate-400'/> 

    </div>
    
   </div>
   <div className='mt-3'>
    <label htmlFor="first-name" className='text-lg'>Email </label>
    <br />

<input  placeholder={'Enter your Email'}   className='w-[400px] h-10 rounded-md placeholder-opacity-50 px-2 rounded-sm outline-none border border-slate-400'/> 
<div className='mt-4'>
    
<label htmlFor="message">Message:</label><br />
  <textarea id="message" name="message" placeholder="Enter your message" className='w-[400px] h-40 p-2 h-10 rounded-md placeholder-opacity-50 px-2 rounded-sm outline-none border border-slate-400'></textarea>
     </div>
     <button className='bg-purple-600 text-white p-2 rounded-lg hover:shadow-xl font-semibold mt-3 mb-10 text-base hover:scale-105 duration-300  w-48'> 
Submit
</button>
    </div>

</div>
{/* ////////////////////// */}
        </div>
        <div className='mt-16'>
        <Image src={maps} alt='google maps' width={'500'} height={'1300'} />
      </div>

    </div>
      
     
    </div>
  
  
  </>
}
