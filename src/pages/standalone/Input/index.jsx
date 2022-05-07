import React from 'react'

const Input = ({ type, id, label, register, error, required, className }) => {
  return (
    <div>
      <div className='relative w-full font-medium  mt-5'>
        <input
          type={type}
          id={id}
          placeholder={label}
          {...register(id, { required })}
          className={` w-full peer px-4 py-2 border ${
            error ? 'border-red-600' : 'border-gray-300'
          }  bg-transparent placeholder:text-transparent outline-none focus:outline-none ${
            className ? className : ''
          }`}
        />
        <label
          htmlFor={id}
          className=' absolute pointer-events-none left-4 -top-2.5 px-2 text-[12px] tracking-widest bg-white peer-placeholder-shown:text-base peer-placeholder-shown:left-4 peer-placeholder-shown:top-2 peer-placeholder-shown:tracking-wide peer-placeholder-shown:bg-transparent peer-focus:-top-2.5  peer-focus:text-[12px] peer-focus:px-2 peer-focus:bg-white peer-focus:tracking-widest transition-all duration-300'
        >
          {label}
        </label>
      </div>
      <p className='text-red-500 mt-2 px-4 text-sm'>{error ? error : ''}</p>
    </div>
  )
}

export default Input
