import React from 'react'

import mozila from '../assets/img/mozila.svg'
import DisplayOrg from '../components/displayOrg'
import Header from '../components/header'
const Home = () => {
  return (
    <>
      <Header />
      <DisplayOrg
        logo={mozila}
        name='Mozila'
        summary='Keeping the internet open and accesible to all'
      />
    </>
  )
}

export default Home
