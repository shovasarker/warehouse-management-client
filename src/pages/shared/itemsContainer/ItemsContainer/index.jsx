import React from 'react'
import ItemsCard from '../components/ItemsCard'

const ItemsContainer = ({ items, perPage }) => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-10'>
      {items
        ?.filter((item, i) => (perPage ? i < perPage : i >= 0))
        ?.map(({ _id, ...otherProps }) => (
          <ItemsCard key={_id} {...otherProps} />
        ))}
    </div>
  )
}

export default ItemsContainer
