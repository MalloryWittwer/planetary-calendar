import React, { Component } from "react";
import MoonAnnotations from "./moon/moon-annotations";
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
        <MoonAnnotations />

        <svg id="moon-areas" viewBox="0 0 200 200">
          <g className="areas areas-moon" fill="none">
            <path
              id="0"
              d="m2.8444 79.607-2.1084 20.019 32.636 0.11679a66.854 66.854 0 0 1 1.4165-13.452z"
            />
            <path
              id="1"
              d="m8.9396 60.422-6.0952 19.185 31.944 6.6838a66.854 66.854 0 0 1 4.0964-12.892z"
            />
            <path
              id="2"
              d="m18.772 42.856-9.832 17.565 29.945 12.978a66.854 66.854 0 0 1 6.6068-11.803z"
            />
            <path
              id="3"
              d="m31.938 27.629-13.167 15.227 26.72 18.74a66.854 66.854 0 0 1 8.8475-10.232z"
            />
            <path
              id="4"
              d="m47.901 15.365-15.963 12.265 22.401 23.735a66.854 66.854 0 0 1 10.726-8.2414z"
            />
            <path
              id="5"
              d="m66.005 6.5641-18.104 8.8005 17.164 27.759a66.854 66.854 0 0 1 12.165-5.9133z"
            />
            <path
              id="6"
              d="m85.511 1.5887-19.506 4.9754 11.225 30.646a66.854 66.854 0 0 1 13.107-3.3435z"
            />
            <path
              id="7"
              d="m105.62 0.64094-20.108 0.94774 4.8266 32.278a66.854 66.854 0 0 1 9.8873-0.73536 66.854 66.854 0 0 1 3.6241 0.0987z"
            />
            <path
              id="8"
              d="m105.62 0.64094-1.7699 32.589a66.854 66.854 0 0 1 13.363 2.0955l8.2936-31.564z"
            />
            <path
              id="9"
              d="m125.51 3.7606-8.2936 31.564a66.854 66.854 0 0 1 12.668 4.7429l14.478-29.249z"
            />
            <path
              id="10"
              d="m144.36 10.819-14.478 29.249a66.854 66.854 0 0 1 11.454 7.1959l20.069-25.735z"
            />
            <path
              id="11"
              d="m161.4 21.529-20.069 25.735a66.854 66.854 0 0 1 9.771 9.3545l24.838-21.169z"
            />
            <path
              id="12"
              d="m175.94 35.45-24.838 21.169a66.854 66.854 0 0 1 7.6884 11.13l28.59-15.735z"
            />
            <path
              id="13"
              d="m187.38 52.013-28.59 15.735a66.854 66.854 0 0 1 5.2901 12.449l31.172-9.6578z"
            />
            <path
              id="14"
              d="m195.26 70.54-31.172 9.6578a66.854 66.854 0 0 1 2.6758 13.26l32.478-3.1853z"
            />
            <path
              id="15"
              d="m199.24 90.273-32.478 3.1853a66.854 66.854 0 0 1 0.31936 6.5267 66.854 66.854 0 0 1-0.36742 7.0001l32.454 3.4179z"
            />
            <path
              id="16"
              d="m166.71 106.98a66.854 66.854 0 0 1-2.7704 13.241l31.101 9.8805 4.1227-19.703z"
            />
            <path
              id="17"
              d="m163.94 120.23a66.854 66.854 0 0 1-5.379 12.412l28.476 15.939 8.0047-18.47z"
            />
            <path
              id="18"
              d="m158.56 132.64a66.854 66.854 0 0 1-7.767 11.075l24.684 21.344 11.559-16.481z"
            />
            <path
              id="19"
              d="m150.8 143.71a66.854 66.854 0 0 1-9.8382 9.2847l19.882 25.876 14.64-13.817z"
            />
            <path
              id="20"
              d="m140.96 153a66.854 66.854 0 0 1-11.505 7.1143l14.266 29.349 17.121-10.587z"
            />
            <path
              id="21"
              d="m129.45 160.11a66.854 66.854 0 0 1-12.702 4.6524l8.0662 31.62 18.902-6.9236z"
            />
            <path
              id="22"
              d="m116.75 164.76a66.854 66.854 0 0 1-13.379 2.0009l1.5358 32.596 19.909-2.9771z"
            />
            <path
              id="23"
              d="m89.863 166.03-5.0571 32.238 20.101 1.0919-1.5358-32.596a66.854 66.854 0 0 1-3.1461 0.0739 66.854 66.854 0 0 1-10.362-0.8077z"
            />
            <path
              id="24"
              d="m76.78 162.59-11.443 30.561 19.469 5.1154 5.0571-32.238a66.854 66.854 0 0 1-13.083-3.438z"
            />
            <path
              id="25"
              d="m64.657 156.59-17.361 27.632 18.041 8.9297 11.443-30.561a66.854 66.854 0 0 1-12.123-6.0012z"
            />
            <path
              id="26"
              d="m53.99 148.27-22.568 23.572 15.874 12.379 17.361-27.632a66.854 66.854 0 0 1-10.667-8.3184z"
            />
            <path
              id="27"
              d="m45.299 138.1-26.793 18.593 12.916 15.155 22.568-23.572a66.854 66.854 0 0 1-8.6909-10.176z"
            />
            <path
              id="28"
              d="m38.694 126.13-30.036 12.762 9.7059 17.636 26.852-18.547a66.854 66.854 0 0 1-6.5216-11.851z"
            />
            <path
              id="29"
              d="m34.692 113.21-31.991 6.4549 5.9578 19.228 30.036-12.762a66.854 66.854 0 0 1-4.0029-12.921z"
            />
            <path
              id="30"
              d="m0.736 99.627 1.9647 20.034 31.991-6.4549a66.854 66.854 0 0 1-1.3203-13.221 66.854 66.854 0 0 1 5.29e-4 -0.24133z"
            />
          </g>
        </svg>
      </div>
    );
  }
}

export default MoonDiagram;
