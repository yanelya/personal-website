import React from 'react'
import Socials from '../components/Socials'
import CarouselSlider from '../components/CarouselSlider'

import styled from 'styled-components'

import Container from '../components/Container'

import { Link } from 'react-router-dom'


const About = () => {
  return (
    <Container noPadding>
      <h1 className='subtitle'>about me.</h1>

      <StyledContainer noPadding>
        <CarouselSlider />
       
        <BlogsContainer noTextAlign>
          <Subtitle>blogs.</Subtitle> 
          <StyledLink to='/readme'>readme.md</StyledLink>
          <StyledLink to='/so-youre-thinking-of-quitting'>so you're thinking about quitting.</StyledLink>
          <StyledLink to='/figuring-out-adulthood-as-a-first-gen-hispanic-american-girl'>figuring out adulthood as a first gen hispanic american girl.</StyledLink>
        </BlogsContainer>
      </StyledContainer>
      
      <div className='footer'>
        <Socials />
      </div>
    </Container>
  )
}

const Subtitle = styled.h2`
  display: flex;
  margin-left: 10px;
`;

const BlogsContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: baseline;
  padding: 0px 0px 50px 30px;

   @media screen and (min-width: 800px) {
      padding: 0px;
   }
`;

const StyledContainer = styled(Container)`
  padding: 20px;
  @media screen and (min-width: 800px) {
      display: flex;
      align-items: center;
      max-width: 1000px;
      padding-top: 0px;
      gap: 5rem;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: underline;
`;

export default About