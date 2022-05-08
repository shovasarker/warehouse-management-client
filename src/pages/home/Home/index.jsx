import React from 'react'
import Banner from '../components/Banner'
import Brands from '../components/Brands'
import Items from '../components/Items'
import Statistics from '../components/Statistics'

const Home = () => {
  return (
    <main>
      <Banner />
      <Items />
      <Statistics />
      <Brands />
    </main>
  )
}

export default Home
