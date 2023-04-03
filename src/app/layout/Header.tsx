import React from 'react'
import Wrapper from '../Shared/Wrapper'
import Button from '../Shared/Button'

export default function Header() {
  return <>
  
<div className='sticky -top-1 via-zinc-50'>



      <div className='flex justify-around py-9     drop-shadow-xl  items-center  bg-white' >
        <div className='text-xl font-bold '>
          Sabir Ali
        </div>
        <ul className='flex space-x-10 text-xl  font-bold flex-grow[1]'>
          <li>Home</li>
          <li>About</li>
          <li>Services</li>
          <li>Contect </li>

        </ul>

        <div>
          <Button Text='Lets Talk' />
        </div>
      </div>



      </div>

  </> 
}
