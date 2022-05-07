import React, { useEffect } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useNavigate } from 'react-router-dom'
import auth from '../../../firebase/firebase.init'
import useToken from '../../../hooks/useToken'
import SocialLogin from '../../shared/sociallogin/SocialLogin'
import EmailSignUp from '../components/EmailSignUp'

const SignUp = () => {
  const navigate = useNavigate()
  const [user] = useAuthState(auth)
  const [token] = useToken(user)

  useEffect(() => {
    if (token) {
      navigate('/', { replace: true })
    }
  }, [token, navigate])
  return (
    <div className='container px-6'>
      <EmailSignUp />
      <SocialLogin />
    </div>
  )
}

export default SignUp
