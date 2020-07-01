import React, { Component } from 'react';
import './App.css';
// import LogInBox from './components/LogInBox';
import CategoryChooser from './containers/CategoryChooser';
import library from "./data/fa-library";




class App extends Component {
  render () {
  return (
    // <LogInBox />
    <CategoryChooser />
    // <Routes />
  );
}
}


export default App;
