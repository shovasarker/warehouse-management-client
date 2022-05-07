import React, { useContext } from 'react'
import { AiOutlineMenu } from 'react-icons/ai'
import { GiTireIronCross } from 'react-icons/gi'
import MobileMenuContext from '../../../contexts/MobileMenuContext'

const MenuButton = ({ light }) => {
  const { menu, setMenu } = useContext(MobileMenuContext)
  return (
    <button
      onClick={() => setMenu(!menu)}
      className={`${
        light ? 'text-white border-white' : 'text-gray-700 border-gray-700'
      }  lg:hidden px-2 py-1 border shadow-lg active:scale-95 z-50 `}
    >
      {menu ? (
        <GiTireIronCross className='w-5 h-5' />
      ) : (
        <AiOutlineMenu className='w-5 h-5' />
      )}
    </button>
  )
}

export default MenuButton
