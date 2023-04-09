import Image from 'next/image'
import Wrapper from '../Shared/Wrapper'
import men from '../Assets/men.png'
export default function Hero() {

  return <>

<section id='Home'>    
      <Wrapper>
        <div className='grid grid-cols-2   items-center' >

          <div >
            <text className='text-lg font-normal '>Freelance Services for your unique needs.</text>
            <h1 className='text-6xl font-bold my-7'>Hello, I’m <span className='text-[#f9004d]'>Sabir</span><br />  Welcome to my<br /> World.</h1>
          </div>
          <div >
       
            <Image src={men} alt='boy' width={'500'} height='500'/>
          </div>
        </div>
        </Wrapper> 

     
        </section>    

  </>
}
