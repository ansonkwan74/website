import React from "react";
import "./App.css";
import "./styles/scrollbar.css";
import "./styles/nav.css";
import Hero from "./components/hero";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/navBar";

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <Hero />
    </div>
  );
}

export default App;
