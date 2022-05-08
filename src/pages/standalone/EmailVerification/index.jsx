import React, { useEffect } from 'react'
import { useSendEmailVerification } from 'react-firebase-hooks/auth'
import { toast } from 'react-toastify'
import auth from '../../../firebase/firebase.init'
import Button from '../Button'
import Spinner from '../Spinner'

const EmailVerification = () => {
  const [sendEmailVerification, sending, error] = useSendEmailVerification(auth)

  useEffect(() => {
    if (error) {
      toast.error(error?.message)
      return
    }
  }, [error])

  const handleSendEmailVerification = async () => {
    await sendEmailVerification()
    toast.success('Email Verification Send')
  }

  return (
    <div className='container px-6 flex justify-center items-center'>
      <div className='px-5 py-6 w-full md:w-3/4 lg:w-1/2 space-y-5 flex flex-col items-center border border-teal-200 shadow-xl my-20'>
        <h2 className='text-xl md:text-2xl font-bold text-teal-500'>
          Your Email is not Verified!
        </h2>
        <p className='font-medium'>Please Verify Your Email First</p>
        <Button primary onClick={handleSendEmailVerification}>
          {sending ? <Spinner small /> : <>Send Email Verification</>}
        </Button>
      </div>
    </div>
  )
}

export default EmailVerification
