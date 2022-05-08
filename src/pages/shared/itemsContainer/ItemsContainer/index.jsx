import React from 'react'
import Button from '../../../standalone/Button'
import ItemsCard from '../components/ItemsCard'

const ItemsContainer = ({ items, perPage, home }) => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-10'>
      {items
        ?.filter((item, i) => (perPage ? i < perPage : i >= 0))
        ?.map(({ _id, ...otherProps }) => (
          <ItemsCard key={_id} id={_id} {...otherProps}>
            {home ? null : (
              <Button
                full
                outlined
                className={
                  '!border-red-500 !text-red-500 hover:!bg-red-500 hover:!text-white mt-4'
                }
              >
                Delete
              </Button>
            )}
          </ItemsCard>
        ))}
    </div>
  )
}

export default ItemsContainer
