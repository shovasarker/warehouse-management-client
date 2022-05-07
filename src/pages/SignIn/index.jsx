import React, { useEffect } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useLocation, useNavigate } from 'react-router-dom'
import auth from '../../firebase/firebase.init'
import EmailSignIn from '../shared/EmailSignIn'
import SocialLogin from '../shared/sociallogin/SocialLogin'

const SignIn = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const from = location?.state?.from?.pathname || '/'
  const [user] = useAuthState(auth)

  useEffect(() => {
    if (user) {
      navigate(from, { replace: true })
    }
  }, [user, navigate, from])

  return (
    <div className='container px-6'>
      <EmailSignIn />
      <SocialLogin />
    </div>
  )
}

export default SignIn
