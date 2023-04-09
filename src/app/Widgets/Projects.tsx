import Image from 'next/image'
import Wrapper from '../Shared/Wrapper'
import pena from '../Assets/pena.png'
import todo from '../Assets/todo.png'
import Button from '../Shared/Button'
import Link from 'next/link'

export default function Projects() {
  return <>
    <section>

    </section>
    <div className='mt-32'>

      <Wrapper >
        <div className=' text-center '>
          <h1 className='text-center text-4xl font-bold mb-6 '>Portfolio</h1>
          <text className='text-center '>My web design portfolio showcases my ability to create beautiful and effective websites<br /> for businesses of all sizes, with a focus on user experience, accessibility, and mobile responsiveness.
          </text>
        </div>

        <div className='flex justify-around  items-center mt-14 cursor-pointer'>
          <div className='flex flex-col'>
            <Image src={pena} alt='logo' className=' w-[500px] h-[550] object-contain ' />


            <Link href={'https://pena5911-web.vercel.app/'} className='mx-auto' target={'_blank'}>

              <button className='bg-purple-600 text-white p-2 rounded-md hover:shadow-xl font-semibold  text-lg hover:scale-105 duration-500 mt-5 w-48' >

                preview
              </button>

            </Link>

          </div>


          <div className='flex flex-col items-center'>

            <Image src={todo} alt='logo' className='mb-4  w-[440px] h-[550] object-contain' />


            <Link href={'https://chakra5911.vercel.app/'} target={'_blank'}>

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
