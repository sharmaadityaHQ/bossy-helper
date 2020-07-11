import React from 'react'
import Card from '../components/Card'
import contribute from '../assets/img/contribute.svg'
import startoss from '../assets/img/startoss.svg'
import gettingpaid from '../assets/img/gettingpaid.svg'
import faq from '../assets/img/faq.png'

const Home = () => {
  return (
    <React.Fragment>
      <div className='home'>
        <div className='header'>
          <div className='header--text'>
            <h1>Open Source Guide</h1>
            <span>Kick start your open source journey.</span>
          </div>
        </div>
        <div className='home-grid'>
          <Card
            logo={contribute}
            name='Contribute to Open Source'
            summary='Find active open source projects in your favourite programming language or framework.'
          />
          <Card
            logo={startoss}
            name='Start an Open Source Project'
            summary='Learn more about the importance of open source projects in getting internships.'
          />
          <Card
            logo={gettingpaid}
            name='Getting Paid for Open Source Work'
            summary='Sustain your work in open source by getting financial support for your time or your project.'
          />
          <Card
            logo={faq}
            name='Frequently Asked Questions'
            summary='Find answers to all your queries or ask a question.'
          />
        </div>
      </div>
    </React.Fragment>
  )
}

export default Home
