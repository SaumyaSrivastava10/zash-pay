import React from 'react'

import HomePage from './HomePage'
import Footer from './Footer'
import FeatureList from './FeatureList'
import Testimonials from './Testimonials'

const LandingPage = () => {
  return (
    <div>
        <HomePage />
        <FeatureList />
        <Testimonials />
        <Footer />
    </div>
  )
}

export default LandingPage