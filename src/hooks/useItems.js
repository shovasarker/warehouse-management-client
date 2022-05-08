import axios from 'axios'
import { useEffect, useState } from 'react'

const useItems = () => {
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const getItems = async () => {
      try {
        setLoading(true)
        const { data } = await axios.get(
          'https://wmss-server.herokuapp.com/items'
        )
        if (!Array.isArray(data)) {
          throw data
        }
        setItems(data)
        setLoading(false)
      } catch (error) {
        console.log(error)
        setLoading(false)
      }
    }

    getItems()
  }, [])

  return [items, loading]
}

export default useItems
