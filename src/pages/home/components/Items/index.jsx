import React from 'react'
import { useNavigate } from 'react-router-dom'
import useItems from '../../../../hooks/useItems'
import ItemsContainer from '../../../shared/itemsContainer/ItemsContainer'
import Button from '../../../standalone/Button'
import Title from '../../../standalone/Title'

const Items = () => {
  const [items] = useItems()
  const navigate = useNavigate()
  return (
    <div className='container px-6 my-10'>
      <Title center title={'Cars Available in our Inventory'} />
      <ItemsContainer items={items} perPage={6} />
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
