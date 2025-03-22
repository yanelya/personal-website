import React from 'react'

import Container from '../components/Container'

import { Link } from 'react-router-dom'
 
const Entry1 = () => {
  return (
    <Container>
      
      hi. thanks for stopping by (:
      <br></br>

      <Container>
        <Link to={'/about'}>back to blogs.</Link>
      </Container>
      
    </Container>
  )
}

export default Entry1