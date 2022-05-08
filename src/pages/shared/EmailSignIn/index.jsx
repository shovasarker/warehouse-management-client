import React, { useEffect, useState } from 'react'
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import auth from '../../../firebase/firebase.init'
import Button from '../../standalone/Button'
import Input from '../../standalone/Input'
import MessageLink from '../../standalone/MessageLink'
import Spinner from '../../standalone/Spinner'
import Title from '../../standalone/Title'

const EmailSignIn = () => {
  const navigate = useNavigate()
  const [error, setError] = useState('')
  const [signInWithEmailAndPassword, user, loading, emailError] =
    useSignInWithEmailAndPassword(auth)
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  useEffect(() => {
    if (user && !error && !emailError) {
      toast.success('Successfully Signed in With Email and Password')
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

  const onSubmit = async (data) => {
    if (
      !/^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i.test(
        data.email
      )
    ) {
      setError('Email is Not Valid, Please Enter a Valid Email')
      return
    }
    setError('')
    await signInWithEmailAndPassword(data.email, data.password)
  }

  return (
    <form
      className={`w-full md:w-[450px] mx-auto`}
      onSubmit={handleSubmit(onSubmit)}
    >
      <Title center title='Sign In' />
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

      <Button type='submit' full primary className={'mt-5'}>
        {loading ? <Spinner small /> : <>Sign In</>}
      </Button>
      <MessageLink
        message={'New to Skyline ?'}
        onClick={() => navigate('/signup')}
        value={'Create an account'}
      />
    </form>
  )
}

export default EmailSignIn
