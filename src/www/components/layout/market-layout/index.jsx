import React from 'react'
import Navbar from '../../navbar'
import Footer from '../../footer'

function MarketLayout({ children }) {
  return (
    <>
    <Navbar />
    { children }
    <Footer />
    </>
  )
}

export default MarketLayout