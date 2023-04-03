import Wrapper from '../Shared/Wrapper'
import men2 from '../Assets/men.png'
import Image from 'next/image'
import Button2 from '../Shared/Button2'
import { data3 } from './Data/Data'

export default function About() {
  return <>

    <Wrapper>

      <div className='mt-28'>


        <div className=' flex shadow-xl border-2 bg-blue-50 rounded-lg h-[35rem] min-w-[50rem]  mx-32 items-center justify-center '  >

          {/* FOR LEFT BOX */}
          <div className='w-1/2'>
            <Image src={men2} width='500' height={'500'} alt='logo' />


          </div>
          {/* FOR LEFT BOX */}

          <div className='w-1/2 text-left font-normal ' >
            <h1 className='text-4xl mb-7 '>About me</h1>
            <text className=' '>
              As a highly motivated and driven individual with a passion for making a positive impact, I have a unique blend of technical and interpersonal skills, thanks to my background in computer science. I am able to tackle complex problems with ease, and I never lose sight of my ultimate goal, even when facing challenges.</text>
            <br />
            <div className='mt-10 flex gap-6 flex-wrap' >

              {
                data3.map((elm, id) => (

                  <Button2 Text={elm.LI} key={elm.id}></Button2>

                ))
              }
            </div>

          </div>

        </div>
      </div>

    </Wrapper>




  </>
}
