import React from 'react'
import useItems from '../../hooks/useItems'
import ItemsContainer from '../shared/itemsContainer/ItemsContainer'
import Spinner from '../standalone/Spinner'
import Title from '../standalone/Title'

const ManageInventories = () => {
  const [items, loading] = useItems()

  if (loading) {
    return <Spinner center primary />
  }

  return (
    <div className='container px-6 my-20'>
      <Title title={'All AVailable Cars in our Inventory'} center />
      <ItemsContainer items={items} />
    </div>
  )
}

export default ManageInventories
