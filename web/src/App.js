import React from 'react'
import GlobalStyles from './styles/GlobalStyles'
import { Provider } from 'react-redux'

import { Layout, SpecialtySearch, Appointment, Modal } from './components'

import store from './store'

function App() {
  return (
    <>
    <Provider store={store}>
      <Layout>
        <SpecialtySearch />
        <Appointment />
        <Modal />
      </Layout>
    </Provider>

      <GlobalStyles />
    </>
  )
}

export default App