import React, { useEffect } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useNavigate } from 'react-router-dom'
import auth from '../../../firebase/firebase.init'
import SocialLogin from '../../shared/sociallogin/SocialLogin'
import EmailSignUp from '../components/EmailSignUp'

const SignUp = () => {
  const navigate = useNavigate()
  const [user] = useAuthState(auth)

  useEffect(() => {
    if (user) {
      navigate('/', { replace: true })
    }
  }, [user, navigate])
  return (
    <div className='container px-6'>
      <EmailSignUp />
      <SocialLogin />
    </div>
  )
}

export default SignUp
