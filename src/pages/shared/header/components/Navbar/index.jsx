import React from 'react'
import Logo from '../../../../standalone/Logo'
import MenuButton from '../../../../standalone/MenuButton'
import Menu from '../Menu'

const Navbar = () => {
  return (
    <nav className='h-20 container px-6 flex items-center '>
      <div className='w-full flex flex-row justify-between items-center gap-5'>
        <Logo />
        <MenuButton />
        <Menu />
      </div>
    </nav>
  )
}

export default Navbar
