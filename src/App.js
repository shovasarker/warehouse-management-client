import { Route, Routes } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import Header from './pages/shared/header/Header'
import SignIn from './pages/SignIn'

import 'react-toastify/dist/ReactToastify.css'

function App() {
  return (
    <div className='font-poppins'>
      <Header />
      <Routes>
        <Route path='/signin' element={<SignIn />} />
      </Routes>
      <ToastContainer />
    </div>
  )
}

export default App
