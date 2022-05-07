import React from 'react'

const Spinner = ({ center, small }) => {
  return (
    <div
      className={`${
        center ? 'h-[400px]' : 'h-auto'
      } flex justify-center items-center`}
    >
      <div
        className={`${
          small ? 'w-5 h-5' : 'w-8 h-8'
        } rounded-full border-[3px] border-gray-500 border-b-transparent animate-spin`}
      ></div>
    </div>
  )
}

export default Spinner
