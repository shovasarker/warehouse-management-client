import axios from 'axios'
import { useEffect, useState } from 'react'

const useItems = () => {
  const [items, setItems] = useState([])

  useEffect(() => {
    const getItems = async () => {
      try {
        const { data } = await axios.get(
          'https://wmss-server.herokuapp.com/items'
        )
        if (!Array.isArray(data)) {
          throw data
        }
        setItems(data)
      } catch (error) {
        console.log(error)
      }
    }

    getItems()
  }, [])

  return [items]
}

export default useItems
