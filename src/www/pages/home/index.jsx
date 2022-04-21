import React from 'react'
import {

} from './home.elements'
import Banner from './components/banner'
import Statistic from './components/statistic'
import TopCollections from './components/top-collections'

function Home() {
  return (
    <>
      <Banner />
      <Statistic />
      <TopCollections />
    </>
  )
}

export default Home