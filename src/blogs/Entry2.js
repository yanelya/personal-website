import {useState} from 'react'

import styled from 'styled-components'

import Container from '../components/Container'
import FullscreenImage from '../components/FullscreenImage'
import ClickableImage from '../components/ClickableImage'

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
        one could argue that the <b>risk</b> of <u>not doing something</u> is
        actually <b>worse</b> than <u>doing it and getting the worst outcome.</u>
      </p>

      <p><em>"what if i fail?"</em></p>

      <p>the outcome, though not desirable, is really <u>not that bad.</u></p>

      <p>ok...i got fired, but i gave it my best and maybe that line of work was just not for me.</p>

      <p>now i can use that undertstanding when seeking future endeavors.</p>

      <p>in the same light, ask yourself, <em>"okay, but what if i succeed?"</em></p>

      <p>again, you'll find that <b>the outcome is worth the risk of failure.</b></p>

      <p><em>"oh, so i <b>am</b> capable of this. now i know!"</em></p>

      <em>"if i fail, so what?"</em>
      <br></br>

      <ClickableImage src={drawing} onClick={() => setFullscreenSrc(drawing)}/>

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

export default Entry2