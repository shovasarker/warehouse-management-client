import { signOut } from 'firebase/auth'
import React, { useContext } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import MobileMenuContext from '../../../../../contexts/MobileMenuContext'
import auth from '../../../../../firebase/firebase.init'
import Button from '../../../../standalone/Button'
import CustomLink from '../../../../standalone/CustomLink'

const links = [
  ['/', 'Home'],
  ['/manage-inventory', 'Manage Inventories'],
  ['/blogs', 'Blogs'],
]

const Menu = () => {
  const { menu, setMenu } = useContext(MobileMenuContext)
  const [user] = useAuthState(auth)
  return (
    <div
      className={`absolute lg:static left-1/2 -translate-x-1/2 lg:translate-x-0 ${
        menu ? 'top-20' : '-top-full'
      } bg-white lg:bg-transparent w-full lg:w-auto flex flex-col lg:flex-row items-center lg:justify-end gap-2 py-5 lg:py-0 transition-all duration-500`}
    >
      {links?.map(([to, item], i) => (
        <CustomLink to={to} key={i} onClick={() => setMenu(false)}>
          {item}
        </CustomLink>
      ))}
      {user ? (
        <>
          <CustomLink to='/additem' onClick={() => setMenu(false)}>
            Add Item
          </CustomLink>
          <Button outlined primary onClick={() => signOut(auth)}>
            Sign Out
          </Button>
        </>
      ) : (
        <>
          <CustomLink to={'/signin'} onClick={() => setMenu(false)}>
            Sign In
          </CustomLink>
        </>
      )}
    </div>
  )
}

export default Menu
