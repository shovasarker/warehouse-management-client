import React, { useEffect, useState } from 'react'
import {
  useCreateUserWithEmailAndPassword,
  useUpdateProfile,
} from 'react-firebase-hooks/auth'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import auth from '../../../../firebase/firebase.init'
import Button from '../../../standalone/Button'
import Input from '../../../standalone/Input'
import MessageLink from '../../../standalone/MessageLink'
import Spinner from '../../../standalone/Spinner'
import Title from '../../../standalone/Title'

const EmailSignUp = () => {
  const navigate = useNavigate()
  const [error, setError] = useState('')
  const [createUserWithEmailAndPassword, user, loading, emailError] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true })

  const [updateProfile] = useUpdateProfile(auth)

  useEffect(() => {
    if (user && !error && !emailError) {
      toast.success('Successfully Created User With Email and Password')
      return
    }
    if (error && !emailError) {
      toast.error(error)
      return
    }

    if (emailError) {
      toast.error(emailError?.message)
    }
  }, [user, error, emailError])

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()
  const onSubmit = async (data) => {
    if (
      !/^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i.test(
        data.email
      )
    ) {
      setError('Email is Not Valid, Please Enter a Valid Email')
      return
    }

    if (data.password !== data.confirmPassword) {
      setError("Passwords didn't matched")
      return
    }
    setError('')
    await createUserWithEmailAndPassword(data.email, data.password)
    await updateProfile({ displayName: data?.name })
    toast?.success('Profile Updated')
  }

  return (
    <form
      className={`w-full md:w-[450px] mx-auto`}
      onSubmit={handleSubmit(onSubmit)}
    >
      <Title center title='Sign Up' />
      <Input
        type={'text'}
        id='name'
        label={'Name'}
        register={register}
        required
        error={errors.name?.type === 'required' && 'Email is Required'}
      />
      <Input
        type={'email'}
        id='email'
        label={'Email'}
        register={register}
        required
        error={errors.email?.type === 'required' && 'Email is Required'}
      />
      <Input
        type={'password'}
        id='password'
        label={'Password'}
        register={register}
        required
        minLength={6}
        error={
          errors.password?.type === 'required'
            ? 'Password is Required'
            : errors.password?.type === 'minLength' &&
              'Pasword Must be Atlesat 6 Characters Long'
        }
      />
      <Input
        type={'password'}
        id='confirmPassword'
        label={'Confirm Password'}
        register={register}
        required
        minLength={6}
        error={
          errors.confirmPassword?.type === 'required'
            ? 'Confirm Password is Required'
            : errors.confirmPassword?.type === 'minLength' &&
              'Pasword Must be Atlesat 6 Characters Long'
        }
      />

      <Button type='submit' full primary className={'mt-5'}>
        {loading ? <Spinner small /> : <>Sign In</>}
      </Button>
      <MessageLink
        message={'Already have an account ?'}
        onClick={() => navigate('/signin')}
        value={'Sign In'}
      />
    </form>
  )
}

export default EmailSignUp
