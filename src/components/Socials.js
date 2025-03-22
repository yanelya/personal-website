import React from 'react'
import { SocialIcon } from 'react-social-icons';

import styled from 'styled-components'

import { ReactComponent as Instagram } from '../images/instagram-icon.svg'

const Socials = () => {
  return (
    
    <div className='socials'>
      <Container>
        <Instagram />
        {/* <SocialIcon network='instagram' url='https://www.instagram.com/yanelyontheinternet/' /> */}
        {/* <SocialIcon network='spotify' url='https://open.spotify.com/user/1281413010?si=ab64193f37074bc3' />
        <SocialIcon network='discord' url='https://discordapp.com/users/453730032867606532' />
        <SocialIcon network='linkedin' url='https://www.linkedin.com/in/yanelya/' />
        <SocialIcon network='github' url='https://github.com/yanelya' /> */}
      </Container>
    </div>
  )
}

const Container = styled.div`
  display: flex;
  
`;

export default Socials