import React from 'react'

const Button = ({
  children,
  type = 'button',
  onClick,
  className,
  outlined,
  primary,
  full,
  small,
}) => {
  return (
    <button
      onClick={onClick}
      type={type}
      className={`${
        full ? 'w-full' : 'w-auto'
      } flex justify-center items-center gap-2 ${
        small ? 'px-2 py-1 text-sm' : 'px-4 py-2'
      } border ${
        outlined
          ? `bg-transparent hover:text-white ${
              primary
                ? 'text-teal-500 hover:bg-teal-500'
                : 'text-gray-600 hover:bg-gray-600'
            }`
          : `text-white hover:bg-white ${
              primary
                ? 'bg-teal-500 hover:text-teal-500'
                : 'bg-gray-600 hover:text-gray-600'
            }`
      } ${
        primary ? 'border-teal-500' : 'border-gray-700'
      } font-medium transition-all duration-300 ${className ? className : ''}`}
    >
      {children}
    </button>
  )
}

export default Button
