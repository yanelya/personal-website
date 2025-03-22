import React, { useState, useRef } from 'react'

import { Form, Button, TextArea, Input } from 'semantic-ui-react'

import emailjs from 'emailjs-com'
import Swal from 'sweetalert2'

import { SERVICE_ID, TEMPLATE_ID, PUBLIC_KEY } from '../Constants.js'

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faEnvelope, faUser } from '@fortawesome/free-solid-svg-icons';

import Container from './Container.js'

import ascii1 from '../images/ascii1.png'

import styled from 'styled-components'

export const ContactForm = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')

    const form = useRef();

    const handleSubmit = (e) => {
      e.preventDefault();
      emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, PUBLIC_KEY)
        .then(
          (result) => {
          Swal.fire({
            icon: 'success',
            title: 'message sent successfully'
          })
        }, 
        (error) => {
          console.log(error.text);
          Swal.fire({
            icon: 'error',
            title: 'oops, something went wrong',
            text: error.text,
          })
        });
      e.target.reset()

      setName('')
      setEmail('')
      setMessage('')
    };
  
  return (
    <StyledContainer>
      <img src={ascii1}/>
      <Form ref={form} onSubmit={handleSubmit}>
        <Form.Field
          control={Input}
          label={<label className="bold-label">name: </label>}
          value={name}
          name='name'
          required
          
          onChange={(e) => setName(e.target.value)} >
        </Form.Field>

        <Form.Field
          control={Input}
          label={<label className="bold-label">email: </label>}
          value={email}
          name='email'
          required
          onChange={(e) => setEmail(e.target.value)} >
        </Form.Field>

        <Form.Field
          control={TextArea}
          label='message: '
          name='message'
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required>
        </Form.Field>
        
          <Button type='submit' color='black'>submit</Button>
      </Form>
    </StyledContainer>
  )
}


const StyledContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  padding: 0%;
  img {
    padding-top: 0px;
  }
  label {
    text-align: left;
  }

  @media screen and (min-width: 800px) {
    display: flex;
    align-items: center;
    flex: 1;
  }
`;