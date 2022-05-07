import { Route, Routes } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import Header from './pages/shared/header/Header'
import SignIn from './pages/SignIn'

import 'react-toastify/dist/ReactToastify.css'
import SignUp from './pages/signup/SignUp'

function App() {
  return (
    <div className='font-poppins'>
      <Header />
      <Routes>
        <Route path='/signin' element={<SignIn />} />
        <Route path='/signup' element={<SignUp />} />
      </Routes>
      <ToastContainer />
    </div>
  )
}

export default App
