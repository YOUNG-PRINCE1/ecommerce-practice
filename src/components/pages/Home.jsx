import React from 'react'
import Hero from '../Herosectionfiles/Hero'
import Latestcollection from '../Latestcollectionfies/Latestcollection'
import Bestseller from '../Bestseller/Bestseller'
import Newsletter from '../Newsletter/Newsletter'

const Home = () => {
  return (
    <div>
        <Hero />
        <Latestcollection />
        <Bestseller />
        <Newsletter />
    </div>
  )
}

export default Home