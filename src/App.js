import React from 'react';
import logo from './logo.svg';
import './App.css';

function App () {
  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <h2>Welcome to The EOS Design System</h2>
        <a
          className='App-link'
          href='https://www.eosdesignsystem.com/'
          target='_blank'
          rel='noopener noreferrer'
        >
          Learn More
        </a>
      </header>
    </div>
  );
}

export default App;
