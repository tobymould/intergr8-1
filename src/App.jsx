import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import LogInBox from "./components/LogInBox";

import { library } from '@fortawesome/fontawesome-svg-core';
import { faUser, faLock } from '@fortawesome/free-solid-svg-icons';

library.add(faUser, faLock);

class App extends Component {
  render(){
    return (
      <>
        <LogInBox />
      </>
    );
  }
}

export default App;
