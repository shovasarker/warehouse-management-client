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
import PageHelmet from './pages/standalone/PageHelmet'

function App() {
  return (
    <div className='font-poppins'>
      <Header />
      <Routes>
        <Route
          path='/'
          element={
            <PageHelmet title={'Home'}>
              <Home />
            </PageHelmet>
          }
        />
        <Route
          path='/manage-inventory'
          element={
            <PageHelmet title={'Manage Inventories'}>
              <ManageInventories />
            </PageHelmet>
          }
        />
        <Route
          path='/inventory/:id'
          element={
            <PageHelmet title={'Manage Item'}>
              <RequireAuth>
                <ManageItem />
              </RequireAuth>
            </PageHelmet>
          }
        />
        <Route
          path='/additem'
          element={
            <PageHelmet title={'Add Item'}>
              <RequireAuth>
                <AddItem />
              </RequireAuth>
            </PageHelmet>
          }
        />
        <Route
          path='/myitems'
          element={
            <PageHelmet title={'My Items'}>
              <RequireAuth>
                <MyItems />
              </RequireAuth>
            </PageHelmet>
          }
        />
        <Route
          path='/brand/:brandName'
          element={
            <PageHelmet title={'Brands Item'}>
              <BrandsItem />
            </PageHelmet>
          }
        />
        <Route
          path='/signin'
          element={
            <PageHelmet title={'Sign in'}>
              <SignIn />
            </PageHelmet>
          }
        />
        <Route
          path='/signup'
          element={
            <PageHelmet title={'Sign Up'}>
              <SignUp />
            </PageHelmet>
          }
        />
        <Route
          path='/blogs'
          element={
            <PageHelmet title={'Blogs'}>
              <Blogs />
            </PageHelmet>
          }
        />
        <Route
          path='*'
          element={
            <PageHelmet title={'Not Found'}>
              <NotFound />
            </PageHelmet>
          }
        />
      </Routes>
      <Footer />
      <ToastContainer />
    </div>
  )
}

export default App
