import React from 'react'
import { useNavigate } from 'react-router-dom'
import useItems from '../../../../hooks/useItems'
import ItemsContainer from '../../../shared/itemsContainer/ItemsContainer'
import Button from '../../../standalone/Button'
import Spinner from '../../../standalone/Spinner'
import Title from '../../../standalone/Title'

const Items = () => {
  const [items, loading] = useItems()
  const navigate = useNavigate()

  if (loading) {
    return <Spinner center primary />
  }

  return (
    <div className='container px-6 my-10'>
      <Title center title={'Cars Available in our Inventory'} />
      <ItemsContainer items={items} perPage={6} home />
      <Button
        primary
        className={'mx-auto my-8'}
        onClick={() => navigate('/manage-inventory')}
      >
        Manage Inventories
      </Button>
    </div>
  )
}

export default Items
