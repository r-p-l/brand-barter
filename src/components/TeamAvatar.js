import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function TeamAvatar({img,name,title}) {
  return (
    <div className='team-avatar'>
            <div className='team-img-container'>
                <img src={img} alt="" />
            </div>
            <h4>{name}</h4>
            <p>{title}</p>
            <div className='team-avatar-social'>
            <InstagramIcon />
           <LinkedInIcon />
            </div>
        </div>
  )
}

export default TeamAvatar