import React, { FC } from 'react'


const Wrapper:FC <{children:React.ReactNode}>= ({children}) => {
    return (
      <div className='max-w-[1370px] mx-auto'>
  {children}
      </div>
    )
  }
  
  export default Wrapper