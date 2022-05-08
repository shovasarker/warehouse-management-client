import React from 'react'
import { Helmet } from 'react-helmet-async'

const PageHelmet = ({ title, children }) => {
  return (
    <>
      <Helmet>
        <title>{title} - Skyline Enterprise</title>
      </Helmet>
      {children}
    </>
  )
}

export default PageHelmet
