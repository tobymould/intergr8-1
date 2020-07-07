import React from "react";
import "./App.css";
import Routes from "./containers/Routes/Routes";
import library from "./data/fa-library";
import TicketingDashboard from "./components/TicketingDashboard/";

function App() {
  // return <Routes />;
  return <TicketingDashboard />
}

export default App;
console.log(library);
