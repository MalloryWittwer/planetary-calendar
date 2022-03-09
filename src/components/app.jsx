import React, { Component } from "react";

import SunDiagram from "./sunDiagram";
import MoonDiagram from "./moonDiagram";
import Calendar from "./calendar";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        <div className="main-container">
          <div className="diagram-container">
            <SunDiagram />
            <MoonDiagram />
          </div>
          <Calendar />
        </div>
      </>
    );
  }
}

export default App;
