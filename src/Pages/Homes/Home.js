import React, { Component } from 'react'
import Hero from './Hero'
import QualityInnovationCompliance from './QualityInnovationCompliance'
import Innovation from './Innovation'
import OurProductions from './OurProductions'
import TestimonialsAndClients from './TestimonialsAndClients'

export default class Home extends Component {
  render() {
    return (
      <div>
        <Hero/>
        <QualityInnovationCompliance/>  
        <OurProductions/>
        <Innovation/>
        <TestimonialsAndClients/>
      
      </div>
    )
  }
}
