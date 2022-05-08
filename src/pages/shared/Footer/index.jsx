import React from 'react'
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa'

import Logo from '../../standalone/Logo'

const Footer = () => {
  const year = new Date().getFullYear()
  return (
    <footer className='w-full bg-black'>
      <div className='flex flex-col justify-center items-center gap-6 py-10'>
        <Logo light />
        <div className='flex flex-row justify-center items-center gap-3'>
          <a
            href='https://www.facebook.com/profile.php?id=100010892646664'
            rel='noreferrer'
            target={'_blank'}
            className='w-10 h-10 rounded-full bg-white flex justify-center items-center'
          >
            <FaFacebookF className='w-5 h-5' />
          </a>
          <a
            href='https://twitter.com/?lang=en'
            rel='noreferrer'
            target={'_blank'}
            className='w-10 h-10 rounded-full bg-white flex justify-center items-center'
          >
            <FaTwitter className='w-5 h-5' />
          </a>
          <a
            href='https://www.instagram.com/'
            rel='noreferrer'
            target={'_blank'}
            className='w-10 h-10 rounded-full bg-white flex justify-center items-center'
          >
            <FaInstagram className='w-5 h-5' />
          </a>
          <a
            href='https://www.youtube.com/channel/UCzD3uTCfW6b8uyRFJJ0kcxw'
            rel='noreferrer'
            target={'_blank'}
            className='w-10 h-10 rounded-full bg-white flex justify-center items-center'
          >
            <FaYoutube className='w-5 h-5' />
          </a>
        </div>
        <p className='text-white/70 text-sm font-normal'>
          &copy; {year} Skyline Enterprise. All Rights Reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer
