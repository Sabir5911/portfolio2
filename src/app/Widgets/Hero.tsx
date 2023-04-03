import Image from 'next/image'
import Wrapper from '../Shared/Wrapper'
import men from '../Assets/men.png'
export default function Hero() {

  return <>

        
      <Wrapper>
        <div className='flex   justify-around bg-white  pb-7  px-14 items-center' >

          <div >
            <text className='text-lg font-normal '>FREELANCE DIGITAL DESIGNER</text>
            <h1 className='text-6xl font-bold my-7'>Hello, I’m <span className='text-[#f9004d]'>Sabir</span><br />  Welcome to my<br /> World.</h1>
          </div>


          <div >
       
            <Image src={men} alt='boy' width={'500'} height='500'/>
          </div>
        </div>
        </Wrapper> 

     


  </>
}
