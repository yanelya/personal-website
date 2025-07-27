import React from 'react'

import styled from 'styled-components'

import Container from '../components/Container'

const Projects = () => {
  return (
    <Container noTopPadding>
        <h1 className='subtitle'>projects.</h1>

        <StyledContainer noTopPadding>
          <h3>this one!</h3>
          <ul>
            <li>started this website back in, oh idk, 2023 maybe?</li>
            <li>learned how stressful (and costly) it is to set up a server & DNS</li>
            <li>i need to set up some devops on this actually</li>
            {/* <li>cool opportunity to practice some coding/design skills</li> */}
          </ul>
        </StyledContainer>

        <Container>
          {/* <h3>global website</h3>
          <ul>
            <li>collaborated with design/marketing/content team to support region-based site</li>
            <li>created template for major career pages that drive company revenue</li>
            <li>utilized headless CMS to allow content and marketing team create templatized pages</li>
          </ul> */}
          <h3 > page still pending... </h3>
        </Container>
    </Container>
  )
}

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;

 ul{
    list-style-position: outside; 
    padding-left: 1.5em; 
  }

  h3, li {
    text-align: left;
    padding-left: 0.5em; 
  }
`

export default Projects