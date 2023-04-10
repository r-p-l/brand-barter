import React from 'react'
import "./Home.css"
import Team from './Team'
import Intro from './Intro'
import Sponsors from './Sponsors'
function Home() {
  return (
    <div>
      <Intro />
      {/* <WhyUs /> */}
      <Sponsors />
      <Team />
      {/* <ContactUs/> */}
      </div>
  )
}

export default Home