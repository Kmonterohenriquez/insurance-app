import React from "react";
import Nav from "./components/Nav/Nav";
import "./App.sass";
import Showcase from "./components/Showcase/Showcase";
import Info from "./components/Info/Info";

function App() {
  return (
    <div className="App">
      <Nav />
      <Showcase />
      <Info />
    </div>
  );
}

export default App;
