import Wrapper from '../Shared/Wrapper'
import Button from '../Shared/Button'
import {data} from './Data/Data2'

export default function Pricing() {
  return <>
    <Wrapper>
      <div className='mt-36'>
        
        <div className=' flex flex-col  border-2 bg-blue-50  h-[39rem] min-w-[40rem]  mx-32 items-center' >
        <h2 className='text-3xl font-medium text-slate-600 mt-24'>Pricing Tabel</h2>
        <div className='grid grid-cols-3 mt-10 gap-11'>
{
  data.map((elm,id)=>(
    

<div className='flex flex-col  w-[18rem] bg-white  items-center  shadow-xl' key={elm.id}>
    <h2 className='text-2xl mt-20 font-semibold'>{elm.Heading}</h2>

    <text className='text-sm font-medium mt-2'>{elm.work}</text>
    <text className='text-3xl font-bold mt-8 mb-4 text-purple-500'>{elm.price}</text>
    <text className='text-sm font-medium'>{elm.text1}</text>
    <text className='text-sm font-medium mt-2'>{elm.text2}</text>
    <button className='bg-purple-600 text-white p-2 rounded-lg hover:shadow-xl font-semibold mt-6 mb-10 text-base hover:scale-105 duration-300 '> 
Hire me
</button>   
</div>
  ))
  }
        
          </div>


          
        </div>

      </div>
    </Wrapper>
  </>
}
