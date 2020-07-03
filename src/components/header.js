import React from 'react'
import headerImg from '../assets/img/headerImg.svg'
import '../assets/scss/index.scss'

export default () => (
  <>
    <div className='header'>
      <div className='header--text'>
        <h1>Open Source Guide</h1>
        <span>
          Kick start your open source journey . Select your next project
        </span>
      </div>

      <div className='header--imgContainer'>
        <img className='header-img' src={headerImg} alt='Headersvg' />
      </div>
    </div>
  </>
)
