import React from 'react'
import { useNavigate } from 'react-router-dom'
import Button from '../../../../standalone/Button'

const ItemsCard = ({
  id,
  name,
  description,
  price,
  quantity,
  brand,
  Supplier,
  img,
}) => {
  const navigate = useNavigate()

  return (
    <div className='card relative overflow-hidden rounded cursor-pointer'>
      <img src={img} alt={name} className='w-full aspect-[3/4] object-cover' />
      <div className='details absolute top-[85%] xl:top-[87%] text-gray-600 bg-white/70 w-full h-full px-4 py-5 transition-all duration-500 flex flex-col items-start'>
        <h4 className='text-xl font-bold uppercase'>{name}</h4>
        <p className='mt-5 tracking-wider'>
          {description.length > 200
            ? description?.slice(0, 200) + ' . . .'
            : description}
        </p>
        <p className='mt-3 text-base'>
          Price: <span className='ml-2 font-bold'>${price}</span>
        </p>
        <p className='mt-3 text-base'>
          Brand Name: <span className='ml-2 font-bold'>{brand}</span>
        </p>
        <p className='mt-3 text-base'>
          Supplier: <span className='ml-2 font-bold'>{Supplier}</span>
        </p>
        <p className='mt-3 text-base'>
          Quantity: <span className='ml-2 font-bold'>{quantity}</span>
        </p>
        <Button
          primary
          full
          className={'mt-auto'}
          onClick={() => navigate(`/inventory/${id}`)}
        >
          Stock Update
        </Button>
      </div>
    </div>
  )
}

export default ItemsCard
