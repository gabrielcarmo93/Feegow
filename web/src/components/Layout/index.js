import React from 'react'

import { Container } from './styles'

export default function index({children}) {
  return (
    <Container>
      {children}
    </Container>
  )
}
