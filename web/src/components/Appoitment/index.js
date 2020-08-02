import React from 'react'
import { connect } from 'react-redux'

import Button from '../Button'
import { Container, Card, Profile, ProfileInfo, Photo, Name, Document } from './styles'

const Appointment = ({ modules, dispatch }) => {
  const { professionals } = modules
  const noImage = 'https://cdn.feegow.com/img/user-dummy.png'

  function handleClick(professional, specialty) {
    dispatch({
      type: 'SET_SELECTED_PROFESSIONAL_AND_SPECIALTY',
      professional,
      specialty
    })
  }

  return (
    <Container>
      {
        professionals.map(professional => (
          <Card key={professional.profissional_id} >
            <Profile>
              <Photo src={professional.foto || noImage} />
              <ProfileInfo>
                <Name>{professional.tratamento} {professional.nome}</Name>
                <Document>{professional.documento_conselho && `CRM ${professional.documento_conselho}`}</Document>
              </ProfileInfo>
            </Profile>
            
            <Button onClick={() => handleClick(professional.profissional_id, professional.especialidades[0].especialidade_id)}>Agendar</Button>
          </Card>
        ))
      }
    </Container>
  )
}

export default connect(state => ({ modules: state }))(Appointment)