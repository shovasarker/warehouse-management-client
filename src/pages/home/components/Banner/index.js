import axios from 'axios'
import React, { useEffect, useState } from 'react'

import '@splidejs/react-splide/css'
import { Splide, SplideSlide } from '@splidejs/react-splide'
import BannerItem from '../BannerItem'

const Banner = () => {
  const [banners, setBanners] = useState([])

  useEffect(() => {
    const getBanners = async () => {
      const { data } = await axios.get(
        'https://wmss-server.herokuapp.com/banners'
      )
      setBanners(data)
    }

    getBanners()
  }, [])

  return (
    <div className='z-10'>
      <Splide
        aria-label='Banner'
        options={{
          perPage: 1,
          rewind: true,
          rewindSpeed: 1000,
          arrows: false,
          rewindByDrag: true,
          snap: true,
          autoplay: true,
          interval: 3000,
        }}
      >
        {banners?.map(({ _id, ...otherProps }) => (
          <SplideSlide key={_id}>
            <BannerItem {...otherProps} />
          </SplideSlide>
        ))}
      </Splide>
    </div>
  )
}

export default Banner
