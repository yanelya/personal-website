import Socials from '../components/Socials'
import { ContactForm } from '../components/ContactForm'
import Container from '../components/Container'

const Contact = () => {
 
  return (
    <Container noTopPadding>
      <div className='subtitle'>
        <h1>reach out.</h1>
      </div>

      <ContactForm />

      <div className='footer'>
        <Socials />
      </div>
    </Container>
  )
}

export default Contact