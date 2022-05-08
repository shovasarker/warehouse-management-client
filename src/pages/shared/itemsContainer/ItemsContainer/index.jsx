import axios from 'axios'
import React, { useState } from 'react'
import { toast } from 'react-toastify'
import Button from '../../../standalone/Button'
import Spinner from '../../../standalone/Spinner'
import ItemsCard from '../components/ItemsCard'

const ItemsContainer = ({ items, setItems, perPage, home }) => {
  const [loading, setLoading] = useState(false)

  const handleDeleteItem = async (id) => {
    const proceed = window.confirm('Do You want to Delete this Item')
    if (!proceed) return
    setLoading(true)
    const { data } = await axios.delete(
      `https://wmss-server.herokuapp.com/item/${id}`
    )

    if (data?.deletedCount > 0) {
      setItems(items.filter(({ _id }) => _id !== id))
      toast.success('Successfully Deleted Item')
    }

    setLoading(false)
  }

  return (
    <>
      {items?.length > 0 ? (
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
                    onClick={() => handleDeleteItem(_id)}
                  >
                    {loading ? <Spinner small /> : <>Delete</>}
                  </Button>
                )}
              </ItemsCard>
            ))}
        </div>
      ) : (
        <h2 className='text-center text-base text-gray-400 my-40'>
          No items Found
        </h2>
      )}
    </>
  )
}

export default ItemsContainer
