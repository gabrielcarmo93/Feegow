import React, { useEffect } from 'react'
import { connect } from 'react-redux'

import Modal from 'react-modal'

const MyModal = ({ modules, dispatch }) => {
  const { selectedProfessional } = modules
  const { selectedSpecialty } = modules

  const customStyles = {
    content : {
      top : '50%',
      left : '50%',
      right : 'auto',
      bottom : 'auto',
      marginRight : '-50%',
      transform : 'translate(-50%, -50%)',
      padding: 20
    }
  };

  useEffect(() => {
    console.log(Boolean(selectedProfessional))
  },[modules])

  const closeModal = () => {
    dispatch({
      type: 'SET_SELECTED_PROFESSIONAL_AND_SPECIALTY',
      professional: null,
      specialty: null
    })
  }

  return (
    <Modal
      style={customStyles}
      isOpen={Boolean(selectedProfessional)}
      onRequestClose={closeModal}
    >
      <span>Eu sou um modal</span>
      <h1>oi</h1>
      <h2>oi</h2>
      <h3>oi</h3>
      <h4>oi</h4>
      <h5>oi</h5>
    </Modal>
  )
}

export default connect(state => ({ modules: state }))(MyModal)