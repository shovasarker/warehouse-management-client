import React from 'react'

const BannerItem = ({ img, name, power, torque, cylinder }) => {
  return (
    <div className='relative cursor-grab active:cursor-grabbing'>
      <img
        src={img}
        alt=''
        className='w-full aspect-[3/4] md:aspect-[2/1] lg:aspect-[16/7] object-cover'
      />

      <div className='absolute w-10/12 left-6 md:left-10 lg:left-16 xl:left-32 top-[55%] md:top-[50%] lg:top-[55%] xl:top-[60%] bg-black/20 px-5 py-6 text-white space-y-2 animate-slide-top'>
        <h2 className='text-2xl md:text-3xl xl:text-4xl font-bold  tracking-widest uppercase'>
          {name}
        </h2>
        <p className=''>
          Max Power :{' '}
          <span className='font-medium tracking-wider'>{power}</span>
        </p>
        <p>
          Max Torque :{' '}
          <span className='font-medium tracking-wider'>{torque}</span>
        </p>
        <p>
          No. of Cylinder :{' '}
          <span className='font-medium tracking-wider'>{cylinder}</span>
        </p>
      </div>
    </div>
  )
}

export default BannerItem
