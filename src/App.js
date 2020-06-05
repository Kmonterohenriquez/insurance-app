import React from "react";
import Nav from "./components/Nav/Nav";
import "./App.sass";
import Showcase from "./components/Showcase/Showcase";
import Info from "./components/Info/Info";
import Plans from "./components/Plans/Plans";

function App() {
  return (
    <div className="App">
      <Nav />
      <Showcase />
      <Info />
      <Plans />
    </div>
  );
}

export default App;
