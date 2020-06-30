import React, { Component } from 'react';
import CreateTicket from "./components/CreateTicket";
import TicketTile from "./components/TicketTile";

class App extends Component {

  render() {
    return(
      <>
      <CreateTicket /> 
      <TicketTile />
      </>

    )}
}

export default App;