import React from 'react'
import Divider from '../components/Divider'
import GoogleSignIn from '../components/GoogleSignIn'

const SocialLogin = () => {
  return (
    <div className={`w-full md:w-[450px] mx-auto`}>
      <Divider />
      <GoogleSignIn />
    </div>
  )
}

export default SocialLogin
