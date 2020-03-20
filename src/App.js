import React, { useEffect } from 'react';
import './App.css';
import Auth from './component/auth/Auth';
import VerticalStepper from './component/stepper/VerticalStepper';
import { connect } from 'react-redux';
import { STEP_REQUEST_CALL } from './store/action/stepAction';
import stepFactory from './utils/stepFactory'
import Loader from './component/utils/Loader';
import Error from './component/utils/Error';

const App = (props) => {
  return (
    <div>
      <h1>Worked</h1>
    </div>
  );
}

export default connect(
  store => ({}),
  dispatch => ({})
)(App);
