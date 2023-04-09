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

          <Link href='#Home'>Home</Link>
          <a  href='#section'>About</a>
           <li>Pricing</li>
          <li>Contect </li> 
          <li>Portfolio</li>

        </ul>

       
      </div>

<hr />
</Wrapper>

      </div>

  </> 
}
