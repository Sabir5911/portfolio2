import React, { FC } from 'react'

const Button:FC <{Text:string}>= ({Text}) => {
  return (
    <button className='bg-purple-600 text-white p-2 rounded-lg hover:shadow-xl font-semibold  text-lg hover:scale-105 duration-300 '> 
{Text}
    </button>
  )
}

export default Button