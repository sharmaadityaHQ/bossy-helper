import React from 'react'
import { useTranslation } from 'react-i18next'

const Home = () => {
  const { t, i18n } = useTranslation()
  return (
    <>
      <header className='App-header'>
        <h1>{t('welcome:title')}</h1>
      </header>
      <button onClick={() => i18n.changeLanguage('es')}>es</button>
      <button onClick={() => i18n.changeLanguage('en')}>en</button>
      <p>
        Edit <code>src/App.js</code> and save to reload.
      </p>
      <a
        className='App-link'
        href='https://reactjs.org'
        target='_blank'
        rel='noopener noreferrer'
      >
        Learn React
      </a>
    </>
  )
}

export default Home
