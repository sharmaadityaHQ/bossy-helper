import React from 'react'

import mozila from '../assets/img/mozila.svg'
import DisplayOrg from '../components/displayOrg'
const Home = () => {
  return (
    <>
      <DisplayOrg
        logo={mozila}
        name='Mozila'
        summary='Keeping the internet open and accesible to all'
      />
    </>
  )
}

export default Home
