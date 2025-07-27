import { useState } from 'react'
import { motion } from "framer-motion";
import icon from '../images/portrait.png'
import Socials from '../components/Socials';

import styled from 'styled-components'

// const asciis = [icon]

// const fadeInUp = {
//   hidden: { opacity: 0, y: 50 },
//   visible: { 
//     opacity: 1, 
//     y: 0, 
//     transition: { duration: 0.999, ease: "easeOut" } 
//   }
// };

const useImageLoader = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  const onLoad = () => {
    setIsLoaded(true);
  };

  return { isLoaded, onLoad };
};

const Home = () => {
  const { isLoaded, onLoad } = useImageLoader();

  return (
    <>
      {/* {<Menu>
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/services">Services</a>
        <a href="/contact">Contact</a>
      </Menu>} */}

      <Container>
        <div className='main-content'>
          <div className='icon'>
            <img
              src={icon} 
              alt="icon"
              className={isLoaded ? "loaded" : ""}
              onLoad={onLoad}
              />
          </div>
        </div>

        <div className='footer'>
          <Socials />
        </div>
      </Container> 

      {/* {asciis.map((src, index) => (
        <motion.img
          key={index}
          src={src}
          alt={`image-${index}`}
          width="300"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.0005 }} 
          style={{ display: "block", margin: "50px auto" }} 
        />
      ))} */}
    </>
  )
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  img {
    opacity: 0; /* Start transparent */
    transform: translateY(20px); 
    transition: opacity 3s ease, transform 2s ease; 
  }

  img.loaded {
    opacity: 1;
    transform: translateY(0);
  }

  @media (max-width: 1250px) {
    img {
      max-width: 100%; 
    } 
  }

  @media screen and (min-width: 800px) {
    img{
      width: 700px;
      margin: auto;
    }
  }
`;


export default Home;