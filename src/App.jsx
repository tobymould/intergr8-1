import React, { Component } from 'react';
import './App.css';
import Routes from './containers/Routes/Routes';
import library from './data/fa-library';

class App extends Component {
  render() {
  return (
    <Routes />
  )
}
}

export default App;
console.log(library);
