import React from 'react'
import Header from '../components/header'
import Card from '../components/Card'
import contribute from '../assets/img/contribute.svg'

const Home = () => {
  return (
    <React.Fragment>
      <div className='home'>
        <Header />
        <div className='home-grid'>
          <Card logo={contribute} name='lorem Ipsum' summary='lorem ipsum' />
          <Card logo={contribute} name='lorem Ipsum' summary='lorem ipsum' />
          <Card logo={contribute} name='lorem Ipsum' summary='lorem ipsum' />
          <Card logo={contribute} name='lorem Ipsum' summary='lorem ipsum' />
        </div>
      </div>
    </React.Fragment>
  )
}

export default Home
