import axios from 'axios'
import React, { useEffect, useLayoutEffect, useState } from 'react'
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  AreaChart,
  Area,
} from 'recharts'

import Spinner from '../../../standalone/Spinner'
import Title from '../../../standalone/Title'

const Statistics = () => {
  const [chartData, setChartData] = useState([])
  const [loading, setloading] = useState(false)
  const [width, setWidth] = useState(0)

  useLayoutEffect(() => {
    const getDeviceWidth = () => {
      if (window.innerWidth < 640) setWidth(320)
      else if (window.innerWidth < 1280) setWidth(700)
      else setWidth(570)
    }

    window.addEventListener('resize', getDeviceWidth)
    getDeviceWidth()
    return () => {
      window.removeEventListener('reszie', getDeviceWidth)
    }
  }, [])

  useEffect(() => {
    const getChartData = async () => {
      try {
        setloading(true)
        const { data } = await axios.get(
          'https://wmss-server.herokuapp.com/chart'
        )
        setChartData(data)
        setloading(false)
      } catch (error) {
        console.log(error.message)
        setloading(false)
      }
    }

    getChartData()
  }, [])

  if (loading) return <Spinner center primary />

  return (
    <div className='container px-6 my-20'>
      <Title center title={'Statistics For This Months Inventory'} />
      <div className='flex flex-col xl:flex-row justify-between items-center gap-5 my-20'>
        <BarChart width={width} height={350} data={chartData}>
          <CartesianGrid strokeDasharray='3 3' />
          <XAxis dataKey='brand' />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey='inStock' fill='#8884d8' />
          <Bar dataKey='sold' fill='#82ca9d' />
        </BarChart>
        <AreaChart width={width} height={350} data={chartData}>
          <CartesianGrid strokeDasharray='3 3' />
          <XAxis dataKey='brand' />
          <YAxis />
          <Tooltip />
          <Legend />
          <Area
            type='monotone'
            dataKey='inStock'
            stackId='1'
            stroke='#8884d8'
            fill='#8884d8'
          />
          <Area
            type='monotone'
            dataKey='sold'
            stackId='1'
            stroke='#82ca9d'
            fill='#82ca9d'
          />
        </AreaChart>
      </div>
    </div>
  )
}

export default Statistics
