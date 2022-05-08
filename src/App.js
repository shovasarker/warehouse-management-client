import { Route, Routes } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import Header from './pages/shared/header/Header'
import SignIn from './pages/SignIn'

import 'react-toastify/dist/ReactToastify.css'
import SignUp from './pages/signup/SignUp'
import Blogs from './pages/blogs/Blogs'
import Home from './pages/home/Home'
import NotFound from './pages/NotFound'
import ManageInventories from './pages/ManageInventories'
import ManageItem from './pages/manageitem/ManageItem'
import RequireAuth from './pages/standalone/RequireAuth'
import AddItem from './pages/AddItem'
import MyItems from './pages/MyItems'
import Footer from './pages/shared/Footer'
import BrandsItem from './pages/BrandsItem'

function App() {
  return (
    <div className='font-poppins'>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/manage-inventory' element={<ManageInventories />} />
        <Route
          path='/inventory/:id'
          element={
            <RequireAuth>
              <ManageItem />
            </RequireAuth>
          }
        />
        <Route
          path='/additem'
          element={
            <RequireAuth>
              <AddItem />
            </RequireAuth>
          }
        />
        <Route
          path='/myitems'
          element={
            <RequireAuth>
              <MyItems />
            </RequireAuth>
          }
        />
        <Route path='/brand/:brandName' element={<BrandsItem />} />
        <Route path='/signin' element={<SignIn />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/blogs' element={<Blogs />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      <Footer />
      <ToastContainer />
    </div>
  )
}

export default App
