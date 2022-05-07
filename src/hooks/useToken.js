import axios from 'axios'
import { useEffect, useState } from 'react'

const useToken = (user) => {
  const [token, setToken] = useState('')

  useEffect(() => {
    const getToken = async () => {
      if (!user) return
      const { data } = await axios.post('http://localhost:5000/signin', {
        email: user?.email,
      })

      console.log(data)
      localStorage.setItem('accessToken', data?.accessToken)
      setToken(data?.accessToken)
    }

    getToken()
  }, [user])

  return [token]
}

export default useToken
