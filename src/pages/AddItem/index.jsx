import axios from 'axios'
import React, { useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'
import auth from '../../firebase/firebase.init'
import Button from '../standalone/Button'
import Input from '../standalone/Input'
import Spinner from '../standalone/Spinner'
import Title from '../standalone/Title'

const AddItem = () => {
  const [user] = useAuthState(auth)
  const [loading, setLoading] = useState(false)
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm()

  const addItem = async (item) => {
    setLoading(true)
    const { data } = await axios.post(
      'https://wmss-server.herokuapp.com/item',
      item
    )
    console.log(data)
    if (data?.insertedId) {
      toast.success('Item added Successfully')
      reset()
    }
    setLoading(false)
  }

  const onSubmit = async (data) => {
    const price = parseInt(data?.price)
    const quantity = parseInt(data?.quantity)
    addItem({
      ...data,
      price: price,
      quantity: quantity,
      supplierName: user?.email,
    })
  }

  return (
    <div className='container px-6 py-10'>
      <form
        className={`w-full md:w-[450px] mx-auto space-y-4`}
        onSubmit={handleSubmit(onSubmit)}
      >
        <Title center title='Please Enter Item Information' />
        <Input
          type={'text'}
          id='name'
          label={'Name'}
          register={register}
          required
          error={errors.name?.type === 'required' && 'Name is Required'}
        />
        <textarea
          {...register('description', { required: true, maxLength: 400 })}
          className='border border-gray-300 w-full px-4 py-2 focus:outline-none placeholder:text-gray-600 placeholder:font-medium'
          placeholder='Description'
        />
        <Input
          type={'text'}
          id='brand'
          label={'Brand Name'}
          register={register}
          required
          error={errors.brand?.type === 'required' && 'Brand Name is Required'}
        />
        <Input
          type={'text'}
          id='Supplier'
          label={'Supplier Name'}
          register={register}
          required
          error={
            errors.supplier?.type === 'required' && 'Supplier Name is Required'
          }
        />
        <Input
          type={'number'}
          id='price'
          label={'Price'}
          register={register}
          required
          error={errors.price?.type === 'required' && 'Price is Required'}
        />
        <Input
          type={'number'}
          id='quantity'
          label={'Quantity'}
          register={register}
          required
          error={errors.quantity?.type === 'required' && 'Quantity is Required'}
        />

        <Input
          type={'text'}
          id='img'
          label={'Image Link'}
          register={register}
          required
          error={errors.img?.type === 'required' && 'Image Link is Required'}
        />

        <Button type='submit' full primary className={'mt-5'}>
          {loading ? <Spinner small /> : <>Add Item</>}
        </Button>
      </form>
    </div>
  )
}

export default AddItem
