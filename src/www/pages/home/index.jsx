import React from 'react'
import {

} from './home.elements'
import Banner from './components/banner'
import Statistic from './components/statistic'
import TopCollections from './components/top-collections'
import ListNft from '../list-nft'

function Home() {
  return (
    <>
      <Banner />
      <Statistic />
      <TopCollections />
      <ListNft />
    </>
  )
}

export default Home