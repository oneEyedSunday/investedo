import React, { Component } from 'react';

import './App.css';
import FullFlow from './Flow'
import Home from './components/Home'

const createFps = require('fps-indicator')
createFps()

class App extends Component {
  render() {
    return (
      <div className="App">
        {
        // Layout goes here
    	}
        <FullFlow />
      </div>
    );
  }
}

export default App;
