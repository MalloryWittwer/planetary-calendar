import React, { Component } from "react";

import SunDiagram from "./sunDiagram";
import MoonDiagram from "./moonDiagram";
import Calendar from "./calendar";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      day: "1",
      suffix: "st",
      month: "January",
      selectedDay: "1",
      selectedSuffix: "st",
      selectedMonth: "January",
      hovering: false,
    };
  }

  selectDay = (day, suffix) => {
    this.setState({ selectedDay: day, selectedSuffix: suffix });
  };

  selectMonth = (month) => {
    this.setState({ selectedMonth: month });
  };

  selectHoverDay = (day, suffix) => {
    this.setState({ day, suffix });
  };

  selectHoverMonth = (month) => {
    this.setState({ month });
  };

  setHoverTrue = () => {
    this.setState({ hovering: true });
  };

  setHoverFalse = () => {
    this.setState({
      hovering: false,
      day: this.state.selectedDay,
      suffix: this.state.selectedSuffix,
      month: this.state.selectedMonth,
    });
  };

  componentDidMount = () => {
    fetch(process.env.PUBLIC_URL + "/agenda.json")
      .then((r) => r.json())
      .then((agenda) => this.setState({ agenda }));
  };

  render() {
    let d;
    let s;
    let m;
    if (this.state.hovering) {
      d = this.state.day;
      s = this.state.suffix;
      m = this.state.month;
    } else {
      d = this.state.selectedDay;
      s = this.state.selectedSuffix;
      m = this.state.selectedMonth;
    }
    return (
      <>
        <div className="main-container">
          <div className="diagram-container">
            <SunDiagram
              monthClickFnct={this.selectMonth}
              monthHoverFnct={this.selectHoverMonth}
              setHoverFalse={this.setHoverFalse}
              setHoverTrue={this.setHoverTrue}
            />
            <MoonDiagram
              dayClickFnct={this.selectDay}
              dayHoverFnct={this.selectHoverDay}
              setHoverFalse={this.setHoverFalse}
              setHoverTrue={this.setHoverTrue}
            />
          </div>
          <Calendar day={d} suffix={s} month={m} agenda={this.state.agenda} />
        </div>
      </>
    );
  }
}

export default App;
