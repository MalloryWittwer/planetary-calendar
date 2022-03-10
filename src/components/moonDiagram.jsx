import React, { Component } from "react";
import MoonAnnotations from "./moon/moon-annotations";
import MoonAreas from "./moon/moon-areas";
import MoonRotable from "./moon/moon-rotable";

const dayDico = {
  0: ["1", "st"],
  1: ["2", "nd"],
  2: ["3", "rd"],
  3: ["4", "th"],
  4: ["5", "th"],
  5: ["6", "th"],
  6: ["7", "th"],
  7: ["8", "th"],
  8: ["9", "th"],
  9: ["10", "th"],
  10: ["11", "th"],
  11: ["12", "th"],
  12: ["13", "th"],
  13: ["14", "th"],
  14: ["15", "th"],
  15: ["16", "th"],
  16: ["17", "th"],
  17: ["18", "th"],
  18: ["19", "th"],
  19: ["20", "th"],
  20: ["21", "th"],
  21: ["22", "th"],
  22: ["23", "th"],
  23: ["24", "th"],
  24: ["25", "th"],
  25: ["26", "th"],
  26: ["27", "th"],
  27: ["28", "th"],
  28: ["29", "th"],
  29: ["30", "th"],
  30: ["31", "st"],
};

class MoonDiagram extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedDayID: 0,
    };
  }

  handleHover(area) {
    this.props.setHoverTrue();
    const angle = Number.parseInt(
      (Number.parseFloat(area.id, 10) * 360) / 31,
      10
    );
    document.getElementById(
      "moon-rotable"
    ).style.transform = `rotate(${angle}deg)`;
    const [day, suffix] = dayDico[area.id];
    this.props.dayHoverFnct(day, suffix);
  }

  handleMouseOut() {
    const angle = Number.parseInt(
      (Number.parseFloat(this.state.selectedDayID, 10) * 360) / 31,
      10
    );
    document.getElementById(
      "moon-rotable"
    ).style.transform = `rotate(${angle}deg)`;
    this.props.setHoverFalse();
  }

  handleClick(area) {
    document.querySelectorAll(".areas-moon path").forEach((area) => {
      area.classList.remove("active");
    });
    area.classList.add("active");
    const [day, suffix] = dayDico[area.id];
    this.props.dayClickFnct(day, suffix);
    this.setState({ selectedDayID: area.id });
  }

  adjustSize() {
    const calendar = document.querySelector(".calendar");
    const calendarWidth = calendar.getBoundingClientRect().width;
    const diagram = document.querySelector("#moon-diagram");
    diagram.style.width = `${Number.parseInt(calendarWidth * 0.4)}px`;
    diagram.style.height = `${Number.parseInt(calendarWidth * 0.4)}px`;
  }



  componentDidMount() {
    document.querySelectorAll(".areas-moon path").forEach((area) => {
      area.addEventListener("mouseover", (e) => this.handleHover(area));
      area.addEventListener("mouseout", (e) => this.handleMouseOut());
      area.addEventListener("click", (e) => this.handleClick(area));
    });

    window.addEventListener("resize", this.adjustSize);
    this.adjustSize();
  }

  render() {
    return (
      <div className="diagram" id="moon-diagram">
        <MoonRotable
          id={"moon-rotable"}
          moonStroke={"#eee"}
          moonFill={"#ddd"}
          planetStroke={"#b9dbff"}
          planetFill={"#81beff"}
        />
        <MoonAnnotations month={this.props.month} />
        <MoonAreas month={this.props.month} />
      </div>
    );
  }
}

export default MoonDiagram;
