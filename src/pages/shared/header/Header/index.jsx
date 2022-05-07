import React from 'react'
import { MobileMenuProvider } from '../../../../contexts/MobileMenuContext'
import Navbar from '../components/Navbar'

const Header = () => {
  return (
    <header>
      <MobileMenuProvider>
        <Navbar />
      </MobileMenuProvider>
    </header>
  )
}

export default Header
