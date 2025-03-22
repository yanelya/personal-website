import React, {useState} from 'react'

import styled from 'styled-components'

import Container from '../components/Container'

import drawing  from '../images/entry2non-transparent.jpeg'

import { Link } from 'react-router-dom'

 
const Entry2 = () => {
    const [fullscreenSrc, setFullscreenSrc] = useState(null);

  return (
    <Container noBottomPadding>
      
      <p>
        <em>"what if i fail?"</em>
      </p>

      <p>
        we are <u>wired</u> to self preserve, but this way of thinking is what
        holds us down from our potential.
      </p>

      <p>
        one could argue that the <b>risk</b> of <u>not doing something</u> is
        actually <b>worse</b> than <u>doing it and getting the worst outcome.</u>
      </p>

      <p>so ask yourself, <em>"what if i fail?"</em></p>

      <p>the outcome, though not desirable, is really not that bad.</p>

      <p>ok...i got fired, but i gave it my best and maybe that line of work was just not for me.</p>

      <p>now i can use that undertstanding when seeking future endeavors.</p>

      <p>in the same light, ask yourself, <em>"okay, but what if i succeed?"</em></p>

      <p>again, you'll find that <b>the outcome is worth the risk of failure.</b></p>

      <p><em>"oh, so i <b>am</b> capable of this. now i know!"</em></p>

      <em>"if i fail, so what?"</em>
      <br></br>

      <Image src={drawing} onClick={() => setFullscreenSrc(drawing)}/>

      {fullscreenSrc && (
        <FullscreenImage onClick={() => setFullscreenSrc(null)}>
          <img src={fullscreenSrc} alt="fullscreen" />
        </FullscreenImage>
      )}

      <Container noTopPadding={true}>
        02.26.25<br></br><br></br>
        <Link to={'/about'}>back to blogs.</Link>
      </Container>
      
    </Container>
  )
}

const Image = styled.img`
  width: 200px;
  cursor: pointer;
  transition: transform 0.3s;

  &:hover {
    transform: scale(1.05);
  }
`;

const FullscreenImage = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;

  img {
    max-width: 90%;
    max-height: 90%;
    cursor: pointer;
  }
`;

export default Entry2