import React from "react";
import Nav from "./components/Nav/Nav";
import "./App.sass";
import Showcase from "./components/Showcase/Showcase";
import Info from "./components/Info/Info";
import Plans from "./components/Plans/Plans";
import Steps from "./components/Steps/Steps";
import Quote from "./components/Quote/Quote";

function App() {
  return (
    <div className="App">
      <Nav />
      <Showcase />
      <Info />
      <Plans />
      <Steps />
      <Quote />
    </div>
  );
}

export default App;
