import React, { useEffect } from 'react';
import './App.css';
import { connect } from 'react-redux';

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
