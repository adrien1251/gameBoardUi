import React, { useEffect } from 'react';
import './App.css';
import { connect } from 'react-redux';
import Risk from './board/Risk';
import { BrowserRouter as Router, Route } from "react-router-dom";

const App = (props) => {
  return (
    <Router>
      <Route path="" component={Risk} />
    </Router>
  );
}

export default connect(
  store => ({}),
  dispatch => ({})
)(App);
