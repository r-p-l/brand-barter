import React from 'react'
import Sponsor from '../../components/Sponsor'

function Sponsors() {
  return (
    <div id="sponsors" className='sponsors'>
        <Sponsor scrollno={600} img="images/s1.webp" />
        <Sponsor scrollno={1000} img="images/s4.webp" />
        <Sponsor scrollno={1600} img="images/s3.webp" />
        <Sponsor scrollno={1900} img="images/s2.webp" />
        <Sponsor scrollno={2400} img="images/s5.webp" />
        <Sponsor scrollno={2600} img="images/s6.webp" />
        <Sponsor scrollno={3200} img="images/s7.webp" />
        
        </div>
  )
}

export default Sponsors