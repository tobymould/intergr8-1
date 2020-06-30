import React, { Component } from 'react';
import './App.css';
import TicketCatStage1 from '../src/components/TicketCatstage1';
import TicketCatStage2 from '../src/components/TicketCatstage2';
import TicketCatStage3 from '../src/components/TicketCatstage3';
import Tile from '../src/components/Tile';

class App extends Component {
  render() {
      return (
    <>
    <TicketCatStage1 />
    <TicketCatStage2 />
    <TicketCatStage3 />
    <p>Hello!</p>
    </>
  );
}
}

export default App;
