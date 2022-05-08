import React from 'react'
import { useParams } from 'react-router-dom'

const ManageItem = () => {
  const { id } = useParams()
  return (
    <div>
      <h2>Item id: {id}</h2>
    </div>
  )
}

export default ManageItem
