import React from 'react'

import 'src/App.css'
import { useStyles } from './styles'
import logo from 'src/logo.svg'
import ButtonComponent from 'src/components/Button'

const LandingPage = () => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p style={{ marginBottom: 10 }}>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <ButtonComponent
          onClick={() => window.open('https://reactjs.org', '_blank')}
        >
          Learn React
        </ButtonComponent>
      </header>
    </div>
  )
}

export default LandingPage
