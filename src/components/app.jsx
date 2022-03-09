import React, { Component } from "react";

import Diagram from "./diagram";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        <div className="main-container">
          <Diagram />
        </div>
      </>
    );
  }
}

export default App;
