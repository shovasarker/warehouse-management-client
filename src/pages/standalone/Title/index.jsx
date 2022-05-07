import React from 'react'

const Title = ({ light, center, small, title }) => {
  return (
    <h2
      className={`${light ? 'text-white' : 'text-gray-600'} ${
        center ? 'text-center' : 'text-left'
      } ${
        small ? 'text-xl' : 'text-xl md:text-2xl lg:text-3xl'
      } font-medium my-5`}
    >
      {title}
    </h2>
  )
}

export default Title
