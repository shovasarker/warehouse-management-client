import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Spinner from '../standalone/Spinner'
import Title from '../standalone/Title'
import ItemsContainer from '../shared/itemsContainer/ItemsContainer'

const BrandsItem = () => {
  const { brandName } = useParams()
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const getItems = async () => {
      setLoading(true)
      const { data } = await axios.get(
        `https://wmss-server.herokuapp.com/items?brand=${brandName}`
      )

      setItems(data)
      setLoading(false)
    }

    getItems()
  }, [brandName])

  if (loading) return <Spinner center primary />

  return (
    <div className='container px-6 my-20'>
      <Title center title={`All Cars From brand ${brandName}`} />
      <ItemsContainer items={items} home />
    </div>
  )
}

export default BrandsItem
