import axios from 'axios'
import { signOut } from 'firebase/auth'
import React, { useEffect, useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import auth from '../../firebase/firebase.init'
import ItemsContainer from '../shared/itemsContainer/ItemsContainer'
import Spinner from '../standalone/Spinner'
import Title from '../standalone/Title'

const MyItems = () => {
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(false)
  const [user] = useAuthState(auth)
  const navigate = useNavigate()

  useEffect(() => {
    const getItems = async () => {
      const accessToken = localStorage.getItem('accessToken')
      if (!accessToken) {
        toast.error('Access Token Not Found!')
        return
      }

      if (!user) return

      try {
        setLoading(true)
        const { data } = await axios.get(
          `http://localhost:5000/item?supplierEmail=${user?.email}`,
          {
            headers: {
              authorization: `Bearer ${accessToken}`,
            },
          }
        )
        setItems(data)
        setLoading(false)
      } catch (error) {
        if (error.response.status === 401 || error.response.status === 403) {
          signOut(auth)
          navigate('/signin')
        }
      }
    }

    getItems()
  }, [user, navigate])

  if (loading) return <Spinner center primary />

  return (
    <main className='container px-6'>
      <Title title={'My Items'} center />
      <ItemsContainer items={items} />
    </main>
  )
}

export default MyItems
