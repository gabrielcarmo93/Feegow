import React, { useEffect, useState } from 'react'
import api from '../../services/api'
import { connect } from 'react-redux'

import { Select, Input, Form, Button, Buttons } from './styles'
import Modal from 'react-modal'

const MyModal = ({ modules, dispatch }) => {
  const { selectedProfessional } = modules
  const { selectedSpecialty } = modules
  const [isValid, setIsValid] = useState(false)
  const [name, setName] = useState('')
  const [birthdate, setBirthdate] = useState('')
  const [sourceId, setSourceId] = useState(null)
  const [cpf, setCpf] = useState('')
  const opts = modules.sources
  const data = {
    specialty_id: selectedSpecialty,
    professional_id: selectedProfessional
  }

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
    loadSources()
  },[])

  const loadSources = async () => {
    const response = await api.feegow.get('/patient/list-sources')

    dispatch({
      type: 'SET_SOURCE',
      data: response.data.content
    })
  }

  const closeModal = () => {
    setName('')
    setBirthdate('')
    setSourceId(null)
    setCpf('')

    dispatch({
      type: 'SET_SELECTED_PROFESSIONAL_AND_SPECIALTY',
      professional: null,
      specialty: null
    })
  }

  const validateForm = () => {
    if (!name || !birthdate || !sourceId || !cpf) {
      setIsValid(false)
      return false
    }

    data['name'] = name
    data['birthdate'] = birthdate
    data['source_id'] = Number(sourceId)
    data['cpf'] = cpf
    setIsValid(true)

    return true
  }

  useEffect(() => {
    validateForm()
  }, [name, birthdate, sourceId, cpf])

  const handleChange = e => {
    const { id, value } = e.target

    switch(id) {
      case 'name':
        setName(value)
        break
      case 'birthdate':
        setBirthdate(value)
        break
      case 'sourceId':
        setSourceId(value)
        break
      case 'cpf':
        setCpf(value)
        break
      default:
        return false
    }
  }

  const handleSubmit = async e => {
    e.preventDefault()
    data['date_time'] = Date.now()
    if (validateForm()) {
      const response = await api.local.post('/appointments', data)

      console.log(response)
    }
    else
      alert('não é válido')
  }

  return (
    <Modal
      style={customStyles}
      isOpen={Boolean(selectedProfessional)}
      onRequestClose={closeModal}
    >
      <Form>
        <Input type={'text'} id={'name'} placeholder={'Nome Completo'} onChange={handleChange} />
        <Input type={'date'} id={'birthdate'} placeholder={'Data de Nascimento'} onChange={handleChange} />
        <Select id={'sourceId'} onChange={handleChange} >
          {
            opts.map(opt => <option key={opt.origem_id} value={opt.origem_id}>{opt.nome_origem}</option>)
          }
        </Select>
        <Input type={'text'} id={'cpf'} placeholder={'CPF'} onChange={handleChange} />
        
        <Buttons>
          <Button color={'danger'} onClick={closeModal}>Cancelar</Button>
          <Button color={'success'} onClick={handleSubmit} disabled={!isValid}>Agendar</Button>
        </Buttons>
      </Form>
    </Modal>
  )
}

export default connect(state => ({ modules: state }))(MyModal)