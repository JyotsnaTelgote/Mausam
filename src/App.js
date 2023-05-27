import React, { useState } from "react";
import CurrentLocation from "./currentLocation";
import "./App.css";

function App() {
  return (
    
    <React.Fragment>
      <h1>MAUSAM</h1>
      <div className="container">
        <CurrentLocation />
      </div>
      <div className="footer-info"> 
        Developed by {"Jyotsna"}    
      </div>
    </React.Fragment>
  );
}

export default App;
