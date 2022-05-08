import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useParams } from 'react-router-dom'
import { toast } from 'react-toastify'
import Button from '../../standalone/Button'
import Input from '../../standalone/Input'
import Spinner from '../../standalone/Spinner'

const ManageItem = () => {
  const { id } = useParams()
  const [item, setItem] = useState({})
  const [loading, setLoading] = useState(false)
  const [updateLoading, setUpdateLoading] = useState(false)
  const [stockLoading, setStockLoading] = useState(false)
  const { img, name, description, price, brand, Supplier, quantity } = item

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm()

  useEffect(() => {
    const getItem = async () => {
      try {
        setLoading(true)
        const { data } = await axios.get(
          `https://wmss-server.herokuapp.com/item/${id}`
        )
        setItem(data)
        setLoading(false)
      } catch (error) {
        console.log(error.message)
        setLoading(false)
      }
    }

    getItem()
  }, [id])

  const updateQuantity = async (quantity) => {
    const { _id, ...rest } = item
    const { data } = await axios.put(
      `https://wmss-server.herokuapp.com/item/${_id}`,
      {
        ...rest,
        quantity: quantity,
      }
    )

    return data.modifiedCount > 0 ? true : false
  }

  const handleUpdateQuantity = async () => {
    if (quantity === 0) {
      toast.warning('This Item is Out Of Stock!')
      return
    }
    setUpdateLoading(true)
    const updated = await updateQuantity(quantity - 1)
    if (updated) {
      setItem({ ...item, quantity: quantity - 1 })
      toast.success('This car is Successfully processed to be Sent Out.')
    }
    setUpdateLoading(false)
  }

  const onSubmit = async (data) => {
    setStockLoading(true)
    const newQuantity = parseInt(data?.quantity)
    const updated = await updateQuantity(quantity + newQuantity)
    if (updated) {
      setItem({ ...item, quantity: quantity + newQuantity })
      toast.success('This car is Successfully Restocked.')
      reset()
    }
    setStockLoading(false)
  }

  if (loading) return <Spinner center primary />

  return (
    <main className='container px-6 my-10'>
      <div className='w-full flex flex-col lg:flex-row-reverse justify-start lg:justify-between items-start gap-5'>
        <img
          src={img}
          alt={name}
          className='w-full lg:w-2/5 aspect-[16/9] object-cover'
        />

        <div className='w-full lg:1/2 text-gray-600'>
          <h3 className='text-2xl font-bold tracking-wider'>{name}</h3>
          <p className='mt-4 font-medium'>{description}</p>
          <p className='mt-3 '>
            Brand Name : <span className='ml-2 font-bold'>{brand}</span>
          </p>
          <p className='mt-3 '>
            Supplier Name : <span className='ml-2 font-bold'>{Supplier}</span>
          </p>
          <p className='mt-3 '>
            Price : <span className='ml-2 font-bold'>${price}</span>
          </p>
          <p className='mt-3 '>
            Quantity :{' '}
            <span className='ml-2 font-bold'>
              {quantity === 0 ? 'Out of Stock' : quantity}
            </span>
          </p>

          <Button primary className={'mt-4'} onClick={handleUpdateQuantity}>
            {updateLoading ? <Spinner small /> : <> Delivered</>}
          </Button>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className='w-full mt-5 px-5 py-4 border border-teal-200'
          >
            <Input
              type={'number'}
              id='quantity'
              label={'Quantity'}
              register={register}
              required
              error={
                errors.email?.type === 'required' && 'Quantity is Required'
              }
            />
            <Button outlined primary type='submit'>
              {stockLoading ? <Spinner small primary /> : <>Restock</>}
            </Button>
          </form>
        </div>
      </div>
    </main>
  )
}

export default ManageItem
