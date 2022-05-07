import React, { useEffect } from 'react'
import { useSignInWithGoogle } from 'react-firebase-hooks/auth'
import { FcGoogle } from 'react-icons/fc'
import { toast } from 'react-toastify'
import auth from '../../../../../firebase/firebase.init'
import Button from '../../../../standalone/Button'
import Spinner from '../../../../standalone/Spinner'

const GoogleSignIn = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth)
  useEffect(() => {
    if (user && !error) {
      toast.success('Signed in Succesfully with Google')
      return
    }
    if (error) {
      toast.error('Something Went Wrong, ' + error?.message)
    }
  }, [user, error])

  const handleGoogleSignIn = () => {
    signInWithGoogle()
  }

  return (
    <Button outlined full primary onClick={handleGoogleSignIn}>
      {loading ? (
        <Spinner small primary />
      ) : (
        <>
          <FcGoogle className='w-5 h-5' />
          Continue With Google
        </>
      )}
    </Button>
  )
}

export default GoogleSignIn
