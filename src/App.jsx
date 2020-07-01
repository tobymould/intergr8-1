import React from 'react';
import './App.css';
// import TicketCatStage1 from './TicketCatStage1';
import CreateTicket from './components/CreateTicket';
import TicketTile from './components/TicketTile';

function App() {
  return (
    <>
    <CreateTicket />
    <br/><br/>
    <TicketTile />
    </>
  );
}

export default App;
