import React, { Component } from "react";

import SunDiagram from "./sunDiagram";
import MoonDiagram from "./moonDiagram";
import Calendar from "./calendar";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      day: "1",
      month: "January",
    };
  }

  selectDay = (day) => {
    this.setState({ day });
  };

  selectMonth = (month) => {
    this.setState({ month });
  };

  render() {
    return (
      <>
        <div className="main-container">
          <div className="diagram-container">
            <SunDiagram actionFnct={this.selectMonth} />
            <MoonDiagram actionFnct={this.selectDay} />
          </div>
          <Calendar 
           day={this.state.day} 
           month={this.state.month}
          />
        </div>
      </>
    );
  }
}

export default App;
