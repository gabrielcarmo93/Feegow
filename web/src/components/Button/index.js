import React from 'react'

import { Button as Btn } from './styles'

export default function Button({ children, onClick }) {
  return (
    <Btn onClick={onClick}>
      {children}
    </Btn>
  )
}
