import React, { useEffect } from 'react'

import { Form, Label, Select } from './styles'
import api from '../../services/api'

import { connect } from 'react-redux'

function SpecialtySearch({ modules, dispatch }) {
  const opts = modules.specialtiesOpts
  
  const loadOptions = async () => {
    const response = await api.feegow.get('/specialties/list')
    
    dispatch({
      type: 'LOAD_OPTIONS',
      data: response.data.content
    })
  }

  const handleChange = async e => {
    const response = await api.feegow.get('/professional/list', {
      params: {
        "ativo": 1,
        "especialidade_id": e.target.value
      }
    })
    
    dispatch({
      type: 'SET_PROFESSIONALS',
      data: response.data.content
    })
  }
  
  useEffect(() => {
    loadOptions()
  }, [])
  return (
    <Form>
      <Label>Consulta de</Label>
      <Select onChange={handleChange}>
        <option disabled>Selecione uma Especialidade</option>
        {
          opts.map(opt => <option value={opt.especialidade_id} key={opt.especialidade_id}>{opt.nome}</option>)
        }
      </Select>
    </Form>
  )
}


export default connect(state => ({ modules: state }))(SpecialtySearch)