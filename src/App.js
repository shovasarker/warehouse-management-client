import { Route, Routes } from 'react-router-dom'
import Header from './pages/shared/header/Header'
import SignIn from './pages/SignIn'

function App() {
  return (
    <div className='font-poppins'>
      <Header />
      <Routes>
        <Route path='/signin' element={<SignIn />} />
      </Routes>
    </div>
  )
}

export default App
