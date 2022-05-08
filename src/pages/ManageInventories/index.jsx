import React from 'react'
import { useNavigate } from 'react-router-dom'
import useItems from '../../hooks/useItems'
import ItemsContainer from '../shared/itemsContainer/ItemsContainer'
import Button from '../standalone/Button'
import Spinner from '../standalone/Spinner'
import Title from '../standalone/Title'

const ManageInventories = () => {
  const [items, loading, setItems] = useItems()
  const navigate = useNavigate()

  if (loading) {
    return <Spinner center primary />
  }

  return (
    <div className='container px-6 my-20'>
      <div className='w-full flex flex-row justify-between items-center flex-wrap'>
        <Title title={'All AVailable Cars in our Inventory'} />
        <Button outlined primary onClick={() => navigate('/additem')}>
          Add New Item
        </Button>
      </div>
      <ItemsContainer items={items} setItems={setItems} />
    </div>
  )
}

export default ManageInventories
