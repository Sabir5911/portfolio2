import React from 'react'
import Wrapper from '../Shared/Wrapper'
import Button from '../Shared/Button'
import Link from 'next/link'

export default function Header() {  
  return <>
  
<div className='sticky top-0 '>
<Wrapper>

      <div className='flex justify-between py-5      items-center justify-center bg-white' >
        <div className='text-xl font-bold '>
          Sabir Ali
        </div>
        <ul className='flex space-x-10 text-xl  font-medium'>

          < a href='#Home' >Home</a>
          <a  href='#section' >About</a>
           <a href='#pricing'>Pricing</a>
          <a href={'#contect'}>Contect </a> 
          <a href='#projects'>Portfolio</a>

        </ul>

       
      </div>

<hr  className='border-2 my-2'/>
</Wrapper>

      </div>

  </> 
}
