import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Spinner from '../../../standalone/Spinner'
import Title from '../../../standalone/Title'

const Brands = () => {
  const [brands, setBrands] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const getBrands = async () => {
      setLoading(true)
      const { data } = await axios.get(
        'https://wmss-server.herokuapp.com/brands'
      )
      setBrands(data)
      setLoading(false)
    }

    getBrands()
  }, [])

  if (loading) return <Spinner center primary />

  return (
    <div className='container px-6 my-20'>
      <Title center title={'Available Car Brands in Our Inventory'} />
      <div className='flex justify-center items-center flex-wrap gap-10 md:gap-16 xl:gap-20 my-20'>
        {brands?.map(({ _id, logo, brand }) => {
          return (
            <div key={_id}>
              <Link to={`/brand/${brand}`}>
                <img src={logo} alt={brand} className='w-full aspect-auto' />
              </Link>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Brands
