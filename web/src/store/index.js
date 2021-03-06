import { createStore } from 'redux'

const INITIAL_STATE = {
  specialtiesOpts: [],
  professionals: [],
  sources: [],
  selectedProfessional: null,
  selectedSpecialty: null,
  selectedSource: null
}

function reducer(state = INITIAL_STATE, action) {
  if (action.type === 'LOAD_OPTIONS') {
    return {
      ...state,
      specialtiesOpts: action.data
    }
  }

  if (action.type === 'SET_PROFESSIONALS') {
    return {
      ...state,
      professionals: action.data
    }
  }
  
  if (action.type === 'SET_SOURCE') {
    return {
      ...state,
      sources: action.data
    }
  }

  if (action.type === 'SET_SELECTED_PROFESSIONAL_AND_SPECIALTY') {
    return {
      ...state,
      selectedProfessional: action.professional,
      selectedSpecialty: action.specialty
    }
  }

  return state;
}

const store = createStore(reducer)

export default store