import React, { Component } from 'react'
import Hero from './Hero'
import QualityInnovationCompliance from './QualityInnovationCompliance'
import Innovation from './Innovation'
import OurProductions from './OurProductions'
import TestimonialsAndClients from './TestimonialsAndClients'
import AboutSection from './AboutSection'

// If you're importing the logo instead of using a relative path
import logo from '../../oceanweavlogo.png' // adjust path as needed

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ loading: false });
    }, 1500);
  }

  render() {
    if (this.state.loading) {
      return (
        <>
          {/* Zoom Animation CSS */}
          <style>
            {`
              @keyframes zoomInOut {
                0%, 100% {
                  transform: scale(1);
                }
                50% {
                  transform: scale(1.2);
                }
              }

              .zoom-animation {
                animation: zoomInOut 1.5s ease-in-out infinite;
              }
            `}
          </style>

          <div className="flex justify-center items-center h-screen bg-white">
            <img
              src={logo}
              alt="Ocean Weave Logo"
              className="h-24 w-24 zoom-animation"
            />
          </div>
        </>
      );
    }

    return (
      <div>
        <Hero />
        <QualityInnovationCompliance />
        <OurProductions />
        <Innovation />
        <AboutSection />
        <TestimonialsAndClients />
      </div>
    );
  }
}
