import React from 'react'
import "./Footer.css"
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';

function Footer() {

const handleScrollClick= ()=>{
  window.scrollTo({top:0,behavior:"smooth"});
}
  return (
    <div id="footer" className='footer'>
      <button onClick={handleScrollClick} className='scroll-button'>
        <ExpandLessIcon />
      </button>
        <h3>Contact Us</h3>
        <p className='footer-info'>Delhi Technological University </p>
        <p className='footer-info'>brandbarter@gmail.com</p>
        <div className='footer-social'>
          <InstagramIcon />
          <LinkedInIcon />
          <FacebookIcon />
        </div>
        </div>
  )
}

export default Footer