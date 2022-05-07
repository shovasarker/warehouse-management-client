import React from 'react'
import CustomLink from '../../../../standalone/CustomLink'
import Logo from '../../../../standalone/Logo'
import MenuButton from '../../../../standalone/MenuButton'

const links = [
  ['/', 'Home'],
  ['/manage inventory', 'Manage Inventories'],
  ['/blogs', 'Blogs'],
]

const Navbar = () => {
  return (
    <nav className='container px-6 md:px-10 lg:px-16 xl:px-20 py-5'>
      <div className='flex flex-row justify-between items-center gap-5'>
        <Logo />
        <MenuButton />
        <div
          className={`absolute lg:static flex flex-col lg:flex-row items-center lg:justify-end gap-4`}
        >
          {links?.map(([to, item], i) => (
            <CustomLink to={to} key={i}>
              {item}
            </CustomLink>
          ))}
        </div>
      </div>
    </nav>
  )
}

export default Navbar
