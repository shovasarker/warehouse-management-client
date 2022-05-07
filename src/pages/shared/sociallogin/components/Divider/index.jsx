import React from 'react'

const Divider = () => {
  return (
    <div className='flex gap-2 items-center justify-center my-5'>
      <div className='w-[35%] h-px bg-gray-600'></div>
      <span>or</span>
      <div className='w-[35%] h-px bg-gray-600'></div>
    </div>
  )
}

export default Divider
