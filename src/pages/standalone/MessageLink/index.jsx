import React from 'react'
import LinkButton from '../LinkButton'

const MessageLink = ({ message, onClick, value }) => {
  return (
    <div className='flex justify-center items-center gap-2 my-4 text-sm'>
      <span>{message}</span>
      <LinkButton onClick={onClick} value={value} />
    </div>
  )
}

export default MessageLink
