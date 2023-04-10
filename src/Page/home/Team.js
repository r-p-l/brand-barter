import React from 'react'
import TeamAvatar from '../../components/TeamAvatar';
function Team() {
  return (
    <div id="team" className='team'>
        <h1>Our Team</h1>
        <div className='team-avatar-container'>
        <TeamAvatar name="Naruto Uzumaki" title="Hidden leaf Hero" img="images/avatar.jpg" />
        <TeamAvatar name="Naruto Uzumaki" title="Hidden leaf Hero" img="images/avatar.jpg" />
        <TeamAvatar name="Naruto Uzumaki" title="Hidden leaf Hero" img="images/avatar.jpg" />
        <TeamAvatar name="Naruto Uzumaki" title="Hidden leaf Hero" img="images/avatar.jpg" />
        </div>
        </div>
  )
}

export default Team