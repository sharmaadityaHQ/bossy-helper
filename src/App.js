import React from 'react'
import { Router } from '@reach/router'
import './App.css'
import Home from './pages/Home'
import Organizations from './pages/Organizations'

function App() {
  return (
    <div className='App'>
      <Router>
        <Home path='/' />
        <Organizations path='/orgs' />
      </Router>
    </div>
  )
}

export default App
