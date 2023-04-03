import React, { FC } from 'react'

const Button2:FC <{Text:string }>= ({Text}) => {
  return (
    <button className=' text-black px-2 py-1 -my-1  rounded-md font-normal   hover:scale-105 duration-300 border-2 border-blue-500 '> 
{Text}
    </button>
  )
}

export default Button2