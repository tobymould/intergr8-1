import React, { Component } from 'react';
import './App.css';
import TicketCatStageOne from './components/TicketCatStageOne';
import TicketCatStageTwo from './components/TicketCatStageTwo';
import TicketCatStageThree from './components/TicketCatStageThree';
import Tile from '../src/components/Tile';

class App extends Component {
  render() {
      return (
    <>
    <TicketCatStageOne />
    <TicketCatStageTwo />
    <TicketCatStageThree />
    </>
  );
}
}

export default App;
