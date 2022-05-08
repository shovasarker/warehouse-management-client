import React from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { Navigate, useLocation } from 'react-router-dom'
import auth from '../../../firebase/firebase.init'
import EmailVerification from '../EmailVerification'
import Spinner from '../Spinner'

const RequireAuth = ({ children }) => {
  const [user, loading] = useAuthState(auth)
  const location = useLocation()

  if (loading) {
    return <Spinner center primary />
  }

  if (!user) {
    return <Navigate replace to='/signin' state={{ from: location }} />
  }

  if (!user?.emailVerified) {
    return <EmailVerification />
  }

  return children
}

export default RequireAuth
