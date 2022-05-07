import React from 'react'

const Blog = ({ title, children }) => {
  return (
    <div className='px-5 py-6 border border-gray-500 text-gray-600 shadow-xl h-full'>
      <h3 className='text-xl font-bold '>{title}</h3>
      {children}
    </div>
  )
}

export default Blog
