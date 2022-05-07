import React from 'react'
import { Link, useMatch, useResolvedPath } from 'react-router-dom'

const CustomLink = ({ to, children, onClick, className, light }) => {
  const { pathname } = useResolvedPath(to)
  const match = useMatch({ path: pathname, end: true })
  return (
    <Link
      to={to}
      onClick={onClick}
      className={`tracking-wide font-medium border-b-2 border-b-transparent ${
        match
          ? 'text-teal-500 hover:border-b-teal-500'
          : light
          ? 'text-white hover:border-b-white'
          : 'text-gray-700 hover:border-b-gray-700'
      } transition-all duration-300 px-1 ${className ? className : ''}`}
    >
      {children}
    </Link>
  )
}

export default CustomLink
