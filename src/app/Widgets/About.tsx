import Wrapper from '../Shared/Wrapper'
import men2 from '../Assets/men.png'
import Image from 'next/image'
import Button2 from '../Shared/Button2'
import { data3 } from './Data/Data'

export default function About() {
  return <>

<section>
    <Wrapper>

      <div className='mt-32 '  id='section' >


        <div className=' flex  border-2 bg-blue-50    items-center justify-between rounded-md'  >

          {/* FOR LEFT BOX */}
          <div className='flex-1'>
            <Image src={men2} width='500' height={'500'} alt='logo' />

          </div>

          {/* FOR right BOX */}

          <div className='flex-1  font-normal ' >
            <h1 className='text-3xl mb-3 font-medium'>About me</h1>
            <text className='text-base  '>
              As a highly motivated and driven individual with a passion for making a positive impact, I have a unique blend of technical and interpersonal skills, thanks to my background in computer science. I am able to tackle complex problems with ease, and I never lose sight of my ultimate goal, even when facing challenges.</text>
            <br />
            <div className='mt-6 flex gap-6 flex-wrap text-sm' >

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
    </section>



  </>
}
