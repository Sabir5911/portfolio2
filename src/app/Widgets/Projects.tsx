import Image from 'next/image'
import React from 'react'
import Wrapper from '../Shared/Wrapper'
import pena from '../Assets/pena.png'
import todo from '../Assets/todo.png'
import Button from '../Shared/Button'
import Link from 'next/link'

export default function Projects() {  
  return <>
  <div  className='mt-36'>

  <Wrapper >
<div className=' text-center px-14'>
    <h1 className='text-center text-4xl font-bold mb-6 '>Portfolio</h1>
    <text className='text-center '>My web design portfolio showcases my ability to create beautiful and effective websites<br/> for businesses of all sizes, with a focus on user experience, accessibility, and mobile responsiveness.
</text>
</div>

<div className='flex justify-center gap-28 items-center mt-14'>
    <div  className='flex flex-col'>
    <Image src={pena} alt='logo'  className=' w-[500px] h-[550] object-contain ' />


<Link href={'https://pena5911-web.vercel.app/'} className='mx-auto' target={'_blank'}>

<button className='bg-purple-600 text-white p-2 rounded-md hover:shadow-xl font-semibold  text-lg hover:scale-105 duration-500 mt-5 w-48' > 

    preview
    </button>

</Link>

    </div>


    <div className='flex flex-col'>

    <Image src={todo} alt='logo'  className='mb-4  w-[440px] h-[550] object-contain'/>


<Link href={'https://chakra5911.vercel.app/'} className='mx-auto' target={'_blank'}>
    
<button className='bg-purple-600 text-white p-2 rounded-md hover:shadow-xl font-semibold  text-lg hover:scale-105 duration-500 mt-3  w-48' > 

preview
</button>
</Link>
</div>
 
</div>

  </Wrapper>
  </div>

  </>
}
