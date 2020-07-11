import React from 'react'
import { Router } from '@reach/router'
import './assets/scss/index.scss'

import Home from './pages/Home'
import Organizations from './pages/Organizations'

function App() {
  return (
    <div className='app'>
      <Router>
        <Home path='/' />
        <Organizations path='/orgs' />
      </Router>
    </div>
  )
}

export default App
