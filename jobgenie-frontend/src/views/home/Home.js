import React from 'react'
import PageContainer from '../../components/container/PageContainer'
import HeroSection from './components/HeroSection'
import Section2 from './components/Section2'
import Section3 from './components/Section3'
import Section4 from './components/Section4'
import Section5 from './components/Section5'
import Section6 from './components/Section6'

const Home = () => {
  return (
    <PageContainer title="Home" description="Home Page">
      <div style={{ width: '100%', padding: 0, margin: 0 }}>
        <HeroSection />
        <Section2 />
        <Section3 />
        <Section4 />
        <Section5 />
        <Section6 />
      </div>
      
    </PageContainer>
  )
}

export default Home
