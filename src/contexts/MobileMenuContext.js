import { createContext, useState } from 'react'

const MobileMenuContext = createContext()

export const MobileMenuProvider = ({ children }) => {
  const [menu, setMenu] = useState(false)
  return (
    <MobileMenuContext.Provider value={{ menu, setMenu }}>
      {children}
    </MobileMenuContext.Provider>
  )
}

export default MobileMenuContext
