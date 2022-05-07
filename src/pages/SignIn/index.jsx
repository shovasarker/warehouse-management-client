import React from 'react'
import { useForm } from 'react-hook-form'
import Input from '../standalone/Input'

const SignIn = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()
  const onSubmit = (data) => {
    console.log(data)
    console.log(errors)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input
        type={'email'}
        id='email'
        label={'Email'}
        register={register}
        required
        error={errors.firstname?.type === 'required' && 'Email is Required'}
      />

      <input type='submit' value={'Submit'} />
    </form>
  )
}

export default SignIn
