import React from "react";
import "./App.css";
import Routes from "./containers/Routes/Routes";
import library from "./data/fa-library";
import NavBar from "./components/NavBar/NavBar";

function App() {
  return (
  <>
  <NavBar/>
  <Routes />
  </>
  )
}

export default App;
console.log(library);
