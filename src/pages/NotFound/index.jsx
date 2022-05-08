import React from 'react'
import notFound from '../../images/404-error-page.jpg'

const NotFound = () => {
  return (
    <div className='container px-6 flex justify-center items-center'>
      <img
        src={notFound}
        alt='Not Found'
        className='w-full md:w-2/3 lg:w-1/2 aspect-auto my-20'
      />
    </div>
  )
}

export default NotFound
