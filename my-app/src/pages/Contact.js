import React from 'react'
import Socials from '../components/Socials'
import { ContactForm } from '../components/ContactForm'

const Contact = () => {
 
  return (
    <>
      <div className='subtitle'>
        <h1>reach out.</h1>
      </div>

      <div className='container container-padding'>
        <ContactForm />
      </div>

      <div className='footer'>
        <Socials />
      </div>
    </>
  )
}

export default Contact