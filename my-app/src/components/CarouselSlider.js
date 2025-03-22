import React from 'react'

import mainHeadshot from '../images/work_headshot.jpeg'
import grad1 from '../images/grad1.jpg'
import headshot from '../images/headshot.jpg'

import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';

import Container from '../components/Container'

import styled from 'styled-components'

const CarouselSlider = () => {
  return (
    <StyledContainer noPadding>
        <StyledCarousel 
            infiniteLoop={true} 
            autoPlay={false}
            showStatus={false}
            showThumbs={false}
            showArrows={false}
        >

        <div>
            <img src={mainHeadshot} alt='work headshot' />
        </div>
        <div>
            <img src={grad1} alt='graduation' />
        </div>
        <div>
            <img src={headshot} alt='headshot' />
        </div>
        </StyledCarousel> 
    </StyledContainer>
  )
}

const StyledCarousel = styled(Carousel)`
    .carousel-slider {
        border-radius: 50%;
    }
    img {
        border-radius: 5%;
    }
    .thumb.selected{
        border-radius: 5%;
    }
`;

const StyledContainer = styled(Container)`
    img {
        padding: 0px;
    }  
`;

export default CarouselSlider