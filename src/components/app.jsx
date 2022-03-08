import React, { Component } from "react";

import PhaseDiagram from "./diagram";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        <div className="main-container">
          <PhaseDiagram />
        </div>
      </>
    );
  }
}

export default App;
