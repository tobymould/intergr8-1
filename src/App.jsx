import React, { Component } from 'react';
import './App.css';
import Routes from './containers/Routes/Routes';
import library from './data/fa-library';
import TicketColumns from './components/ticketingDashboard/TicketColumns'

class App extends Component {
  render() {
  return (
    // <Routes />
    <TicketColumns />
  )
}
}

export default App;
console.log(library);
