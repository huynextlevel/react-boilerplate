import React from 'react';
import PropTypes from 'prop-types';

import '../../App.css';
import { useStyles } from './styles';
import logo from '../../logo.svg';
import ButtonComponent from '../../components/ButtonComponent/ButtonComponent';

const LandingPage = ({ className, firebase, ...rest }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p style={{ marginBottom: 10 }}>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <ButtonComponent
          variant="contained"
          onClick={() => window.open('https://reactjs.org', '_blank')}
        >
          Learn React
        </ButtonComponent>
      </header>
    </div>
  );
};

LandingPage.propTypes = {
  className: PropTypes.string,
};

export default LandingPage;
