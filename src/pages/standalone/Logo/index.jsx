import React from 'react'
import { Link } from 'react-router-dom'

const Logo = ({ light }) => {
  return (
    <Link
      to={'/'}
      className={`border-[3px] ${
        light ? 'border-white text-white' : 'border-gray-600 text-gray-800'
      } text-xl lg:text-4xl tracking-wide font-bold pt-2 pb-1 px-2 font-logo`}
    >
      Skyline Enterprise
    </Link>
  )
}

export default Logo
