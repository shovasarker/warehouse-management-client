import React from 'react'

const LinkButton = ({ onClick, value }) => {
  return (
    <button
      type='button'
      onClick={onClick}
      className='text-teal-500 tracking-wider font-medium hover:underline underline-offset-1 transition-all duration-300 cursor-pointer text-center'
    >
      {value}
    </button>
  )
}

export default LinkButton
