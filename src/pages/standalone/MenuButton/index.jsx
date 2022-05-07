import React from 'react'
import { AiOutlineMenu } from 'react-icons/ai'

const MenuButton = ({ light }) => {
  return (
    <button
      className={`${
        light ? 'text-white' : 'text-gray-700'
      }  lg:hidden px-2 py-1 border border-gray-700`}
    >
      <AiOutlineMenu />
    </button>
  )
}

export default MenuButton
