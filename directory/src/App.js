import React, { Component } from 'react';
import './App.css';

import Background from "./components/Background"
import UserInfo from "./components/UserInfo"
import Data from "./components/Data"

class App extends Component {
  render() {
    return (
      <div className="App">
       <Background />
      </div>
    );
  }
}

export default App;
